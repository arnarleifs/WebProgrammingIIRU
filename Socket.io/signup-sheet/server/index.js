import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import passport from 'passport';
import session from 'express-session';
import authRoutes from './routes/auth.js';
import indexRoutes from './routes/index.js';
import { addUserToEvent } from './services/eventService.js';

const port = process.env.PORT || 4567;
const app = express();
const httpServer = createServer(app);

app.use(express.json({
  limit: '50mb'
}));
app.use(cors({
  origin: [ 'http://localhost:3000' ],
  credentials: true
}));
app.use(session({
  secret: '8cee8454e55618a295c425892ec59370',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.authenticate('session'));
app.use(authRoutes);
app.use(indexRoutes);
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack);
    return res.status(500).send('A server error occurred.');
  }
});

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    allowedHeaders: '*',
    credentials: true
  }
});

io.on('connection', socket => {
  console.log(`New client connected: ${socket.id}`);

  socket.on('newevent', event => {
    io.emit('newevent', event);
  });

  socket.on('usersignup', async (eventId, user) => {
    if (await addUserToEvent(eventId, user)) {
      io.emit('usersignup', eventId, user);
    }
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

httpServer.listen(port, () => console.log(`Listening on port ${port}`));