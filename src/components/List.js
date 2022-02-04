import Proptypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { iconify } from '../utils';

export default function List({
  id, name, track, discard,
}) {
  const seeAll = () => track(id, name);

  const deleteList = () => discard(id);

  return (
    <li className="pt-3 pb-4">
      <div className="list">
        <span className="list__icon">{iconify(name)}</span>
        <span className="mb-3">{name}</span>
        <button type="button" className="btn list__btn" onClick={seeAll}>
          Track expenses
        </button>
        <button type="button" className="btn list__btn" onClick={deleteList}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

List.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  track: Proptypes.func.isRequired,
  discard: Proptypes.func.isRequired,
};
