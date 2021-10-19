import { Link } from 'react-router-dom';
import { FaChartPie, FaList } from 'react-icons/fa';
import { IoNavigate } from 'react-icons/io5';
import { RiUserSettingsFill } from 'react-icons/ri';

const Nav = () => (
  <div className="app-nav px-3">
    <a className="trigger" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas">
      Navigation Links
      <span className="ms-2">
        <IoNavigate />
      </span>
    </a>
    <div className="offcanvas offcanvas-bottom bg-purple" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasExample">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title fw-bold">Click links below to navigate</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="nav flex-column px-0">
          <li className="nav-item">
            <Link className="nav-link" to="/et">
              <span className="p-1 me-3"><FaList /></span>
              Manage
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/et/reports">
              <span className="p-1 me-3"><FaChartPie /></span>
              Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/et/more">
              <span className="p-1 me-3"><RiUserSettingsFill /></span>
              Edit Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Nav;
