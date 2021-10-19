import { createSlice } from '@reduxjs/toolkit';

const ListSlice = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    fetchListsSucceeded: (state, action) => action.payload,
    createListSucceeded: (state, action) => {
      state.push(action.payload);
    },
    updateListSucceeded: (state, action) => state.map((list) => (
      list.id === action.payload.id
        ? { ...list, ...action.payload }
        : list
    )),
    deleteListSucceeded: (state, action) => state.filter((list) => list.id !== action.payload),
  },
});

export const {
  fetchListsSucceeded,
  createListSucceeded,
  updateListSucceeded,
  deleteListSucceeded,
} = ListSlice.actions;

export default ListSlice.reducer;
