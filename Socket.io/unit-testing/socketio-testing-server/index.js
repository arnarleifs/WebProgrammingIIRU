import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

import { createServer } from "http";
const server = createServer(app);
import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    // Broadcast the message to all connected sockets
    io.emit("message", { message, timestamp: new Date().toLocaleDateString() });
  });
});

server.listen(process.env.PORT, () => {
  console.log(`listening on *:${process.env.PORT}`);
});
