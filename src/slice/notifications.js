/* eslint-disable no-param-reassign */
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  clearNotifications, createExpense, createList, fetchExpenses,
  fetchReport, logInRequest, requestFailed, signUpRequest,
} from '../actions';
import { createExpenseSucceeded, fetchExpensesSucceeded } from './expenses';
import { createListSucceeded, fetchListsSucceeded } from './lists';
import { fetchReportSucceeded } from './reports';
import { authenticateUser } from './user';

const initialState = {
  isLoading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(requestFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addMatcher(
      isAnyOf(signUpRequest, logInRequest, fetchReport, createList, fetchExpenses, createExpense),
      (state) => {
        state.isLoading = true;
        state.error = null;
      },
    ).addMatcher(
      isAnyOf(
        authenticateUser, fetchReportSucceeded, fetchListsSucceeded, createListSucceeded,
        fetchExpensesSucceeded, createExpenseSucceeded, clearNotifications,
      ),
      () => initialState,
    ),
});

export default notificationSlice.reducer;
