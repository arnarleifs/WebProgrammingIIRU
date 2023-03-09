import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import languageReducer from "./slices/languageSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
    language: languageReducer,
  },
});
