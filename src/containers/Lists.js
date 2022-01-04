import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPlus, FaWindowClose, FaSpinner } from 'react-icons/fa';
import { useFormState, useVerify } from '../hooks';
import {
  createList, fetchExpenses, updateList, deleteList,
} from '../actions';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';
import List from '../components/List';
import { dataList } from '../constants';
import { getLists } from '../selectors';

const Lists = () => {
  const {
    user, isLoading, error, dispatch, navigate,
  } = useVerify();

  const [handle] = user?.username.split(/\s/) ?? '';

  const lists = useSelector(getLists);
  const listNames = lists?.map((list) => list.name);
  const availableOptions = dataList.filter(({ value }) => !listNames?.includes(value));

  const {
    state = {}, handleChange, visible, toggleDisplay, reset,
  } = useFormState();

  const addList = () => {
    if (visible) {
      toggleDisplay();
      reset();
    } else {
      toggleDisplay();
    }
  };

  const handleUpdate = (id, data) => dispatch(updateList(id, data));

  const handleDelete = (id) => dispatch(deleteList(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listNames?.includes(state.name)) return;
    dispatch(createList(user?.id, state));
    toggleDisplay();
    reset();
  };

  const view = (id, name) => {
    const query = `/app/tracker?id=${id}&list=${name}`;
    dispatch(fetchExpenses(id));
    navigate(query, { replace: true });
  };

  return (
    <>
      <Header>
        <span className="theme__heading">Home</span>
      </Header>
      <div className="wrap-page">
        {error !== null && <FlashMessage>{error}</FlashMessage>}

        <section className="col-lg-4 offset-lg-4 mb-3">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>
                Hello,&nbsp;
                <span className="fs-4 fw-bold">{handle}</span>
              </Card.Title>
              <Card.Text>
                <Button variant="outline-info" size="sm" onClick={addList}>
                  {visible ? <FaWindowClose /> : <FaPlus />}
                </Button>
                <span>{visible ? 'Click to close' : 'Add category'}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </section>

        {isLoading && <p className="page-loading"><FaSpinner /></p>}

        {visible && (
          <form className="col-lg-4 offset-lg-4" onSubmit={handleSubmit}>
            <input className="me-3 size-md" list="categories" name="categories" onChange={handleChange} />
            <datalist id="categories">
              {availableOptions.map(({ value, color }) => (
                <option key={color} value={value} aria-label="category" />
              ))}
            </datalist>
            <button className="btn btn-sm" type="submit">Create</button>
          </form>
        )}

        <ul className="lists">
          <h4>Categories</h4>
          {lists?.map(({ id, name }) => (
            <List
              key={id}
              id={id}
              name={name}
              trackExpenses={view}
              updateList={handleUpdate}
              deleteList={handleDelete}
            />
          )) ?? (
            <li>
              <p className="mb-0 fst-italic">No lists of expenses available</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Lists;
