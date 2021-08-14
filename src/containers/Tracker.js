import { FaChartLine, FaChevronLeft, FaSpinner } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFormState, useVerify } from '../hooks';
import { createExpense, deleteExpense, updateExpense } from '../actions';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';
import Form from '../components/ExpenseForm';
import Expense from '../components/Expense';

const Tracker = () => {
  const {
    isLoading, error, dispatch, navigate,
  } = useVerify();

  const [searchParams] = useSearchParams();
  const listName = searchParams.get('list');
  const listId = searchParams.get('id');

  const expenses = useSelector((state) => (state.expenses.length < 1 ? null : state.expenses));

  const {
    state = {}, handleChange, visible, toggleDisplay, reset,
  } = useFormState();

  const cancelAction = () => {
    reset();
    toggleDisplay();
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createExpense(listId, state));
    toggleDisplay();
    reset();
  };

  const handleUpdate = (id, data) => dispatch(updateExpense(id, data));

  const handleDelete = (id) => dispatch(deleteExpense(id));

  return (
    <>
      <Header>
        <span className="theme">
          Track.it &nbsp;
          <FaChartLine />
        </span>
      </Header>
      <div className="wrap-page">
        {error !== null && (<FlashMessage>{ error }</FlashMessage>)}
        <h3>{listName}</h3>
        <hr />
        <div className="row mx-0">
          {visible && (
            <div className="col-lg-6 mb-3">
              <Form
                title={state.title || ''}
                amount={state.amount || ''}
                date={state.date || ''}
                notes={state.notes || ''}
                handleChange={handleChange}
                submitAction={handleCreate}
                cancelAction={cancelAction}
              />
            </div>
          )}
          <div className="col-lg-6">
            {!visible && (
              <div className="track-it">
                <button type="button" className="btn btn-sm" onClick={() => navigate('/et')}>
                  <FaChevronLeft />
                  <span className="ms-2">Back to Lists</span>
                </button>
                <button type="button" className="btn btn-sm" onClick={toggleDisplay}>
                  Add expense
                </button>
              </div>
            )}
            {isLoading ? (
              <p className="page-loading"><FaSpinner /></p>
            ) : (
              <ul className="mt-4">
                {expenses?.map(({
                  id, title, amount, date, notes,
                }) => (
                  <Expense
                    key={id}
                    id={id}
                    title={title}
                    amount={amount}
                    date={date}
                    notes={notes}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                  />
                )) ?? (
                <li className="expense">
                  No record of&nbsp;
                  {listName?.toLowerCase()}
                    &nbsp;expenses
                </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker;
