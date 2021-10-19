import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    fetchExpensesSucceeded: (state, action) => action.payload,
    createExpenseSucceeded: (state, action) => {
      state.push(action.payload);
    },
    updateExpenseSucceeded: (state, action) => state
      .map((expense) => (
        expense.id === action.payload.id
          ? { ...expense, ...action.payload }
          : expense
      )),
    deleteExpenseSucceeded: (state, action) => state
      .filter((expense) => expense.id !== action.payload),
  },
});

export const {
  fetchExpensesSucceeded,
  createExpenseSucceeded,
  updateExpenseSucceeded,
  deleteExpenseSucceeded,
} = expenseSlice.actions;

export default expenseSlice.reducer;
