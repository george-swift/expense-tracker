import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DonutLargeTwoToneIcon from '@mui/icons-material/DonutLargeTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { signOutRequest } from '../actions';

const Navigation = () => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutRequest());

  return (
    <nav className="nav">
      <div className="nav__brand">
        <Link to="/">
          <CreditScoreTwoToneIcon fontSize="large" />
        </Link>
        <p>Expense Tracker</p>
      </div>
      <ul className="nav__menu">
        <li>
          <NavLink to="/" end>
            <HomeIcon />
            <div>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="reports">
            <DonutLargeTwoToneIcon />
            <div>Reports</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="profile">
            <ManageAccountsTwoToneIcon />
            <div>Profile</div>
          </NavLink>
        </li>
        <li>
          <Link to="/" onClick={signOut}>
            <LogoutTwoToneIcon />
            <div>Sign Out</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
