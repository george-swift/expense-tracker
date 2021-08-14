import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { expenseFormFields } from '../constants';

const Form = ({
  id, title, amount, date, notes, handleChange,
  submitAction, cancelAction, deleteAction,
}) => {
  const hint = typeof amount === 'string';
  const {
    titleField,
    amountField,
    dateField,
    notesField,
  } = expenseFormFields;

  return (
    <form className="row m-0 px-0" onSubmit={submitAction}>
      <div className="col-12 mb-3">
        <label htmlFor={titleField}>{titleField}</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={handleChange}
          minLength={2}
          required
        />
      </div>
      <div className={`${hint ? 'col-sm-4' : 'col-5'} mb-3`}>
        <label htmlFor={amountField}>{amountField}</label>
        <input
          type="number"
          className="form-control"
          name="amount"
          value={amount}
          onChange={handleChange}
          min={0.01}
          step={0.01}
          required
        />
      </div>
      <div className={`${hint ? 'col-sm-8' : 'col-7'} mb-3`}>
        <label htmlFor={dateField}>{dateField}</label>
        <input
          type="date"
          className="form-control"
          name="date"
          value={date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor={notesField}>{notesField}</label>
        <textarea
          className="form-control"
          name="notes"
          rows="3"
          value={notes}
          onChange={handleChange}
          maxLength={140}
        />
      </div>
      {hint ? (
        <div className="col-12">
          <button
            type="submit"
            className="btn w-100 mb-3"
          >
            Create new expense
          </button>
          <button
            type="button"
            className="btn btn-warning w-100"
            onClick={cancelAction}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="col-12 mb-2 px-0 text-end">
          <button
            type="submit"
            className="btn btn-sm fw-bold"
          >
            Update
          </button>
          <button
            type="button"
            className="btn btn-sm ms-3"
            onClick={() => deleteAction(id)}
          >
            <FaTrash />
          </button>
        </div>
      )}
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  date: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  cancelAction: PropTypes.func,
  deleteAction: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
};

Form.defaultProps = {
  id: 0,
  cancelAction: () => {},
  deleteAction: () => {},
};

export default Form;
