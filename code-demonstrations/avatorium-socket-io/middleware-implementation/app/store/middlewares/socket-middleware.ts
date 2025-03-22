import type { Middleware } from "@reduxjs/toolkit";
import io from "socket.io-client";
import { setupListeners } from "./listeners";

const socket = io("http://localhost:8080", {
  autoConnect: false,
});

const socketMiddleware: Middleware = (api) => {
  setupListeners(api, socket);

  return (next) => (action: any) => {
    if (action.type === "socket/connect") {
      const { sessionID, avatar } = action.payload;
      socket.auth = { sessionID, avatar };
      socket.connect();
    }

    if (action.type === "socket/emit") {
      const { evt, body } = action.payload;
      socket.emit(evt, body);
    }

    return next(action);
  };
};

export default socketMiddleware;
