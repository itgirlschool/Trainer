import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
      state.error = null;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.error = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setError } = userSlice.actions;

export default userSlice.reducer;
