import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const store = mockStore({
  user: {
    authenticated: true,
    user: null,
  },
  lists: [],
  expenses: [],
  notifications: {
    isLoading: false,
    error: null,
  },
  reports: [],
});

export default store;
