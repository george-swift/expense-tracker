import { call, put } from '@redux-saga/core/effects';
import * as api from '../api';
import {
  FETCH_EXPENSES_FAILED, FETCH_EXPENSES_SUCCESSFUL,
  CREATE_EXPENSE_FAILED, CREATE_EXPENSE_SUCCESSFUL,
  UPDATE_EXPENSE_SUCCESSFUL, UPDATE_EXPENSE_FAILED,
  DELETE_EXPENSE_FAILED, DELETE_EXPENSE_SUCCESSFUL,
  SHOW_EXPENSES_FAILED, SHOW_EXPENSES_SUCCESSFUL,
} from '../constants';

export function* fetchExpenses({ payload }) {
  try {
    const { data } = yield call(api.fetchExpenses, payload);
    yield put({
      type: FETCH_EXPENSES_SUCCESSFUL,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: FETCH_EXPENSES_FAILED,
      payload: error.message,
    });
  }
}

export function* createExpense({ payload }) {
  const { id, data: expense } = payload;
  try {
    const { data } = yield call(api.createExpense, id, expense);
    yield put({
      type: CREATE_EXPENSE_SUCCESSFUL,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CREATE_EXPENSE_FAILED,
      payload: error.message,
    });
  }
}

export function* showUserExpenses({ payload }) {
  try {
    const { data } = yield call(api.userDetails, payload);
    const { expenses } = data;
    yield put({
      type: SHOW_EXPENSES_SUCCESSFUL,
      payload: expenses,
    });
  } catch (e) {
    yield put({
      type: SHOW_EXPENSES_FAILED,
      payload: e.message,
    });
  }
}

export function* updateExpense({ payload }) {
  const { id, data: params } = payload;
  try {
    const { data } = yield call(api.updateExpense, id, params);
    const { expense } = data;
    yield put({
      type: UPDATE_EXPENSE_SUCCESSFUL,
      payload: expense,
    });
  } catch (error) {
    yield put({
      type: UPDATE_EXPENSE_FAILED,
      payload: error.message,
    });
  }
}

export function* deleteExpense({ payload }) {
  try {
    const { data } = yield call(api.deleteExpense, payload);
    const { id } = data;
    yield put({
      type: DELETE_EXPENSE_SUCCESSFUL,
      payload: id,
    });
  } catch (error) {
    yield put({
      type: DELETE_EXPENSE_FAILED,
      payload: error.message,
    });
  }
}
