import { call, put } from '@redux-saga/core/effects';
import { requestFailed } from '../actions';
import * as api from '../api';
import { createListSucceeded, deleteListSucceeded, updateListSucceeded } from '../slice/lists';

export function* createList({ payload }) {
  const { id, data: list } = payload;
  try {
    const { data } = yield call(api.createList, id, list);
    yield put(createListSucceeded(data));
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}

export function* updateList({ payload }) {
  const { id, data: params } = payload;
  try {
    const { data: { list } } = yield call(api.updateList, id, params);
    yield put(updateListSucceeded(list));
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}

export function* deleteList({ payload }) {
  try {
    const { data: { id } } = yield call(api.deleteList, payload);
    yield put(deleteListSucceeded(id));
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}
