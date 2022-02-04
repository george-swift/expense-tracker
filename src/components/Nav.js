import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import NavigationIcon from '@mui/icons-material/Navigation';
import Nav from 'react-bootstrap/Nav';
import DonutLargeTwoToneIcon from '@mui/icons-material/DonutLargeTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';

const Navbar = ({ show, handleShow, handleClose }) => (
  <div className="navigate px-3">
    <Fab variant="extended" sx={{ color: '#8f659a' }} onClick={handleShow}>
      <NavigationIcon sx={{ mr: 0.5 }} />
      Navigate
    </Fab>

    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Navigate</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column mt-4">
          <Nav.Item className="mb-3">
            <Link className="nav-link" onClick={handleClose} to="/app">
              <HomeIcon sx={{ mr: 2 }} />
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="mb-3">
            <Link className="nav-link" onClick={handleClose} to="/app/reports">
              <DonutLargeTwoToneIcon sx={{ mr: 2 }} />
              Reports
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" onClick={handleClose} to="/app/more">
              <ManageAccountsTwoToneIcon sx={{ mr: 2 }} />
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
