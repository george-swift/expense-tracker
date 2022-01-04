import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { IoNavigate } from 'react-icons/io5';
import { FaChartPie, FaList } from 'react-icons/fa';
import { RiUserSettingsFill } from 'react-icons/ri';

const Navbar = ({ show, handleShow, handleClose }) => (
  <div className="app-nav px-3">
    <Button variant="transparent" className="trigger" onClick={handleShow}>
      Navigation links
      <span className="ms-2"><IoNavigate /></span>
    </Button>

    <Offcanvas show={show} onHide={handleClose} placement="bottom">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Click links below to navigate</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column px-0">
          <Nav.Item>
            <Link className="nav-link" onClick={handleClose} to="/app">
              <span className="p-1 me-3"><FaList /></span>
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" onClick={handleClose} to="/app/reports">
              <span className="p-1 me-3"><FaChartPie /></span>
              Reports
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" onClick={handleClose} to="/app/more">
              <span className="p-1 me-3"><RiUserSettingsFill /></span>
              Edit Profile
            </Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  </div>
);

Navbar.propTypes = {
  show: PropTypes.bool.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Navbar;
