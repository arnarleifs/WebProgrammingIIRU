import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    fullName: "",
    image: "",
  },
  reducers: {
    update: (state, action) => {
      return action.payload;
    },
  },
});

export const { update } = profileSlice.actions;

export default profileSlice.reducer;
