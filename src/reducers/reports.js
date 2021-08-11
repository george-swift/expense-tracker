import { SHOW_EXPENDITURE_SUCCESSFUL } from '../constants';

export default function reports(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_EXPENDITURE_SUCCESSFUL:
      return payload;

    default:
      return state;
  }
}
