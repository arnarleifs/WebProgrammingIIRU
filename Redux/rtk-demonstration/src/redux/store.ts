import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter-slice";
import userReducer from "./features/user/user-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
