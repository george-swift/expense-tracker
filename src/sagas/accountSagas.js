import { call, put } from '@redux-saga/core/effects';
import * as api from '../api';
import {
  CREATE_ACCOUNT_FAILED, CREATE_ACCOUNT_SUCCESSFUL,
  EDIT_USER_FAILED, EDIT_USER_SUCCESSFUL,
  LOG_IN_FAILED, LOG_IN_SUCCESSFUL,
  SIGN_OUT_FAILED, SIGN_OUT_SUCCESSFUL,
} from '../constants';

export function* signUp({ payload }) {
  try {
    const { data } = yield call(api.createAccount, payload);
    const { user } = data;
    yield put({
      type: CREATE_ACCOUNT_SUCCESSFUL,
      payload: user,
    });
  } catch (e) {
    yield put({
      type: CREATE_ACCOUNT_FAILED,
      payload: e.message,
    });
  }
}

export function* signIn({ payload }) {
  try {
    const { data } = yield call(api.signIn, payload);
    const { user } = data;
    yield put({
      type: LOG_IN_SUCCESSFUL,
      payload: user,
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILED,
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
      type: EDIT_USER_FAILED,
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
      type: SIGN_OUT_FAILED,
      payload: e.message,
    });
  }
}
