import { call, put } from '@redux-saga/core/effects';
import * as api from '../api';
import {
  USER_AUTHENTICATED,
  EDIT_USER_SUCCESSFUL,
  SIGN_OUT_SUCCESSFUL,
  REQUEST_FAILED,
} from '../constants';

export function* signUp({ payload }) {
  try {
    const { data } = yield call(api.createAccount, payload);
    yield put({
      type: USER_AUTHENTICATED,
      payload: data,
    });
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
    yield put({
      type: USER_AUTHENTICATED,
      payload: data,
    });
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
      paylaod: e.message,
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
  } catch (e) {
    yield put({
      type: REQUEST_FAILED,
      payload: e.message,
    });
  }
}
