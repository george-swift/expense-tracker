import {
  CLEAR_NOTIFICATIONS, CREATE_ACCOUNT_REQUEST,
  LOG_IN_REQUEST, SIGN_OUT_REQUEST, FETCH_LISTS,
  CREATE_LIST, UPDATE_LIST, DELETE_LIST,
  FETCH_EXPENSES, CREATE_EXPENSE, UPDATE_EXPENSE,
  SHOW_EXPENSES_REQUEST, DELETE_EXPENSE, EDIT_USER_REQUEST,
} from '../constants';

export const createAccountRequest = (data) => ({
  type: CREATE_ACCOUNT_REQUEST,
  payload: { user: data },
});

export const logInRequest = (data) => ({ type: LOG_IN_REQUEST, payload: data });

export const editUserRequest = (id, data) => ({ type: EDIT_USER_REQUEST, payload: { id, data } });

export const signOutRequest = () => ({ type: SIGN_OUT_REQUEST });

export const clearFlash = () => ({ type: CLEAR_NOTIFICATIONS });

export const fetchLists = (id) => ({ type: FETCH_LISTS, payload: id });

export const createList = (id, data) => ({ type: CREATE_LIST, payload: { id, data } });

export const updateList = (id, data) => ({ type: UPDATE_LIST, payload: { id, data } });

export const deleteList = (id) => ({ type: DELETE_LIST, payload: id });

export const fetchExpenses = (id) => ({ type: FETCH_EXPENSES, payload: id });

export const createExpense = (id, data) => ({ type: CREATE_EXPENSE, payload: { id, data } });

export const showExpenses = (id) => ({ type: SHOW_EXPENSES_REQUEST, payload: id });

export const updateExpense = (id, data) => ({ type: UPDATE_EXPENSE, payload: { id, data } });

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, payload: id });
