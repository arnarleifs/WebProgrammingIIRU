import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slices/session-slice";
import usersReducer from "./slices/user-slice";
import socketMiddleware from "./middlewares/socket-middleware";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
