import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import TrackChangesTwoToneIcon from '@mui/icons-material/TrackChangesTwoTone';
import useFormState from '../hooks';
import { createExpense, deleteExpense, updateExpense } from '../actions';
import { actionTheme, iconify } from '../utils';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';
import Progress from '../components/Progress';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseGrid from '../components/ExpenseGrid';

export default function Tracker() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expenses = useSelector((state) => state.expenses);
  const { isLoading, error } = useSelector((state) => state.notifications);

  const [searchParams] = useSearchParams();
  const listName = searchParams.get('list');
  const listId = searchParams.get('id');

  const {
    state, handleChange, handleDate, visible, toggleDisplay, reset,
  } = useFormState({
    title: '',
    date: new Date().toISOString(),
    notes: '',
    amount: '0',
  });

  const closeModal = () => {
    reset();
    toggleDisplay();
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createExpense(listId, state));
    closeModal();
  };

  const handleUpdate = (params) => {
    const { id } = params;
    const data = { [params.field]: params.value };
    dispatch(updateExpense(id, data));
  };

  const handleDelete = (id) => dispatch(deleteExpense(id));

  return (
    <>
      <Header>
        <span className="theme__heading">
          <TrackChangesTwoToneIcon />
        </span>
      </Header>
      <div className="wrap-page tracker">
        {error && <FlashMessage message={error} />}
        <h3>
          {iconify(listName)}
          {' '}
          {listName}
        </h3>

        <div className="mt-4 mx-auto">
          {visible && (
            <ExpenseForm
              state={state}
              handleChange={handleChange}
              handleDate={handleDate}
              open={visible}
              handleClose={closeModal}
              save={handleCreate}
            />
          )}
          <div className="px-2">
            {!visible && (
              <div className="actions">
                <button type="button" className="btn btn-sm" onClick={() => navigate('/app')}>
                  <ArrowCircleLeftTwoToneIcon fontSize="small" />
                  <span className="ms-2">Back</span>
                </button>
                <Fab size="small" sx={actionTheme} aria-label="add" onClick={toggleDisplay}>
                  <AddIcon />
                </Fab>
              </div>
            )}
            {isLoading ? <Progress /> : (
              <ExpenseGrid
                rows={expenses}
                editCell={handleUpdate}
                deleteCell={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
