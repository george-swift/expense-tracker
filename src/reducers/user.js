import {
  USER_AUTHENTICATED,
  EDIT_USER_SUCCESSFUL,
  SIGN_OUT_SUCCESSFUL,
} from '../constants';

const initialState = { authenticated: false, user: null };

export default function user(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_AUTHENTICATED:
      return payload;

    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        user: { ...payload },
      };

    case SIGN_OUT_SUCCESSFUL:
      return { ...initialState };

    default:
      return state;
  }
}
