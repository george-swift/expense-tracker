import { call, put } from '@redux-saga/core/effects';
import * as api from '../api';
import { requestFailed } from '../actions';
import {
  createExpenseSucceeded, deleteExpenseSucceeded,
  fetchExpensesSucceeded, updateExpenseSucceeded,
} from '../slice/expenses';

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
  try {
    const { data } = yield call(api.createExpense, id, expense);
    yield put(createExpenseSucceeded(data));
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}

export function* updateExpense({ payload }) {
  const { id, data: params } = payload;
  try {
    const { data } = yield call(api.updateExpense, id, params);
    const { expense } = data;
    yield put(updateExpenseSucceeded(expense));
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}

export function* deleteExpense({ payload }) {
  try {
    const { data } = yield call(api.deleteExpense, payload);
    const { id } = data;
    yield put(deleteExpenseSucceeded(id));
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}
