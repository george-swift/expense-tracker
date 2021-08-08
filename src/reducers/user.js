import {
  userDetails,
  CREATE_ACCOUNT_SUCCESSFUL,
  LOG_IN_SUCCESSFUL,
  EDIT_USER_SUCCESSFUL,
  SIGN_OUT_SUCCESSFUL,
} from '../constants';

export default function user(state = userDetails, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ACCOUNT_SUCCESSFUL:
    case LOG_IN_SUCCESSFUL:
      return {
        ...state,
        loggedIn: true,
        info: { ...payload },
      };

    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        info: { ...payload },
      };

    case SIGN_OUT_SUCCESSFUL:
      return { ...userDetails };

    default:
      return state;
  }
}
