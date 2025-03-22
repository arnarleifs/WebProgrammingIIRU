import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Session } from "~/types/session";

interface SessionState {
  session: Session | Record<string, never>;
}

const initialState: SessionState = {
  session: {},
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    addSession: (state, action: PayloadAction<Session>) => {
      localStorage.setItem("s.id", action.payload.sessionID);
      state.session = action.payload;
    },
  },
});

export const { addSession } = sessionSlice.actions;
export default sessionSlice.reducer;
