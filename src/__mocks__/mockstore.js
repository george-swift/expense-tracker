import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const store = mockStore({
  user: {
    loggedIn: true,
    info: {
      id: 12,
      username: 'username',
      email: 'email',
    },
  },
  notifications: {
    isLoading: false,
    error: null,
  },
});

export default store;
