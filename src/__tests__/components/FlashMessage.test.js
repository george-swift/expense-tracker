import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import FlashMessage from '../../components/FlashMessage';

describe('Snapshot of the FlashMessage component', () => {
  it('should render error messages correctly', () => {
    const tree = renderer.create(
      <FlashMessage>
        Network error! Try again.
      </FlashMessage>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
