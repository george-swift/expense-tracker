import Proptypes from 'prop-types';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useFormState } from '../hooks';

const List = ({
  id, name, trackExpenses, updateList, deleteList,
}) => {
  const {
    state, handleChange, visible, toggleDisplay, reset,
  } = useFormState({ name });

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
    updateList(id, state);
    toggleDisplay();
  };

  return (
    <li className="col-12">
      <div className="list">
        <p className="list-name">
          <button
            type="button"
            className="btn edit list-btn"
            onClick={edit}
          >
            <FaPencilAlt />
          </button>
          <span className="ms-4 p-1">{name}</span>
        </p>
        {!visible && (
          <button
            type="button"
            className="btn list-btn"
            onClick={() => trackExpenses(id, name)}
          >
            Track expenses
          </button>
        )}
      </div>
      {visible && (
        <form className="row mx-0 my-2 p-2" onSubmit={update}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-sm mb-3"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-2 text-end">
            <button
              type="submit"
              className="btn btn-sm fw-bold w-25 list-btn"
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-sm ms-3 list-btn"
              onClick={() => deleteList(id)}
            >
              <FaTrash />
            </button>
          </div>
        </form>
      )}
    </li>
  );
};

List.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  trackExpenses: Proptypes.func.isRequired,
  updateList: Proptypes.func.isRequired,
  deleteList: Proptypes.func.isRequired,
};

export default List;
