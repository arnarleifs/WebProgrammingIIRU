import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    fullName: '',
    image: ''
  },
  reducers: {
    update: (state, action) => {
      console.log(state);
      console.log(action);
      // Uses Immer to allow "mutations"
      state.fullName = action.payload.fullName;
      state.image = action.payload.image;
    }
  }
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;
