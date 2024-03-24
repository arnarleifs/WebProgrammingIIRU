import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types/user";

interface UserSliceState {
  user: Partial<User>;
}

const initialState: UserSliceState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
