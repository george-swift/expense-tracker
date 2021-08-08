import {
  UI, CREATE_ACCOUNT_REQUEST, FETCH_LISTS_FAILED, FETCH_LISTS_SUCCESSFUL,
} from '../../constants';
import notifications from '../../reducers/notifications';

describe('Testing the notifications reducer', () => {
  const payload = 'Error message';
  const failedAction = { type: FETCH_LISTS_FAILED, payload };

  it('should be an object with properties indicating loading and error states by default', () => {
    expect(notifications(undefined, {}))
      .toStrictEqual(
        expect.objectContaining({ ...UI }),
      );
  });

  it('should update the loading state in the store when an async operation is started', () => {
    const signUpAction = { type: CREATE_ACCOUNT_REQUEST };

    expect(notifications(undefined, signUpAction))
      .toStrictEqual(
        expect.objectContaining({
          ...UI,
          isLoading: true,
        }),
      );
  });

  it('should update the error and loading states in the store when an async operation fails', () => {
    expect(notifications(undefined, failedAction))
      .toStrictEqual(
        expect.objectContaining({
          isLoading: false,
          error: payload,
        }),
      );
  });

  it('should update the error and loading states in the store when an async operation is successful', () => {
    const mockStore = notifications(undefined, failedAction);
    const succesfulAction = ({ type: FETCH_LISTS_SUCCESSFUL });

    expect(notifications(mockStore, succesfulAction))
      .toStrictEqual(
        expect.objectContaining({ ...UI }),
      );
  });
});
