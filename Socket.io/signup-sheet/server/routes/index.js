import { Router } from "express";
import { body } from "express-validator";
import ensureLogin from "./helpers/ensureLogin.js";
import validateErrors from './helpers/validateErrors.js';
import { getEvents, createEvent } from "../services/eventService.js";
const router = Router();

router.get('/events', ensureLogin, async (req, res) => res.json(await getEvents()));

router.post(
  '/events',
  body('title').isLength({ min: 3 }),
  body('start').isString(),
  body('end').isString(),
  body('host').isObject(),
  body('maximum').isNumeric({ min: 2 }),
  validateErrors,
  ensureLogin,
  async (req, res) => {
    const result = await createEvent(req.body);
    return result.acknowledged ? res.status(201).json({
      ...req.body,
      _id: result.insertedId,
      attendees: []
    }) : res.sendStatus(400);
});

export default router;