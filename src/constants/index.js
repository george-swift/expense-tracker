export const API_BASE_URL = 'https://api-expense-tracker.herokuapp.com/';

export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
export const CREATE_ACCOUNT_SUCCESSFUL = 'CREATE_ACCOUNT_SUCCESSFUL';
export const CREATE_ACCOUNT_FAILED = 'CREATE_ACCOUNT_FAILED';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESSFUL = 'LOG_IN_SUCCESSFUL';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';

export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_SUCCESSFUL = 'EDIT_USER_SUCCESSFUL';
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_FAILED = 'SIGN_OUT_FAILED';
export const SIGN_OUT_SUCCESSFUL = 'SIGN_OUT_SUCCESSFUL';

export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

export const FETCH_LISTS = 'FETCH_LISTS';
export const FETCH_LISTS_SUCCESSFUL = 'FETCH_LISTS_SUCCESSFUL';
export const FETCH_LISTS_FAILED = 'FETCH_LISTS_FAILED';

export const CREATE_LIST = 'CREATE_LIST';
export const CREATE_LIST_SUCCESSFUL = 'CREATE_LIST_SUCCESSFUL';
export const CREATE_LIST_FAILED = 'CREATE_LIST_FAILED';

export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_LIST_SUCCESSFUL = 'UPDATE_LIST_SUCCESSFUL';
export const UPDATE_LIST_FAILED = 'UPDATE_LIST_FAILED';

export const DELETE_LIST = 'DELETE_LIST';
export const DELETE_LIST_SUCCESSFUL = 'DELETE_LIST_SUCCESSFUL';
export const DELETE_LIST_FAILED = 'DELETE_LIST_FAILED';

export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const FETCH_EXPENSES_SUCCESSFUL = 'FETCH_EXPENSES_SUCCESSFUL';
export const FETCH_EXPENSES_FAILED = 'FETCH_EXPENSES_FAILED';

export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const CREATE_EXPENSE_SUCCESSFUL = 'CREATE_EXPENSE_SUCCESSFUL';
export const CREATE_EXPENSE_FAILED = 'CREATE_EXPENSE_FAILED';

export const SHOW_EXPENSES_REQUEST = 'SHOW_EXPENSES_REQUEST';
export const SHOW_EXPENSES_SUCCESSFUL = 'SHOW_EXPENSES_SUCCESSFUL';
export const SHOW_EXPENSES_FAILED = 'SHOW_EXPENSES_FAILED';

export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const UPDATE_EXPENSE_SUCCESSFUL = 'UPDATE_EXPENSE_SUCCESSFUL';
export const UPDATE_EXPENSE_FAILED = 'UPDATE_EXPENSE_FAILED';

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const DELETE_EXPENSE_SUCCESSFUL = 'DELETE_EXPENSE_SUCCESSFUL';
export const DELETE_EXPENSE_FAILED = 'DELETE_EXPENSE_FAILED';

export const UI = { isLoading: false, error: null };
export const userDetails = { loggedIn: false, info: {} };

export const userFormFields = {
  usernameField: 'Username',
  emailField: 'Email',
  passwordField: 'Password',
  passwordConfirmationField: 'Password Confirmation',
};

export const expenseFormFields = {
  titleField: 'Title*',
  amountField: 'Amount* ($)',
  dateField: 'Incurred On*',
  notesField: 'Notes',
};
