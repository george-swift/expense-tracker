import { FaPlus, FaSpinner } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useFormState, useVerify } from '../hooks';
import {
  createList, fetchExpenses, updateList, deleteList,
} from '../actions';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';
import List from '../components/List';

const Lists = () => {
  const {
    user, isLoading, error, dispatch, navigate,
  } = useVerify();

  const [handle] = user?.username.split(/\s/) ?? '';

  const lists = useSelector((state) => (state.lists.length < 1 ? null : state.lists));

  const listNames = lists?.map((list) => list.name);

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
    const query = `/et/tracker?id=${id}&list=${name}`;
    dispatch(fetchExpenses(id));
    navigate(query, { replace: true });
  };

  return (
    <>
      <Header>
        <span className="theme">Manage Lists</span>
      </Header>
      <div className="wrap-page">
        {error !== null && (
          <FlashMessage>
            { error }
          </FlashMessage>
        )}

        <section className="col-lg-4 offset-lg-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Welcome&nbsp;
                {handle}
              </h5>
              <p className="card-text">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-info"
                  onClick={addList}
                >
                  <FaPlus />
                </button>
                <span>Add a list to track your expenses</span>
              </p>
            </div>
          </div>
        </section>

        { isLoading && <p className="page-loading"><FaSpinner /></p> }

        {visible && (
          <form className="col-lg-4 offset-lg-4" onSubmit={handleSubmit}>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text fw-bold">Name</span>
              <input
                type="text"
                className="form-control"
                placeholder="e.g Utilities, Transport"
                name="name"
                value={state.name || ''}
                onChange={handleChange}
                minLength={3}
                maxLength={40}
                required
              />
              <button className="btn" type="submit">Create List</button>
            </div>
          </form>
        )}

        <ul className="row lists">
          <h3>Current Lists</h3>
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
            <li className="col-lg-3">
              <p className="mb-0 fst-italic">No lists of expenses available</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Lists;
