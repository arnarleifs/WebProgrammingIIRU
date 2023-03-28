import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import { createServer } from "http";
const server = createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    // Broadcast the message to all connected sockets
    io.emit("message", message);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`listening on *:${process.env.PORT}`);
});
