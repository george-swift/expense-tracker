import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ExpenseForm = ({
  id, title, amount, date, notes, setter, submit, cancel, remove,
}) => {
  const newExpense = id <= 0;

  return (
    <Form className="row mw-form mx-auto px-1" onSubmit={submit}>
      <Form.Group className="col-12 mb-3" controlId="title">
        <Form.Label>Title*</Form.Label>
        <Form.Control type="text" name="title" value={title} onChange={setter} minLength={2} required />
      </Form.Group>
      <Form.Group className={`${newExpense ? 'col-sm-4' : 'col-5'} mb-3`} controlId="amount">
        <Form.Label>Amount ($)*</Form.Label>
        <Form.Control type="number" name="amount" value={amount} onChange={setter} min={0.01} step={0.01} required />
      </Form.Group>
      <Form.Group className={`${newExpense ? 'col-sm-8' : 'col-7'} mb-3`} controlId="date">
        <Form.Label>Incurred On*</Form.Label>
        <Form.Control type="date" name="date" value={date} onChange={setter} required />
      </Form.Group>
      <Form.Group className="col-12 mb-3 form" controlId="notes">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows={3} name="notes" value={notes} onChange={setter} maxLength={140} />
      </Form.Group>
      {newExpense ? (
        <div className="col-12">
          <Button type="submit" className="w-100 mb-3">Create new expense</Button>
          <Button variant="bg-light" className="w-100 color-mix-two" onClick={cancel}>Cancel</Button>
        </div>
      ) : (
        <div className="col-12 mb-2 px-0 text-end">
          <Button type="submit" className="fw-bold" size="sm">Update</Button>
          <Button className="ms-3" size="sm" onClick={() => remove(id)}>
            <FaTrash />
          </Button>
        </div>
      )}
    </Form>
  );
};

ExpenseForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  date: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  cancel: PropTypes.func,
  remove: PropTypes.func,
  setter: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

ExpenseForm.defaultProps = {
  id: -1,
  cancel: () => {},
  remove: () => {},
};

export default ExpenseForm;
