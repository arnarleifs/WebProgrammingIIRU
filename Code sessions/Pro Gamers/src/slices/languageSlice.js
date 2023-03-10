import { createSlice } from '@reduxjs/toolkit';
import en from '../resources/site.en.json';
import is from '../resources/site.is.json';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'en',
    translations: en
  },
  reducers: {
    update: (state) => {
      if (state.value === 'en') {
        return {
          value: 'is',
          translations: is
        }
      }

      return {
        value: 'en',
        translations: en
      }
    }
  }
});

export const { update } = languageSlice.actions;
export default languageSlice.reducer;