import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/registeredUserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
