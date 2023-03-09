import { createSlice } from "@reduxjs/toolkit";
import en from "../resources/site.en.json";
import is from "../resources/site.is.json";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    value: "en",
    translations: en,
  },
  reducers: {
    change: (state) => {
      if (state.value === "en") {
        return {
          value: "is",
          translations: is,
        };
      }
      return {
        value: "en",
        translations: en,
      };
    },
  },
});

export const { change } = languageSlice.actions;

export default languageSlice.reducer;
