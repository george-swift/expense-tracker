import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import { useEffect } from 'react';
import { useVerify } from '../hooks';

const Home = ({ ui }) => {
  const { loggedIn, navigate } = useVerify();

  useEffect(() => {
    if (loggedIn) navigate('et/');
  }, []);

  return (
    <section className="home">
      <div className="brand">
        <h1 className="fw-bold">
          <span className="me-2">Expense Tracker</span>
          <FaCoins />
        </h1>
        <p className="fw-light">Stay in control of your money</p>
      </div>
      <Link to="/signup" className="btn home-btn color-mix" onClick={ui}>Sign Up</Link>
      <Link to="/login" className="btn home-btn" onClick={ui}>Log In</Link>
    </section>
  );
};

Home.propTypes = {
  ui: PropTypes.func.isRequired,
};

export default Home;
