import { Router } from 'express';
import { registerUser, authenticateUser } from '../services/userService.js';
import { body } from 'express-validator';
import validateErrors from './helpers/validateErrors.js';
import passport from 'passport';
import LocalStrategy from 'passport-local';
const router = Router();

passport.use(new LocalStrategy(async (username, password, cb) => {
  const user = await authenticateUser(username, password);
  if (!user) { return cb(null, false, { message: 'Incorrect username or password' }); }
  return cb(null, user);
}));

router.post(
  '/register',
  // Username must be an email
  body('username').isLength({ min: 3 }),
  // Display name must be at least 3 characters long
  body('displayName').isLength({ min: 3 }),
  // Password must be at least 8 characters long
  body('password').isLength({ min: 8 }),
  validateErrors,
  async (req, res) => {
    const { username, displayName, password } = req.body;
    const success = await registerUser(username, displayName, password);
    return success ? res.sendStatus(201) : res.sendStatus(500);
});

router.get('/user/info', (req, res) => {
  if (req.user) { return res.json(req.user); }
  return res.sendStatus(401);
});

router.post(
  '/login/password', 
  body('username').isLength({ min: 3 }),
  body('password').exists(),
  validateErrors,
  passport.authenticate('local', {
    successRedirect: '/user/info'
  }));

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user._id, username: user.username, displayName: user.displayName, avatar: user.avatar });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

export default router;