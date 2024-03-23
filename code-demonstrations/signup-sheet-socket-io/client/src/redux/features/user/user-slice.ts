import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types";

const initialState: Partial<User> = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
