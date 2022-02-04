import {
  call, put, takeLeading, takeEvery, takeLatest,
} from '@redux-saga/core/effects';
import * as api from '../api';
import { requestFailed } from '../actions';
import { authenticateUser, editUserSucceeded, signOutSucceeded } from '../slice/user';
import fetchReports from './reportSaga';
import {
  SIGN_UP, LOG_IN, EDIT_USER, AUTH_USER, SIGN_OUT,
} from '../utils';

const saveAuthItem = (authItem) => localStorage.setItem('exp_tracker', JSON.stringify(authItem));
const removeAuthItem = () => localStorage.removeItem('exp_tracker');

export function* signUp({ payload }) {
  try {
    const { data } = yield call(api.createAccount, payload);
    yield put(authenticateUser(data));
    yield call(saveAuthItem, data);
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}

export function* signIn({ payload }) {
  try {
    const { data } = yield call(api.signIn, payload);
    yield put(authenticateUser(data));
    yield call(saveAuthItem, data);
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
    yield call(removeAuthItem);
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}

const accountSagas = () => ([
  takeEvery(SIGN_UP, signUp),
  takeLeading(LOG_IN, signIn),
  takeLatest(AUTH_USER, fetchReports),
  takeLatest(EDIT_USER, editAccount),
  takeEvery(SIGN_OUT, signOut),
]);

export default accountSagas;
