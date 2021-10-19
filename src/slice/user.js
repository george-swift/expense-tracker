/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      state.authenticated = action.payload.authenticated;
      state.user = action.payload.user;
    },
    editUserSucceeded: (state, action) => {
      state.user = action.payload;
    },
    signOutSucceeded: () => initialState,
  },
});

export const { authenticateUser, editUserSucceeded, signOutSucceeded } = userSlice.actions;

export default userSlice.reducer;
