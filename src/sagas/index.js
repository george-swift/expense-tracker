import { runSaga } from 'redux-saga';
import { takeEvery, takeLatest } from '@redux-saga/core/effects';

import {
  signUp, signIn, editAccount, signOut,
} from './accountSagas';

import {
  fetchLists, createList, updateList, deleteList,
} from './listSagas';

import {
  fetchExpenses, createExpense,
  updateExpense, deleteExpense,
  showUserExpenses,
} from './expenseSagas';

import {
  CREATE_ACCOUNT_REQUEST, LOG_IN_REQUEST,
  FETCH_LISTS, CREATE_LIST, UPDATE_LIST, DELETE_LIST,
  FETCH_EXPENSES, CREATE_EXPENSE, UPDATE_EXPENSE,
  DELETE_EXPENSE, SHOW_EXPENSES_REQUEST,
  SIGN_OUT_REQUEST,
  EDIT_USER_REQUEST,
} from '../constants';

export default function* rootSaga() {
  yield takeEvery(CREATE_ACCOUNT_REQUEST, signUp);
  yield takeEvery(LOG_IN_REQUEST, signIn);
  yield takeLatest(EDIT_USER_REQUEST, editAccount);
  yield takeLatest(SIGN_OUT_REQUEST, signOut);
  yield takeLatest(FETCH_LISTS, fetchLists);
  yield takeEvery(CREATE_LIST, createList);
  yield takeEvery(UPDATE_LIST, updateList);
  yield takeLatest(DELETE_LIST, deleteList);
  yield takeLatest(SHOW_EXPENSES_REQUEST, showUserExpenses);
  yield takeLatest(FETCH_EXPENSES, fetchExpenses);
  yield takeEvery(CREATE_EXPENSE, createExpense);
  yield takeEvery(UPDATE_EXPENSE, updateExpense);
  yield takeLatest(DELETE_EXPENSE, deleteExpense);
}

export const recordSaga = async (saga, initialAction) => {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    initialAction,
  ).done;

  return dispatched;
};
