import { call, put } from '@redux-saga/core/effects';
import * as api from '../api';
import {
  FETCH_LISTS_SUCCESSFUL,
  CREATE_LIST_SUCCESSFUL,
  UPDATE_LIST_SUCCESSFUL,
  DELETE_LIST_SUCCESSFUL,
  REQUEST_FAILED,
} from '../constants';

export function* fetchLists({ payload }) {
  const { id } = payload.user;
  try {
    const { data } = yield call(api.fetchLists, id);
    yield put({
      type: FETCH_LISTS_SUCCESSFUL,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: REQUEST_FAILED,
      payload: e.message,
    });
  }
}

export function* createList({ payload }) {
  const { id, data: list } = payload;
  try {
    const { data } = yield call(api.createList, id, list);
    yield put({
      type: CREATE_LIST_SUCCESSFUL,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: REQUEST_FAILED,
      payload: e.message,
    });
  }
}

export function* updateList({ payload }) {
  const { id, data: params } = payload;
  try {
    const { data } = yield call(api.updateList, id, params);
    const { list } = data;
    yield put({
      type: UPDATE_LIST_SUCCESSFUL,
      payload: list,
    });
  } catch (error) {
    yield put({
      type: REQUEST_FAILED,
      payload: error.message,
    });
  }
}

export function* deleteList({ payload }) {
  try {
    const { data } = yield call(api.deleteList, payload);
    const { id } = data;
    yield put({
      type: DELETE_LIST_SUCCESSFUL,
      payload: id,
    });
  } catch (error) {
    yield put({
      type: REQUEST_FAILED,
      payload: error.message,
    });
  }
}
