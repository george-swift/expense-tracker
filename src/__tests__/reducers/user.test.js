import {
  USER_AUTHENTICATED,
  EDIT_USER_SUCCESSFUL,
  SIGN_OUT_SUCCESSFUL,
} from '../../constants';

import user from '../../reducers/user';

describe('Testing the user reducer', () => {
  const payload = {
    id: 2,
    username: 'Test User',
    email: 'testuser@test.com',
  };

  const authAction = { type: USER_AUTHENTICATED, payload };

  const mockStore = user(undefined, authAction);

  it("should be an object of a user's log in status and details by default", () => {
    expect(user(undefined, [])).toStrictEqual(expect.objectContaining({
      authenticated: false,
      user: null,
    }));
  });

  it('should update state of the store when on successful sign up or sign in', () => {
    expect(user(undefined, authAction)).toStrictEqual(expect.objectContaining({ ...payload }));
  });

  it('should update state of the store when users successfully edit their profile', () => {
    const newPayload = {
      ...payload,
      username: 'Updated test user',
    };

    const editAction = {
      type: EDIT_USER_SUCCESSFUL,
      payload: newPayload,
    };

    expect(user(mockStore, editAction)).toStrictEqual(
      expect.objectContaining({ user: newPayload }),
    );
  });

  it('should return to default state when users sign out', () => {
    const signOutAction = { type: SIGN_OUT_SUCCESSFUL };

    expect(user(mockStore, signOutAction)).toStrictEqual(
      expect.objectContaining({
        authenticated: false,
        user: null,
      }),
    );
  });
});
