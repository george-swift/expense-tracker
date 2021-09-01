import { Link } from 'react-router-dom';
import { FaChartPie, FaEllipsisH, FaList } from 'react-icons/fa';

const Nav = () => (
  <footer>
    <ul className="nav nav-justified px-0">
      <li className="nav-item">
        <Link className="nav-link" to="/et">
          <FaList />
          <br />
          <span>Lists</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/et/reports">
          <FaChartPie />
          <br />
          <span>Reports</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/et/more">
          <FaEllipsisH />
          <br />
          <span>More</span>
        </Link>
      </li>
    </ul>
  </footer>
);

export default Nav;
