import { combineReducers } from 'redux';
import user from './user';
import lists from './lists';
import expenses from './expenses';
import notifications from './notifications';
import reports from './reports';

const rootReducer = combineReducers({
  user,
  lists,
  expenses,
  notifications,
  reports,
});

export default rootReducer;
