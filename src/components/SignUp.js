/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../actions';
import FlashMessage from './FlashMessage';
import Progress from './Progress';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authed = useSelector((state) => state.user.authenticated);
  const { isLoading, error } = useSelector((state) => state.notifications);

  useEffect(() => {
    if (authed) navigate('/', { replace: true });
  }, [authed]);

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

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

  return (
    <div className="container">
      {error && <FlashMessage message={error} />}
      <div className="access">
        <div className="access__banner signup">
          <h2>Get Started</h2>
          <p>Stay in control of your money</p>
        </div>
        <div className="access__form">
          {isLoading ? <Progress /> : (
            <>
              <h3>Create Account</h3>
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
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={state.email}
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
                <div className="inputGroup">
                  <label htmlFor="password_confirmation">Confirm Password</label>
                  <input
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    minLength={6}
                    value={state.password_confirmation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button type="submit">Create</button>
                  <Link to="/login">
                    <small>
                      Already have an account?
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
