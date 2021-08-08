import { SHOW_EXPENSES_SUCCESSFUL, SIGN_OUT_SUCCESSFUL } from '../constants';

export default function reports(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_EXPENSES_SUCCESSFUL:
      return [...payload];

    case SIGN_OUT_SUCCESSFUL:
      return [];

    default:
      return state;
  }
}
