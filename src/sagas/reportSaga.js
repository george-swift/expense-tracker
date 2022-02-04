import { all, call, put } from '@redux-saga/core/effects';
import { requestFailed } from '../actions';
import { userDetails } from '../api';
import { fetchListsSucceeded } from '../slice/lists';
import { fetchReportSucceeded } from '../slice/reports';

export default function* fetchReports({ payload }) {
  const { id } = payload.user;
  try {
    const { data: { lists, expenses } } = yield call(userDetails, id);
    yield all([
      put(fetchListsSucceeded(lists)),
      put(fetchReportSucceeded(expenses)),
    ]);
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}
