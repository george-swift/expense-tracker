import { runSaga } from 'redux-saga';
import { takeEvery, takeLatest } from '@redux-saga/core/effects';
import {
  signUp, signIn, editAccount, signOut,
} from './accountSagas';
import fetchReports from './reportSaga';
import { createList, updateList, deleteList } from './listSagas';
import {
  fetchExpenses, createExpense, updateExpense, deleteExpense,
} from './expenseSagas';
import {
  SIGN_UP, LOG_IN, EDIT_USER, AUTHENTICATE_USER,
  CREATE_LIST, UPDATE_LIST, DELETE_LIST,
  FETCH_EXPENSES, CREATE_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE,
  SIGN_OUT,
} from '../constants';

export default function* rootSaga() {
  yield takeEvery(SIGN_UP, signUp);
  yield takeEvery(LOG_IN, signIn);
  yield takeLatest(AUTHENTICATE_USER, fetchReports);
  yield takeLatest(EDIT_USER, editAccount);
  yield takeLatest(SIGN_OUT, signOut);
  yield takeEvery(CREATE_LIST, createList);
  yield takeEvery(UPDATE_LIST, updateList);
  yield takeLatest(DELETE_LIST, deleteList);
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
