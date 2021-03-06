import { recordSaga } from '../../sagas';
import * as api from '../../api';
import { signIn } from '../../sagas/accountSagas';
import { logInRequest } from '../../actions';
import { REQUEST_FAILED, AUTH_USER } from '../../utils';

describe('Testing the account saga', () => {
  const payload = {
    username: 'Test handle',
    password: 'testingcapstone',
  };

  const mockResponse = {
    id: 2,
    username: payload.username,
    email: 'testuser@test.com',
    password_digest: '1usyebwqoae182',
  };

  api.signIn = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should handle a successful asynchronous action', async () => {
    api.signIn.mockImplementation(() => Promise
      .resolve({
        data: {
          user: mockResponse,
        },
      }));

    const dispatched = await recordSaga(signIn, logInRequest(payload));

    expect(api.signIn).toHaveBeenCalledTimes(1);

    expect(api.signIn).toHaveBeenCalledWith(payload);

    expect(dispatched).toContainEqual({
      type: AUTH_USER,
      payload: {
        user: mockResponse,
      },
    });
  });

  it('should handle an unsuccessful asynchronous action', async () => {
    const error = 'Unauthorized user';

    api.signIn.mockImplementation(() => Promise.reject(new Error(error)));

    const dispatched = await recordSaga(signIn, logInRequest(payload));

    expect(api.signIn).toHaveBeenCalledTimes(1);

    expect(api.signIn).toHaveBeenCalledWith(payload);

    expect(dispatched).toContainEqual({
      type: REQUEST_FAILED,
      payload: error,
    });
  });
});
