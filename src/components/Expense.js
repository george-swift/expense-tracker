import PropTypes from 'prop-types';
import { FaPencilAlt } from 'react-icons/fa';
import { useFormState } from '../hooks';
import ExpenseForm from './ExpenseForm';

const Expense = ({
  id, title, amount, date, notes, onUpdate, onDelete,
}) => {
  const {
    state, handleChange, visible, toggleDisplay, reset,
  } = useFormState({
    title, amount, date, notes,
  });

  const edit = () => {
    if (visible) {
      toggleDisplay();
      reset();
    } else {
      toggleDisplay();
    }
  };

  const update = (e) => {
    e.preventDefault();
    onUpdate(id, state);
    toggleDisplay();
  };

  return (
    <li>
      <div className="details">
        <p>
          <span className="fs-4 amount">{`$${amount}`}</span>
          <br />
          <small>{date}</small>
        </p>
        <p className="align-self-center ms-2 flex-grow-1">
          <span className="fw-bold">{title}</span>
          <br />
          <span className="notes">{notes || '...'}</span>
        </p>
        <button className="mb-1 toggle" type="button" onClick={edit}>
          <FaPencilAlt />
        </button>
      </div>
      {visible && (
        <div className="mt-3">
          <hr />
          <ExpenseForm
            id={id}
            title={state.title}
            amount={state.amount}
            date={state.date}
            notes={state.notes || ''}
            setter={handleChange}
            remove={onDelete}
            submit={update}
          />
        </div>
      )}
    </li>
  );
};

Expense.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  notes: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Expense.defaultProps = { notes: '' };

export default Expense;
