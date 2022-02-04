import {
  call, put, select, takeEvery, takeLatest,
} from '@redux-saga/core/effects';
import * as api from '../api';
import { getUser } from '../selectors';
import { requestFailed } from '../actions';
import { authenticateUser } from '../slice/user';
import {
  fetchExpensesSucceeded, createExpenseSucceeded,
  updateExpenseSucceeded, deleteExpenseSucceeded,
} from '../slice/expenses';
import {
  FETCH_EXPENSES, CREATE_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE,
} from '../utils';

export function* fetchExpenses({ payload }) {
  try {
    const { data } = yield call(api.fetchExpenses, payload);
    yield put(fetchExpensesSucceeded(data));
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}

export function* createExpense({ payload }) {
  const { id, data: expense } = payload;
  const user = yield select(getUser);
  try {
    const { data } = yield call(api.createExpense, id, expense);
    yield put(createExpenseSucceeded(data));
    yield put(authenticateUser(user));
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}

export function* updateExpense({ payload }) {
  const { id, data: params } = payload;
  const user = yield select(getUser);
  try {
    const { data: { expense } } = yield call(api.updateExpense, id, params);
    yield put(updateExpenseSucceeded(expense));
    yield put(authenticateUser(user));
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}

export function* deleteExpense({ payload }) {
  const user = yield select(getUser);
  try {
    const { data: { id } } = yield call(api.deleteExpense, payload);
    yield put(deleteExpenseSucceeded(id));
    yield put(authenticateUser(user));
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}

const expenseSagas = () => ([
  takeEvery(FETCH_EXPENSES, fetchExpenses),
  takeEvery(CREATE_EXPENSE, createExpense),
  takeLatest(UPDATE_EXPENSE, updateExpense),
  takeLatest(DELETE_EXPENSE, deleteExpense),
]);

export default expenseSagas;
