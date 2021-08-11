import * as ux from '../constants';

const initialState = { isLoading: false, error: null };

export default function notifications(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ux.CREATE_ACCOUNT_REQUEST:
    case ux.LOG_IN_REQUEST:
    case ux.CREATE_LIST:
    case ux.FETCH_EXPENSES:
    case ux.CREATE_EXPENSE:
    case ux.SHOW_EXPENDITURE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ux.REQUEST_FAILED:
      return { isLoading: false, error: payload };

    case ux.USER_AUTHENTICATED:
    case ux.FETCH_LISTS_SUCCESSFUL:
    case ux.CREATE_LIST_SUCCESSFUL:
    case ux.FETCH_EXPENSES_SUCCESSFUL:
    case ux.CREATE_EXPENSE_SUCCESSFUL:
    case ux.SHOW_EXPENDITURE_SUCCESSFUL:
    case ux.CLEAR_NOTIFICATIONS:
      return { ...initialState };

    default:
      return state;
  }
}
