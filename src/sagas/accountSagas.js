import { call, put } from '@redux-saga/core/effects';
import { authUser } from '../actions';
import * as api from '../api';
import { EDIT_USER_SUCCESSFUL, SIGN_OUT_SUCCESSFUL, REQUEST_FAILED } from '../constants';

export function* signUp({ payload }) {
  try {
    const { data } = yield call(api.createAccount, payload);
    yield put(authUser(data));
    localStorage.setItem('exp_tracker', JSON.stringify(data));
  } catch (e) {
    yield put({
      type: REQUEST_FAILED,
      payload: e.message,
    });
  }
}

export function* signIn({ payload }) {
  try {
    const { data } = yield call(api.signIn, payload);
    yield put(authUser(data));
    localStorage.setItem('exp_tracker', JSON.stringify(data));
  } catch (e) {
    yield put({
      type: REQUEST_FAILED,
      payload: e.message,
    });
  }
}

export function* editAccount({ payload }) {
  const { id, data: params } = payload;
  try {
    const { data } = yield call(api.editUserDetails, id, params);
    const { user } = data;
    yield put({
      type: EDIT_USER_SUCCESSFUL,
      payload: user,
    });
  } catch (e) {
    yield put({
      type: REQUEST_FAILED,
      payload: e.message,
    });
  }
}

export function* signOut() {
  try {
    const { data } = yield call(api.signOut);
    yield put({
      type: SIGN_OUT_SUCCESSFUL,
      payload: data,
    });
    localStorage.removeItem('exp_tracker');
  } catch (e) {
    yield put({
      type: REQUEST_FAILED,
      payload: e.message,
    });
  }
}
