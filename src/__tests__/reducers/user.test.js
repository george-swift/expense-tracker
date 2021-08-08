import {
  userDetails,
  CREATE_ACCOUNT_SUCCESSFUL,
  LOG_IN_SUCCESSFUL,
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

  const signUpAction = { type: CREATE_ACCOUNT_SUCCESSFUL, payload };
  const signInAction = { type: LOG_IN_SUCCESSFUL, payload };

  const mockStore = user(undefined, signInAction);

  it("should be an object of a user's log in status and details by default", () => {
    expect(user(undefined, [])).toStrictEqual(expect.objectContaining({
      loggedIn: false,
      info: {},
    }));
  });

  it('should update state of the store when on successful sign up or sign in', () => {
    expect(user(undefined, signUpAction)).toStrictEqual(expect.objectContaining({
      loggedIn: true,
      info: { ...payload },
    }));

    expect(user(undefined, signInAction)).toStrictEqual(expect.objectContaining({
      loggedIn: true,
      info: { ...payload },
    }));
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

    expect(user(mockStore, editAction)).toStrictEqual(expect.objectContaining({
      loggedIn: true,
      info: { ...newPayload },
    }));
  });

  it('should return to default state when users sign out', () => {
    const signOutAction = { type: SIGN_OUT_SUCCESSFUL };

    expect(user(mockStore, signOutAction)).toStrictEqual(
      expect.objectContaining({ ...userDetails }),
    );
  });
});
