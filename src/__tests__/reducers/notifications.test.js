import { FETCH_LISTS_SUCCESSFUL, REQUEST_FAILED } from '../../constants';
import notifications from '../../reducers/notifications';

describe('Testing the notifications reducer', () => {
  const payload = 'Error message';
  const failedAction = { type: REQUEST_FAILED, payload };

  it('should be an object with properties indicating loading and error states by default', () => {
    expect(notifications(undefined, {}))
      .toStrictEqual(
        expect.objectContaining({ isLoading: false, error: null }),
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
        expect.objectContaining({ isLoading: false, error: null }),
      );
  });
});
