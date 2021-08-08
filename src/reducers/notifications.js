import * as ux from '../constants';

export default function notifications(state = ux.UI, action) {
  const { type, payload } = action;

  switch (type) {
    case ux.CREATE_ACCOUNT_REQUEST:
    case ux.LOG_IN_REQUEST:
    case ux.FETCH_LISTS:
    case ux.CREATE_LIST:
    case ux.FETCH_EXPENSES:
    case ux.CREATE_EXPENSE:
    case ux.SHOW_EXPENSES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ux.CREATE_ACCOUNT_FAILED:
    case ux.LOG_IN_FAILED:
    case ux.FETCH_LISTS_FAILED:
    case ux.CREATE_LIST_FAILED:
    case ux.FETCH_EXPENSES_FAILED:
    case ux.CREATE_EXPENSE_FAILED:
    case ux.UPDATE_EXPENSE_FAILED:
    case ux.SHOW_EXPENSES_FAILED:
    case ux.DELETE_EXPENSE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case ux.CREATE_ACCOUNT_SUCCESSFUL:
    case ux.LOG_IN_SUCCESSFUL:
    case ux.FETCH_LISTS_SUCCESSFUL:
    case ux.CREATE_LIST_SUCCESSFUL:
    case ux.FETCH_EXPENSES_SUCCESSFUL:
    case ux.CREATE_EXPENSE_SUCCESSFUL:
    case ux.UPDATE_EXPENSE_SUCCESSFUL:
    case ux.SHOW_EXPENSES_SUCCESSFUL:
    case ux.DELETE_EXPENSE_SUCCESSFUL:
    case ux.CLEAR_NOTIFICATIONS:
      return { ...ux.UI };

    default:
      return state;
  }
}
