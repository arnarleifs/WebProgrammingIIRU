import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "~/types/user";

const initialState: User[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      return action.payload;
    },
    addConnectedUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
    removeDisconnectedUser: (state, action: PayloadAction<string>) => {
      return state.filter((user) => user.userID !== action.payload);
    },
  },
});

export const { setUsers, addConnectedUser, removeDisconnectedUser } =
  usersSlice.actions;
export default usersSlice.reducer;
