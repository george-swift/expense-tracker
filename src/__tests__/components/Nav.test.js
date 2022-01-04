import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../../components/Nav';

const visible = false;
const toggle = jest.fn(() => {});

describe('Testing the Nav component', () => {
  it('should render correctly at the bottom of page', () => {
    const tree = renderer
      .create(
        <Router>
          <Nav show={visible} handleClose={toggle} handleShow={toggle} />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
