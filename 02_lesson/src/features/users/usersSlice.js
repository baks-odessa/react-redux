import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Dave Green' },
  { id: '1', name: 'Bob Alen' },
  { id: '2', name: 'Arture Ancle' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
