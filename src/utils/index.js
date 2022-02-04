import buildChart from './chartBuilder';
import iconify from './iconify';
import gridColumns from './gridColumns';
import { actionTheme, modalTheme } from './muiThemes';
import { suggested, miscellaenous } from './autoComplete';

export const SIGN_UP = 'user/signUp';
export const LOG_IN = 'user/logIn';
export const AUTH_USER = 'user/authenticateUser';
export const EDIT_USER = 'user/edit';
export const SIGN_OUT = 'user/signOut';

export const CREATE_LIST = 'lists/createList';
export const UPDATE_LIST = 'lists/updateList';
export const DELETE_LIST = 'lists/deleteList';

export const FETCH_REPORT = 'reports/fetchReport';

export const FETCH_EXPENSES = 'expenses/fetchExpenses';
export const CREATE_EXPENSE = 'expenses/createExpense';
export const UPDATE_EXPENSE = 'expenses/updateExpense';
export const DELETE_EXPENSE = 'expenses/deleteExpense';

export const REQUEST_FAILED = 'requestFailed';
export const CLEAR_NOTIFICATIONS = 'clearNotifications';

export {
  buildChart,
  iconify,
  gridColumns,
  actionTheme,
  modalTheme,
  suggested,
  miscellaenous,
};
