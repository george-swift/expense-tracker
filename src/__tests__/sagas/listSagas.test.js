import { recordSaga } from '../../sagas';
import * as api from '../../api';
import * as saga from '../../sagas/listSagas';
import { fetchLists } from '../../actions';
import { FETCH_LISTS_FAILED, FETCH_LISTS_SUCCESSFUL } from '../../constants';

describe('Testing the list saga', () => {
  const userId = 2;

  const mockResponse = [
    {
      id: 2,
      name: 'Transport',
      user_id: userId,
    },
  ];

  api.fetchLists = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should handle a successful asynchronous action', async () => {
    api.fetchLists.mockImplementation(() => Promise.resolve({ data: mockResponse }));

    const dispatched = await recordSaga(saga.fetchLists, fetchLists(userId));

    expect(api.fetchLists).toHaveBeenCalledTimes(1);

    expect(api.fetchLists).toHaveBeenCalledWith(userId);

    expect(dispatched).toContainEqual({
      type: FETCH_LISTS_SUCCESSFUL,
      payload: mockResponse,
    });
  });

  it('should handle an unsuccessful asynchronous action', async () => {
    const error = 'Network error. Could not retrieve lists';

    api.fetchLists.mockImplementation(() => Promise.reject(new Error(error)));

    const dispatched = await recordSaga(saga.fetchLists, fetchLists(userId));

    expect(api.fetchLists).toHaveBeenCalledTimes(1);

    expect(api.fetchLists).toHaveBeenCalledWith(userId);

    expect(dispatched).toContainEqual({
      type: FETCH_LISTS_FAILED,
      payload: error,
    });
  });
});
