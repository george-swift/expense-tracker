import { REQUEST_FAILED } from '../../utils';
import notifications from '../../slice/notifications';

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
    const succesfulAction = ({ type: 'lists/fetchListsSucceeded' });

    expect(notifications(mockStore, succesfulAction))
      .toStrictEqual(
        expect.objectContaining({ isLoading: false, error: null }),
      );
  });
});
