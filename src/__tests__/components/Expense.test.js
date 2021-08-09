import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Expense from '../../components/Expense';

const id = 72;
const title = 'Test expense';
const amount = 25;
const date = '2021-07-30';
const onUpdate = jest.fn(() => {});
const onDelete = jest.fn(() => {});

describe('Snapshot of the Expense component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Expense
          id={id}
          title={title}
          amount={amount}
          date={date}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Querying the Expense component', () => {
  beforeEach(() => render(
    <Expense
      id={id}
      title={title}
      amount={amount}
      date={date}
      notes="Adding notes this time"
      onUpdate={onUpdate}
      onDelete={onDelete}
    />,
  ));

  it('should should replace default note props', () => {
    const note = screen.getByText(/Adding notes this time/);
    expect(note).toBeInTheDocument();
  });

  it('should have a button to edit an expense', () => {
    const edit = screen.getByRole('button');
    fireEvent.click(edit);
    const [, update] = screen.getAllByRole('button');
    expect(update).toHaveTextContent('Update');
    expect(update).toHaveAttribute('type', 'submit');
  });
});
