import { createAction } from '@reduxjs/toolkit';
import {
  SIGN_UP, LOG_IN, AUTHENTICATE_USER, EDIT_USER, SIGN_OUT,
  CREATE_LIST, UPDATE_LIST, DELETE_LIST, FETCH_EXPENSES,
  CREATE_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE,
  FETCH_REPORT, REQUEST_FAILED, CLEAR_NOTIFICATIONS,
} from '../constants';

export const signUpRequest = createAction(SIGN_UP, (data) => ({ payload: { user: data } }));

export const logInRequest = createAction(LOG_IN, (data) => ({ payload: data }));

export const authUser = createAction(AUTHENTICATE_USER, (data) => ({ payload: data }));

export const editUserRequest = createAction(EDIT_USER, (id, data) => (
  {
    payload: {
      id,
      data,
    },
  }
));

export const signOutRequest = createAction(SIGN_OUT);

export const clearNotifications = createAction(CLEAR_NOTIFICATIONS);

export const fetchReport = createAction(FETCH_REPORT, (id) => ({ payload: id }));

export const createList = createAction(CREATE_LIST, (id, data) => (
  {
    payload: {
      id,
      data,
    },
  }
));

export const updateList = createAction(UPDATE_LIST, (id, data) => (
  {
    payload: {
      id,
      data,
    },
  }
));

export const deleteList = createAction(DELETE_LIST, (id) => ({ payload: id }));

export const fetchExpenses = createAction(FETCH_EXPENSES, (id) => ({ payload: id }));

export const createExpense = createAction(CREATE_EXPENSE, (id, data) => (
  {
    payload: {
      id,
      data,
    },
  }
));

export const updateExpense = createAction(UPDATE_EXPENSE, (id, data) => (
  {
    payload: {
      id,
      data,
    },
  }
));

export const deleteExpense = createAction(DELETE_EXPENSE, (id) => ({ payload: id }));

export const requestFailed = createAction(REQUEST_FAILED, (message) => ({ payload: message }));
