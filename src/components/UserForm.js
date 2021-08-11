import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userFormFields } from '../constants';

const Form = ({
  loggedIn,
  username,
  email,
  password,
  passwordConfirmation,
  handleChange,
  submitAction,
  switchAction,
}) => {
  const {
    usernameField,
    emailField,
    passwordField,
    passwordConfirmationField,
  } = userFormFields;

  return (
    <form className={loggedIn ? 'py-3' : null} onSubmit={submitAction}>
      <div className="mb-3">
        <label className="form-label" htmlFor={usernameField}>
          {usernameField}
        </label>
        <input
          type="text"
          className="form-control"
          name="username"
          minLength={2}
          value={username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor={emailField}>
          {emailField}
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>

      {loggedIn ? (
        <div className="mb-3">
          <button
            type="submit"
            className="btn w-100"
          >
            Update Profile
          </button>
        </div>
      ) : (
        <>
          <div className="mb-3">
            <label className="form-label" htmlFor={passwordField}>
              {passwordField}
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              minLength={6}
              value={password}
              onChange={handleChange}
              required
            />
            <small className="fst-italic text-danger d-none">
              Password and password confirmation do not match. Try again
            </small>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor={passwordConfirmationField}>
              {passwordConfirmationField}
            </label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              minLength={6}
              value={passwordConfirmation}
              onChange={handleChange}
              required
            />
            <small className="fst-italic text-danger d-none">
              Password and password confirmations do not match. Try again
            </small>
          </div>
          <div>
            <button
              type="submit"
              className="btn mb-3 w-100"
            >
              Sign up
            </button>
            <p className="text-center">
              <span className="fst-italic">
                Already have an account?
              </span>
              {' '}
              <Link to="/login" onClick={switchAction}>Click here to log in</Link>
            </p>
          </div>
        </>
      )}
    </form>
  );
};

Form.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
  switchAction: PropTypes.func,
};

Form.defaultProps = {
  password: '',
  passwordConfirmation: '',
  switchAction: () => {},
};

export default Form;
