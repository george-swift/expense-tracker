import { Link } from 'react-router-dom';
import { FaCoins, FaSpinner } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useFormState, useVerify } from '../hooks';
import { clearNotifications, logInRequest } from '../actions';
import FlashMessage from '../components/FlashMessage';

const LogIn = () => {
  const { state, handleChange } = useFormState({ username: '', password: '' });

  const {
    loggedIn, isLoading, error, dispatch, navigate,
  } = useVerify();

  useEffect(() => {
    if (loggedIn) navigate('/app', { replace: true });
  }, [loggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInRequest(state));
  };

  const resetFlash = () => {
    if (error !== null) dispatch(clearNotifications());
  };

  return (
    <div className="container pt-5 row mx-0">
      {error !== null && <FlashMessage>{ error }</FlashMessage>}

      <div className="mw-md mx-auto">
        <Link to="/" className="text-secondary">
          <FaCoins className="display-6 mb-3" />
        </Link>
        <h2 className="mb-4">Log in to your account</h2>

        {isLoading ? <p className="page-loading"><FaSpinner /></p>
          : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" minLength={2} value={state.username} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" minLength={6} value={state.password} onChange={handleChange} required />
              </Form.Group>
              <div>
                <button className="btn mb-3 w-100" type="submit">Log in</button>
                <p className="text-center">
                  <Form.Text>
                    New user?&nbsp;
                    <Link to="/signup" onClick={resetFlash}>Sign up</Link>
                  </Form.Text>
                </p>
              </div>
            </Form>
          )}
      </div>
    </div>
  );
};

export default LogIn;
