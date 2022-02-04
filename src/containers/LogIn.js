import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import Form from 'react-bootstrap/Form';
import useFormState from '../hooks';
import { logInRequest } from '../actions';
import FlashMessage from '../components/FlashMessage';
import Progress from '../components/Progress';

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authed = useSelector((state) => state.user.authenticated);
  const { isLoading, error } = useSelector((state) => state.notifications);

  useEffect(() => {
    if (authed) navigate('/app', { replace: true });
  }, [authed]);

  const { state, handleChange } = useFormState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInRequest(state));
  };

  return (
    <div className="container pt-5 row mx-0">
      {error && <FlashMessage message={error} />}

      <div className="mw-md mx-auto">
        <CreditScoreTwoToneIcon fontSize="large" />
        <h2 className="my-3">Log in to your account</h2>

        {isLoading ? <Progress />
          : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  minLength={2}
                  value={state.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  minLength={6}
                  value={state.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div>
                <button className="btn mb-3 w-100" type="submit">Log in</button>
                <p className="text-center">
                  <Form.Text>
                    New user?&nbsp;
                    <Link to="/signup">Sign up</Link>
                  </Form.Text>
                </p>
              </div>
            </Form>
          )}
      </div>
    </div>
  );
}
