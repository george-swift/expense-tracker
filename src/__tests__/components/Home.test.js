import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../components/Home';

const ui = jest.fn(() => {});

const mockStore = configureStore();

const store = mockStore({
  user: {
    authenticated: false,
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

describe('Snapshot of the Home component', () => {
  it('should render correctly when user visits app', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Home ui={ui} />
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the Home component', () => {
  beforeEach(() => render(
    <Provider store={store}>
      <Router>
        <Home ui={ui} />
      </Router>
    </Provider>,
  ));

  it('should have a button for redirecting new users to sign up', () => {
    const [signUpLink] = screen.getAllByRole('link');

    expect(signUpLink).toBeInTheDocument();

    expect(signUpLink).toHaveAttribute('href', '/signup');

    fireEvent.click(signUpLink);

    expect(ui).toHaveBeenCalledTimes(1);
  });

  it('should have a button for redirecting users to log in', () => {
    const [, logInLink] = screen.getAllByRole('link');

    expect(logInLink).toBeInTheDocument();

    expect(logInLink).toHaveAttribute('href', '/login');

    fireEvent.click(logInLink);

    expect(ui).toHaveBeenCalledTimes(1);
  });
});
