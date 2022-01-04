import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCoins, FaSpinner } from 'react-icons/fa';
import { useVerify } from '../hooks';
import { clearNotifications, signUpRequest } from '../actions';
import FlashMessage from '../components/FlashMessage';
import UserForm from '../components/UserForm';

const SignUp = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const {
    loggedIn, isLoading, error, dispatch, navigate,
  } = useVerify();

  useEffect(() => {
    if (loggedIn) navigate('/app', { replace: true });
  }, [loggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const mismatch = (name === 'password_confirmation') && value !== state.password;

    if (mismatch) {
      e.target.setCustomValidity('Password does not match');
    } else e.target.setCustomValidity('');

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpRequest(state));
  };

  const resetFlash = () => {
    if (error !== null) dispatch(clearNotifications());
  };

  return (
    <div className="container pt-4 row mx-0">
      {error !== null && <FlashMessage>{error}</FlashMessage>}

      <div className="mw-md mx-auto">
        <Link to="/" className="text-secondary">
          <FaCoins className="display-6 mb-3" />
        </Link>
        <h2 className="mb-4">Create your account</h2>
        {isLoading
          ? (<p className="page-loading"><FaSpinner /></p>)
          : (
            <UserForm
              auth={loggedIn}
              username={state.username}
              email={state.email}
              password={state.password}
              confirm={state.password_confirmation}
              setter={handleChange}
              submit={handleSubmit}
              reset={resetFlash}
            />
          )}
      </div>
    </div>
  );
};

export default SignUp;
