import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/user-slice";
import eventsReducer from "./features/events/events-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventsReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
