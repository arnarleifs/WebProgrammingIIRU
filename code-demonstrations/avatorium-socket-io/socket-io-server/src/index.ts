import { createServer } from "http";
import { randomBytes } from "crypto";
import { Server } from "socket.io";
import { InMemorySessionStore } from "./stores/session-store";
import { ClientToServerEvents } from "./types/client-to-server-events";
import { CustomSocket } from "./types/custom-socket";
import { ServerToClientEvents } from "./types/server-to-client-events";
import { Session } from "./types/session";

const httpServer = createServer();
const randomId = (): string => randomBytes(16).toString("hex");

const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

const sessionStore = new InMemorySessionStore();

io.use((socket: CustomSocket, next) => {
  const sessionID = socket.handshake.auth.sessionID;
  if (sessionID) {
    const session = sessionStore.findSession(sessionID);
    if (session) {
      socket.data.sessionID = sessionID;
      socket.data.userID = session.userID;
      socket.data.avatar = session.avatar;
      return next();
    }
  }
  const avatar = socket.handshake.auth.avatar;
  if (!avatar) {
    return next(new Error("invalid avatar"));
  }

  socket.data.sessionID = randomId();
  socket.data.userID = randomId();
  socket.data.avatar = avatar;

  next();
});

const getListOfUsers = (): Session[] => {
  const sessions = sessionStore.findAllSessions();
  const users: Session[] = [];

  sessions.forEach((session) => {
    users.push({
      userID: session.userID,
      username: session.username,
      avatar: session.avatar,
      connected: session.connected,
    });
  });
  return users;
};

io.on("connection", (socket: CustomSocket) => {
  // persist session
  sessionStore.saveSession(socket.data.sessionID, {
    userID: socket.data.userID,
    avatar: socket.data.avatar,
    username: socket.data.username,
    connected: true,
  });

  // emit session details
  socket.emit("session", {
    sessionID: socket.data.sessionID,
    userID: socket.data.userID,
    username: socket.data.username,
    avatar: socket.data.avatar,
  });

  socket.join(socket.data.userID);

  console.log(`Connected with avatar URL ${socket.data.avatar}`);

  // Broadcast to all users the newly connected user
  socket.broadcast.emit("connected_user", {
    userID: socket.data.userID,
    username: socket.data.username,
    avatar: socket.data.avatar,
    connected: true,
  });

  socket.on("users", () => {
    socket.emit("users", getListOfUsers());
  });

  socket.on("leave", () => {
    sessionStore.removeSession(socket.data.sessionID);
    socket.broadcast.emit("user_left", socket.data.userID);
  });

  socket.on("disconnect", () => {
    console.log(`Disconnected: ${socket.data.avatar}`);

    const session = sessionStore.findSession(socket.data.sessionID);

    if (session) {
      // update the connection status of the session
      sessionStore.saveSession(socket.data.sessionID, {
        userID: socket.data.userID,
        username: socket.data.username,
        avatar: socket.data.avatar,
        connected: false,
      });

      // notify other users
      socket.broadcast.emit("disconnected_user", socket.data.userID);
    }
  });
});

httpServer.listen(8080);
