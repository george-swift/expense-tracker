import {
  FETCH_LISTS_SUCCESSFUL, CREATE_LIST_SUCCESSFUL,
  UPDATE_LIST_SUCCESSFUL, DELETE_LIST_SUCCESSFUL,
} from '../../constants';

import lists from '../../reducers/lists';

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
    type: FETCH_LISTS_SUCCESSFUL,
    payload: [listOne, listTwo],
  });

  it('should be an empty array by default', () => {
    expect(lists(undefined, [])).toStrictEqual(expect.arrayContaining([]));
  });

  it('should update the state of the store after lists are fetched from backend', () => {
    const dataFromDB = [listOne, listTwo];

    const fetchComplete = {
      type: FETCH_LISTS_SUCCESSFUL,
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

    const onCreate = { type: CREATE_LIST_SUCCESSFUL, payload };
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

    const onUpdate = { type: UPDATE_LIST_SUCCESSFUL, payload };
    const updatedMockStore = lists(mockStore, onUpdate);

    expect(updatedMockStore).toStrictEqual(
      expect.arrayContaining([listOne, payload]),
    );
  });

  it('should update the state of the store when a list is deleted', () => {
    const onDelete = {
      type: DELETE_LIST_SUCCESSFUL,
      payload: listOne.id,
    };

    expect(lists(mockStore, onDelete)).toStrictEqual(
      expect.arrayContaining([listTwo]),
    );
  });
});
