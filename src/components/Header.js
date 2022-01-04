import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FaDoorOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { signOutRequest } from '../actions';
import { useVerify } from '../hooks';

const Header = ({ children }) => {
  const { loggedIn, dispatch, navigate } = useVerify();
  const handleSignOut = () => dispatch(signOutRequest());

  useEffect(() => {
    if (loggedIn === false) navigate('/', { replace: true });
  }, [loggedIn]);

  return (
    <header>
      <div className="container-fluid pe-4">
        <h2 className="theme">
          { children }
          <Link to="/" className="center" onClick={handleSignOut}>
            <span className="fs-6 me-3">Sign out</span>
            <FaDoorOpen className="fs-5" />
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
