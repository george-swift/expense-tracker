import Proptypes from 'prop-types';
import { IoFastFoodSharp } from 'react-icons/io5';
import { GiWorld, GiTransportationRings, GiPayMoney } from 'react-icons/gi';
import {
  FaPencilAlt, FaShoppingCart, FaTrash, FaFirstAid, FaPlug,
} from 'react-icons/fa';
import { useFormState } from '../hooks';

const List = ({
  id, name, trackExpenses, updateList, deleteList,
}) => {
  const {
    state, handleChange, visible, toggleDisplay, reset,
  } = useFormState({ name });

  const placeholder = (name) => {
    switch (name) {
      case 'Food & Drinks': return <IoFastFoodSharp />;
      case 'Shopping': return <FaShoppingCart />;
      case 'Healthcare': return <FaFirstAid />;
      case 'Electricity': return <FaPlug />;
      case 'Transport': return <GiTransportationRings />;
      case 'Travel': return <GiWorld />;
      default: return <GiPayMoney />;
    }
  };

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
    <li className="pt-3 pb-4">
      <div className="list">
        <span className="fs-2">{placeholder(name)}</span>
        <p className="list-name mb-3">
          <span className="ms-4 p-1">{name}</span>
          <button
            type="button"
            className="btn ms-1 edit"
            onClick={edit}
          >
            <FaPencilAlt />
          </button>
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
        <form className="cat-editor" onSubmit={update}>
          <div className="">
            <input
              type="text"
              className="form-control form-control-sm"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-sm fw-bold list-btn"
            >
              Rename
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
