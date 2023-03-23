import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './slices/profileSlice';
import languageReducer from './slices/languageSlice';
import newsReducer from './slices/newsSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    language: languageReducer,
    news: newsReducer
  }
});
