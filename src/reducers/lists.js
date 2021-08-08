import {
  FETCH_LISTS_SUCCESSFUL, CREATE_LIST_SUCCESSFUL,
  UPDATE_LIST_SUCCESSFUL, DELETE_LIST_SUCCESSFUL,
  SIGN_OUT_SUCCESSFUL,
} from '../constants';

export default function lists(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_LISTS_SUCCESSFUL:
      return [...payload];

    case CREATE_LIST_SUCCESSFUL:
      return [...state, payload];

    case UPDATE_LIST_SUCCESSFUL:
      return [
        ...state.map((list) => (
          list.id === payload.id
            ? { ...list, ...payload }
            : list)),
      ];

    case DELETE_LIST_SUCCESSFUL:
      return state.filter((list) => list.id !== payload);

    case SIGN_OUT_SUCCESSFUL:
      return [];

    default:
      return state;
  }
}
