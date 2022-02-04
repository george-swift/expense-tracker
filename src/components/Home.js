import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';

export default function Home() {
  const navigate = useNavigate();
  const authed = useSelector((state) => state.user.authenticated);

  useEffect(() => {
    if (authed) navigate('app');
  }, []);

  return (
    <section className="home">
      <div className="home__banner">
        <h1 className="fw-bold">
          <span className="me-3">Expense Tracker</span>
          <CreditScoreTwoToneIcon fontSize="large" />
        </h1>
        <p className="fw-light">Stay in control of your money</p>
      </div>
      <Link to="/signup" className="btn home__btn">Sign Up</Link>
      <Link to="/login" className="btn home__btn">Log In</Link>
    </section>
  );
}
