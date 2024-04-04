import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
  },
  reducers: {
    setWeatherData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { updateToken, updateUser, updateLoggedIn } = weatherSlice.actions;

export default weatherSlice.reducer;
