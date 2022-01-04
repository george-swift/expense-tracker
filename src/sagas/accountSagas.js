import { call, put } from '@redux-saga/core/effects';
import { requestFailed } from '../actions';
import * as api from '../api';
import { authenticateUser, editUserSucceeded, signOutSucceeded } from '../slice/user';

export function* signUp({ payload }) {
  try {
    const { data } = yield call(api.createAccount, payload);
    yield put(authenticateUser(data));
    localStorage.setItem('exp_tracker', JSON.stringify(data));
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}

export function* signIn({ payload }) {
  try {
    const { data } = yield call(api.signIn, payload);
    yield put(authenticateUser(data));
    localStorage.setItem('exp_tracker', JSON.stringify(data));
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}

export function* editAccount({ payload }) {
  const { id, data: params } = payload;
  try {
    const { data: { user } } = yield call(api.editUserDetails, id, params);
    yield put(editUserSucceeded(user));
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}

export function* signOut() {
  try {
    const { data } = yield call(api.signOut);
    yield put(signOutSucceeded(data));
    localStorage.removeItem('exp_tracker');
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}
