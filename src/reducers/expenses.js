import {
  FETCH_EXPENSES_SUCCESSFUL, CREATE_EXPENSE_SUCCESSFUL,
  UPDATE_EXPENSE_SUCCESSFUL, DELETE_EXPENSE_SUCCESSFUL,
} from '../constants';

export default function expenses(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_EXPENSES_SUCCESSFUL:
      return payload;

    case CREATE_EXPENSE_SUCCESSFUL:
      return [...state, payload];

    case UPDATE_EXPENSE_SUCCESSFUL:
      return [
        ...state.map((expense) => (
          expense.id === payload.id
            ? { ...expense, ...payload }
            : expense)),
      ];

    case DELETE_EXPENSE_SUCCESSFUL:
      return state.filter((expense) => expense.id !== payload);

    default:
      return state;
  }
}
