import { createSlice } from "@reduxjs/toolkit";
import json from '../resources/news.json';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    value: json.news
  },
  reducers: {
    add: (state, action) => {
      const latestId = Math.max(...state.value.map(n => n.id)) + 1;
      state.value = [...state.value, {
        id: latestId,
        ...action.payload,
      }];
    },
    edit: (state, action) => {
      state.value = state.value.map(n => {
        if (n.id === action.payload.id) {
          return {
            ...action.payload
          }
        }
        return n;
      });
    },
    remove: (state, action) => {
      state.value = state.value.filter(n => n.id !== action.payload);
    }
  }
});

export const { add, edit, remove } = newsSlice.actions;
export default newsSlice.reducer;
