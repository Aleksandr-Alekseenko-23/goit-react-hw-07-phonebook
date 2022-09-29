import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    filterUsers(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filterUsers } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
