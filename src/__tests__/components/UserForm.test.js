import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import UserForm from '../../components/UserForm';

let loggedIn = false;
const username = 'Test Dev';
const email = 'testdev@email.com';
const password = 'testing101';
const passwordConfirmation = 'testing101';
const handleChange = jest.fn(() => {});
const submitAction = jest.fn(() => {});
const switchAction = jest.fn(() => {});

describe('Snapshot of the user form component', () => {
  it('should render correctly on sign up', () => {
    const tree = renderer
      .create(
        <Router>
          <UserForm
            auth={loggedIn}
            username={username}
            email={email}
            password={password}
            confirm={passwordConfirmation}
            setter={handleChange}
            submit={submitAction}
            reset={switchAction}
          />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render edit form correctly if logged in', () => {
    loggedIn = true;
    const tree = renderer
      .create(
        <Router>
          <UserForm
            auth={loggedIn}
            username={username}
            email={email}
            setter={handleChange}
            submit={submitAction}
          />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
