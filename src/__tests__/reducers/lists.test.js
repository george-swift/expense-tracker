import lists from '../../slice/lists';

describe('Testing the lists reducer', () => {
  const listOne = {
    id: 10,
    name: 'Healthcare',
    user_id: 112,
  };

  const listTwo = {
    id: 8,
    name: 'Transport',
    user_id: 112,
  };

  const mockStore = lists(undefined, {
    type: 'lists/fetchListsSucceeded',
    payload: [listOne, listTwo],
  });

  it('should be an empty array by default', () => {
    expect(lists(undefined, [])).toStrictEqual(expect.arrayContaining([]));
  });

  it('should update the state of the store after lists are fetched from backend', () => {
    const dataFromDB = [listOne, listTwo];

    const fetchComplete = {
      type: 'lists/fetchListsSucceeded',
      payload: dataFromDB,
    };

    expect(lists(undefined, fetchComplete)).toStrictEqual(
      expect.arrayContaining([...dataFromDB]),
    );
  });

  it('should update the state of the store when a new list is successfully created', () => {
    const payload = {
      id: 18,
      name: 'Shopping',
      user_id: 112,
    };

    const onCreate = { type: 'lists/createListSucceeded', payload };
    const updatedMockStore = lists(mockStore, onCreate);

    expect(updatedMockStore).toHaveLength(3);

    expect(updatedMockStore).toStrictEqual(
      expect.arrayContaining([listOne, listTwo, payload]),
    );
  });

  it('should update the state of the store when a list is successfully edited', () => {
    const payload = {
      ...listTwo,
      name: 'Utilities',
    };

    const onUpdate = { type: 'lists/updateListSucceeded', payload };
    const updatedMockStore = lists(mockStore, onUpdate);

    expect(updatedMockStore).toStrictEqual(
      expect.arrayContaining([listOne, payload]),
    );
  });

  it('should update the state of the store when a list is deleted', () => {
    const onDelete = {
      type: 'lists/deleteListSucceeded',
      payload: listOne.id,
    };

    expect(lists(mockStore, onDelete)).toStrictEqual(
      expect.arrayContaining([listTwo]),
    );
  });
});
