import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    password: null,
    displayName: null,
    phoneNumber: null,
    token: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.displayName = action.payload.displayName;
      state.phoneNumber = action.payload.phoneNumber;
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.email = null;
      state.password = null;
      state.displayName = null;
      state.phoneNumber = null;
      state.token = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, logout, setError } = userSlice.actions;

export default userSlice.reducer;
