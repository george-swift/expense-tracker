import { Link } from 'react-router-dom';
import { FaCoins, FaSpinner } from 'react-icons/fa';
import { useEffect } from 'react';
import { useFormState, useVerify } from '../hooks';
import { clearFlash, logInRequest } from '../actions';
import FlashMessage from '../components/FlashMessage';
import { userFormFields } from '../constants';

const LogIn = () => {
  const { state = {}, handleChange } = useFormState();
  const {
    loggedIn, isLoading, error, dispatch, navigate,
  } = useVerify();

  useEffect(() => {
    if (loggedIn) navigate('/et', { replace: true });
  }, [loggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInRequest(state));
  };

  const switchAction = () => { if (error !== null) dispatch(clearFlash()); };

  const { usernameField, passwordField } = userFormFields;

  return (
    <div className="container pt-5 row mx-0">
      {error !== null && (
        <FlashMessage>
          { error }
        </FlashMessage>
      )}

      <div className="col-md-4 offset-md-4">
        <Link to="/" className="text-secondary">
          <FaCoins className="display-6 mb-3" />
        </Link>
        <h2 className="mb-4">Log in to Expense Tracker</h2>

        {isLoading
          ? (<p className="page-loading"><FaSpinner /></p>)
          : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor={usernameField}>
                  {usernameField}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  minLength={2}
                  value={state.username || ''}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor={passwordField}>
                  {passwordField}
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  minLength={6}
                  value={state.password || ''}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <button className="btn mb-3 w-100" type="submit">Log in</button>
                <p className="text-center">
                  <span className="fst-italic">
                    New user?
                  </span>
                  {' '}
                  <Link to="/signup" onClick={switchAction}>Sign up here</Link>
                </p>
              </div>
            </form>
          )}
      </div>
    </div>
  );
};

export default LogIn;
