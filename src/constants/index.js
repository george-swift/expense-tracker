export const API_BASE_URL = 'https://api-expense-tracker.herokuapp.com/';

export const REQUEST_FAILED = 'REQUEST_FAILED';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_SUCCESSFUL = 'EDIT_USER_SUCCESSFUL';
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESSFUL = 'SIGN_OUT_SUCCESSFUL';

export const FETCH_LISTS_SUCCESSFUL = 'FETCH_LISTS_SUCCESSFUL';
export const CREATE_LIST = 'CREATE_LIST';
export const CREATE_LIST_SUCCESSFUL = 'CREATE_LIST_SUCCESSFUL';
export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_LIST_SUCCESSFUL = 'UPDATE_LIST_SUCCESSFUL';
export const DELETE_LIST = 'DELETE_LIST';
export const DELETE_LIST_SUCCESSFUL = 'DELETE_LIST_SUCCESSFUL';

export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const FETCH_EXPENSES_SUCCESSFUL = 'FETCH_EXPENSES_SUCCESSFUL';
export const CREATE_EXPENSE = 'CREATE_EXPENSE';
export const CREATE_EXPENSE_SUCCESSFUL = 'CREATE_EXPENSE_SUCCESSFUL';
export const SHOW_EXPENDITURE = 'SHOW_EXPENDITURE';
export const SHOW_EXPENDITURE_SUCCESSFUL = 'SHOW_EXPENDITURE_SUCCESSFUL';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const UPDATE_EXPENSE_SUCCESSFUL = 'UPDATE_EXPENSE_SUCCESSFUL';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const DELETE_EXPENSE_SUCCESSFUL = 'DELETE_EXPENSE_SUCCESSFUL';

export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

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
