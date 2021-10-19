import { all, call, put } from '@redux-saga/core/effects';
import { requestFailed } from '../actions';
import { userDetails, fetchLists } from '../api';
import { fetchListsSucceeded } from '../slice/lists';
import { fetchReportSucceeded } from '../slice/reports';

export default function* fetchReports({ payload }) {
  const { id } = payload.user;
  try {
    const [{ data: reports }, { data: lists }] = yield all([
      call(userDetails, id),
      call(fetchLists, id),
    ]);

    yield all([
      put(fetchReportSucceeded(reports.expenses)),
      put(fetchListsSucceeded(lists)),
    ]);
  } catch (e) {
    yield put(requestFailed(e.message));
  }
}
