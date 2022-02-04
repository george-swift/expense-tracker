import {
  call, put, takeEvery, takeLatest,
} from '@redux-saga/core/effects';
import * as api from '../api';
import { requestFailed } from '../actions';
import { createListSucceeded, updateListSucceeded, deleteListSucceeded } from '../slice/lists';
import { CREATE_LIST, UPDATE_LIST, DELETE_LIST } from '../utils';

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

const listSagas = () => ([
  takeEvery(CREATE_LIST, createList),
  takeLatest(UPDATE_LIST, updateList),
  takeLatest(DELETE_LIST, deleteList),
]);

export default listSagas;
