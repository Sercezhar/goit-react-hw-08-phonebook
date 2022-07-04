import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isPasswordVisible: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    togglePasswordVisibility(state) {
      state.isPasswordVisible = !state.isPasswordVisible;
    },
  },
  extraReducers: {
    // REGISTER
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    // LOG IN
    [logInUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    // LOG OUT
    [logOutUser.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // CURRENT USER
    [getCurrentUser.pending]: state => {
      state.isFetchingCurrentUser = true;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [getCurrentUser.rejected]: state => {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { togglePasswordVisibility } = authSlice.actions;
