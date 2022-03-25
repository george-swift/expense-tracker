/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFormState from '../hooks';
import { logInRequest } from '../actions';
import FlashMessage from './FlashMessage';
import Progress from './Progress';

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authed = useSelector((state) => state.user.authenticated);
  const { isLoading, error } = useSelector((state) => state.notifications);

  useEffect(() => {
    if (authed) navigate('/', { replace: true });
  }, [authed]);

  const { state, handleChange } = useFormState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInRequest(state));
  };

  return (
    <div className="container">
      {error && <FlashMessage message={error} />}
      <div className="access access--xxl">
        <div className="access__banner login">
          <h2>Hello There</h2>
          <p>Don&apos;t have an account?</p>
          <p>Sign up with us today!</p>
        </div>
        <div className="access__form">
          {isLoading ? <Progress />
            : (
              <>
                <h3>Sign In</h3>
                <form onSubmit={handleSubmit}>
                  <div className="inputGroup">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      minLength={2}
                      value={state.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      minLength={6}
                      value={state.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <button type="submit">Login</button>
                    <Link to="/signup">
                      <small>
                        Create account
                      </small>
                    </Link>
                  </div>
                </form>
              </>
            )}
        </div>

      </div>
    </div>
  );
}
