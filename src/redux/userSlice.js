import { createSlice, nanoid } from '@reduxjs/toolkit';

const usersInitialState = [];
const userSlice = createSlice({
  name: 'users',
  initialState: { users: usersInitialState },
  reducers: {
    addUsers(state, { payload }) {
      state.users.push({ ...payload, id: nanoid() });
    },

    deleteUsers(state, action) {
      const index = state.users.findIndex(user => user.id === action.payload);
      state.users.splice(index, 1);
    },
  },
});

export const { addUsers, deleteUsers } = userSlice.actions;
export const userReducer = userSlice.reducer;
