import expenses from '../../slice/expenses';

describe('Testing the expenses reducer', () => {
  const expenseOne = {
    id: 22,
    title: 'Outdoor fixtures',
    amount: 75,
    date: '2021-08-04',
    notes: 'Hammock',
  };

  const expenseTwo = {
    id: 87,
    title: 'Dinner with devs',
    amount: 125,
    date: '2021-08-01',
  };

  const mockState = expenses(undefined, {
    type: 'expenses/fetchExpensesSucceeded',
    payload: [expenseOne, expenseTwo],
  });

  it('should be an empty array by default', () => {
    expect(expenses(undefined, [])).toStrictEqual(expect.arrayContaining([]));
  });

  it('should update the state of the store after expenses are fetched from backend', () => {
    const dataFromDB = [expenseOne, expenseTwo];

    const fetchComplete = {
      type: 'expenses/fetchExpensesSucceeded',
      payload: dataFromDB,
    };

    expect(expenses(undefined, fetchComplete)).toStrictEqual(
      expect.arrayContaining([...dataFromDB]),
    );
  });

  it('should update the state of the store when a new expense is successfully created', () => {
    const payload = {
      id: 18,
      name: 'Shopping',
      user_id: 112,
    };

    const onCreate = { type: 'expenses/createExpenseSucceeded', payload };
    const updatedMockStore = expenses(mockState, onCreate);

    expect(updatedMockStore).toHaveLength(3);

    expect(updatedMockStore).toStrictEqual(
      expect.arrayContaining([expenseOne, expenseTwo, payload]),
    );
  });

  it('should update the state of the store when an expense is successfully edited', () => {
    const payload = {
      ...expenseTwo,
      name: 'Utilities',
    };

    const onUpdate = { type: 'expenses/updateExpenseSucceeded', payload };
    const updatedMockStore = expenses(mockState, onUpdate);

    expect(updatedMockStore).toStrictEqual(
      expect.arrayContaining([expenseOne, payload]),
    );
  });

  it('should update the state of the store when a expense is deleted', () => {
    const onDelete = {
      type: 'expenses/deleteExpenseSucceeded',
      payload: expenseOne.id,
    };

    expect(expenses(mockState, onDelete)).toStrictEqual(
      expect.arrayContaining([expenseTwo]),
    );
  });
});
