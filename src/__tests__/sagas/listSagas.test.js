import { recordSaga } from '../../sagas';
import * as api from '../../api';
import * as saga from '../../sagas/listSagas';
import { createList } from '../../actions';
import { REQUEST_FAILED } from '../../utils';

describe('Testing the list saga', () => {
  const userId = 2;

  const mockResponse = [
    {
      user: {
        id: 2,
        name: 'Transport',
        user_id: userId,
      },
    },
  ];

  const [payload] = mockResponse;

  api.createList = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should handle a successful asynchronous action', async () => {
    api.createList.mockImplementation(() => Promise.resolve({ data: mockResponse }));

    const dispatched = await recordSaga(saga.createList, createList(userId, payload));

    expect(api.createList).toHaveBeenCalledTimes(1);

    expect(api.createList).toHaveBeenCalledWith(userId, payload);

    expect(dispatched).toContainEqual({
      type: 'lists/createListSucceeded',
      payload: mockResponse,
    });
  });

  it('should handle an unsuccessful asynchronous action', async () => {
    const error = 'Network error. Could not retrieve lists';

    api.createList.mockImplementation(() => Promise.reject(new Error(error)));

    const dispatched = await recordSaga(saga.createList, createList(userId, payload));

    expect(api.createList).toHaveBeenCalledTimes(1);

    expect(api.createList).toHaveBeenCalledWith(userId, payload);

    expect(dispatched).toContainEqual({ type: REQUEST_FAILED, payload: error });
  });
});
