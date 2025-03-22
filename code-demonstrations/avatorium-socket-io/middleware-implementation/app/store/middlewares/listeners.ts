import type { MiddlewareAPI, Store } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { addSession } from "../slices/session-slice";
import {
  setUsers,
  addConnectedUser,
  removeDisconnectedUser,
} from "../slices/user-slice";
import type { User } from "~/types/user";
import type { Session } from "~/types/session";

export const setupListeners = (store: MiddlewareAPI, socket: Socket) => {
  socket.on("session", (session: Session) => {
    store.dispatch(addSession(session));
  });

  socket.on("users", (users: User[]) => {
    store.dispatch(setUsers(users));
  });

  socket.on("connected_user", (user: User) => {
    store.dispatch(addConnectedUser(user));
  });

  socket.on("disconnected_user", (userID: string) => {
    store.dispatch(removeDisconnectedUser(userID));
  });

  socket.on("connect_error", (error) => {
    console.log("Connection Error:", error);
  });

  socket.on("connect_failed", (error) => {
    console.log("Connection Failed:", error);
  });

  socket.on("disconnect", (reason) => {
    console.log("Disconnected:", reason);
  });
};
