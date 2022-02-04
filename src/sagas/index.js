import { runSaga } from 'redux-saga';
import { all } from '@redux-saga/core/effects';
import accountSagas from './accountSagas';
import listSagas from './listSagas';
import expenseSagas from './expenseSagas';

export default function* rootSaga() {
  yield all([
    ...accountSagas(),
    ...listSagas(),
    ...expenseSagas(),
  ]);
}

export const recordSaga = async (saga, initialAction) => {
  const dispatched = [];

  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    initialAction,
  ).done;

  return dispatched;
};
