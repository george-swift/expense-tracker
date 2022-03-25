import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { iconify } from '../utils';

export default function List({ id, name, track }) {
  const listPath = `track?id=${id}&list=${name}`;
  const seeAll = () => track(id);

  return (
    <li>
      <Link to={listPath} className="list" onClick={seeAll}>
        <span className="list__icon">{iconify(name)}</span>
        <span className="list__name">{name}</span>
      </Link>
    </li>
  );
}

List.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  track: Proptypes.func.isRequired,
};
