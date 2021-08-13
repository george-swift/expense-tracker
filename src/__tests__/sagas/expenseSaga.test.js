import { recordSaga } from '../../sagas';
import * as api from '../../api';
import * as saga from '../../sagas/expenseSagas';
import { createExpense } from '../../actions';
import { CREATE_EXPENSE_SUCCESSFUL, REQUEST_FAILED } from '../../constants';

describe('Testing the expense saga', () => {
  const listId = 12;
  const expense = {
    id: 22,
    title: 'Outdoor fixtures',
    amount: 75,
    date: '2021-08-06',
    notes: 'Hammock',
  };

  const mockResponse = { ...expense, list_id: listId };

  api.createExpense = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should handle a successful asynchronous action', async () => {
    api.createExpense.mockImplementation(() => Promise.resolve({ data: mockResponse }));

    const dispatched = await recordSaga(saga.createExpense, createExpense(listId, expense));

    expect(api.createExpense).toHaveBeenCalledTimes(1);

    expect(api.createExpense).toHaveBeenCalledWith(listId, expense);

    expect(dispatched).toContainEqual({
      type: CREATE_EXPENSE_SUCCESSFUL,
      payload: mockResponse,
    });
  });

  it('should handle an unsuccessful asynchronous action', async () => {
    const error = 'Internal server error';

    api.createExpense.mockImplementation(() => Promise.reject(new Error(error)));

    const dispatched = await recordSaga(saga.createExpense, createExpense(listId, expense));

    expect(api.createExpense).toHaveBeenCalledTimes(1);

    expect(api.createExpense).toHaveBeenCalledWith(listId, expense);

    expect(dispatched).toContainEqual({
      type: REQUEST_FAILED,
      payload: error,
    });
  });
});
