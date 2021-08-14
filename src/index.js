import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
