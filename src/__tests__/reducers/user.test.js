import { AUTH_USER } from '../../utils';

import user from '../../slice/user';

describe('Testing the user reducer', () => {
  const payload = {
    id: 2,
    username: 'Test User',
    email: 'testuser@test.com',
  };

  const authAction = { type: AUTH_USER, payload };

  const mockStore = user(undefined, authAction);

  it("should be an object of a user's log in status and details by default", () => {
    expect(user(undefined, [])).toStrictEqual(expect.objectContaining({
      authenticated: false,
      user: null,
    }));
  });

  it('should update state of the store when users successfully edit their profile', () => {
    const newPayload = {
      ...payload,
      username: 'Updated test user',
    };

    const editAction = {
      type: 'user/editUserSucceeded',
      payload: newPayload,
    };

    expect(user(mockStore, editAction)).toStrictEqual(
      expect.objectContaining({ user: newPayload }),
    );
  });

  it('should return to default state when users sign out', () => {
    const signOutAction = { type: 'user/signOutSucceeded' };

    expect(user(mockStore, signOutAction)).toStrictEqual(
      expect.objectContaining({
        authenticated: false,
        user: null,
      }),
    );
  });
});
