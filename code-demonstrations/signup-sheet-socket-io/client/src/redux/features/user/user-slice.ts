import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types";

const initialState: User | undefined = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
