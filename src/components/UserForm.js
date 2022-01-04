import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';

const UserForm = ({
  auth,
  username,
  email,
  password,
  confirm,
  setter,
  submit,
  reset,
}) => (
  <Form className={auth ? 'py-3' : 'py-1'} onSubmit={submit}>
    <Form.Group className="mb-3" controlId="username">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" name="username" minLength={2} value={username} onChange={setter} required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" value={email} onChange={setter} required />
    </Form.Group>
    {auth ? (<Button type="submit" className="w-100">Update Profile</Button>)
      : (
        <>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" minLength={6} value={password} onChange={setter} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="passwordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" name="password_confirmation" minLength={6} value={confirm} onChange={setter} required />
          </Form.Group>
          <div>
            <Button type="submit" className="mb-3 w-100">Sign up</Button>
            <p className="text-center">
              <Form.Text>
                Already have an account?&nbsp;
                <Link to="/login" onClick={reset}>Log in</Link>
              </Form.Text>
            </p>
          </div>
        </>
      )}
  </Form>
);

UserForm.propTypes = {
  auth: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  confirm: PropTypes.string,
  setter: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  reset: PropTypes.func,
};

UserForm.defaultProps = {
  password: '',
  confirm: '',
  reset: () => {},
};

export default UserForm;
