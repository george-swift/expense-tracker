import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../__mocks__/mockstore';
import Header from '../../components/Header';

describe('Snapshot of the Header component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Header>
              <span>Track.it</span>
            </Header>
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
