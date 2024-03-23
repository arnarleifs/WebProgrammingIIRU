import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWithCredentials } from "../../../utilities/fetch-utility";
import { Event } from "../../../types";

export const getEvents = createAsyncThunk("events/getEvents", async () => {
  const response = await fetchWithCredentials("events");
  const data = (await response.json()) as Event[];
  return data;
});

type EventsState = {
  status: "loading" | "idle";
  error: string | null;
  events: Event[];
};

const initialState: EventsState = {
  events: [],
  error: null,
  status: "idle",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEvents.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(getEvents.fulfilled, (state, { payload }) => {
      state.events = payload;
      state.status = "idle";
    });

    builder.addCase(getEvents.rejected, (state, { payload }) => {
      if (payload) {
        state.error = "Could not retrieve events";
      }
      state.status = "idle";
    });
  },
});

export const { setEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
