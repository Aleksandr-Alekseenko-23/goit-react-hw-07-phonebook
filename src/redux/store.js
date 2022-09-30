import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice';
import { usersReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    contacts: usersReducer,
    filter: filtersReducer,
  },
});
