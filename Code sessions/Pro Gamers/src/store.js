import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
});
