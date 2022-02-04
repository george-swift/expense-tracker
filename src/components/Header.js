import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { signOutRequest } from '../actions';

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authed = useSelector((state) => state.user.authenticated);

  useEffect(() => {
    if (authed === false) navigate('/', { replace: true });
  }, [authed]);

  const handleSignOut = () => dispatch(signOutRequest());

  return (
    <header>
      <div className="container-fluid pe-4">
        <h2 className="theme">
          { children }
          <Link to="/" className="center" onClick={handleSignOut}>
            <span>Sign out</span>
            <LogoutTwoToneIcon fontSize="small" />
          </Link>
        </h2>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
