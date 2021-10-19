import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import user from '../slice/user';
import lists from '../slice/lists';
import reports from '../slice/reports';
import expenses from '../slice/expenses';
import notifications from '../slice/notifications';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({
    user,
    lists,
    reports,
    expenses,
    notifications,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(sagaMiddleware),
});

export default store;

sagaMiddleware.run(rootSaga);
