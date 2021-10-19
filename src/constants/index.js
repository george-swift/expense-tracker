export const API_BASE_URL = 'https://api-expense-tracker.herokuapp.com/';

export const SIGN_UP = 'user/signUp';
export const LOG_IN = 'user/logIn';
export const AUTHENTICATE_USER = 'user/authenticateUser';
export const EDIT_USER = 'user/edit';
export const EDIT_USER_SUCCESSFUL = 'user/editUserSucceeded';
export const SIGN_OUT = 'user/signOut';
export const SIGN_OUT_SUCCESSFUL = 'user/signOutSucceeded';

export const FETCH_LISTS_SUCCESSFUL = 'lists/fetchListsSucceeded';
export const CREATE_LIST = 'lists/createList';
export const CREATE_LIST_SUCCESSFUL = 'lists/createListSucceeded';
export const UPDATE_LIST = 'lists/updateList';
export const UPDATE_LIST_SUCCESSFUL = 'lists/updateListSucceeded';
export const DELETE_LIST = 'lists/deleteList';
export const DELETE_LIST_SUCCESSFUL = 'lists/deleteListSucceeded';

export const FETCH_REPORT = 'reports/fetchReport';
export const FETCH_REPORT_SUCCESSFUL = 'reports/fetchReportSucceeded';

export const FETCH_EXPENSES = 'expenses/fetchExpenses';
export const FETCH_EXPENSES_SUCCESSFUL = 'expenses/fetchExpensesSucceeded';
export const CREATE_EXPENSE = 'expenses/createExpense';
export const CREATE_EXPENSE_SUCCESSFUL = 'expenses/createExpenseSucceeded';
export const UPDATE_EXPENSE = 'expenses/updateExpense';
export const UPDATE_EXPENSE_SUCCESSFUL = 'expenses/updateExpenseSucceeded';
export const DELETE_EXPENSE = 'expenses/deleteExpense';
export const DELETE_EXPENSE_SUCCESSFUL = 'expenses/deleteExpenseSucceeded';

export const REQUEST_FAILED = 'requestFailed';
export const CLEAR_NOTIFICATIONS = 'clearNotifications';

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

export const defaultColor = '#7fb3d5';

export const dataList = [
  {
    value: 'Food & Drinks',
    color: '#1fb003',
  },
  {
    value: 'Shopping',
    color: '#ffc300',
  },
  {
    value: 'Healthcare',
    color: '#1e8449',
  },
  {
    value: 'Electricity',
    color: '#34495e',
  },
  {
    value: 'Transport',
    color: '#d35400',
  },
  {
    value: 'Travel',
    color: '#8f659a',
  },
  {
    value: 'Other',
    color: '#d35400',
  },
];
