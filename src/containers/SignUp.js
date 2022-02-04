import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import { signUpRequest } from '../actions';
import FlashMessage from '../components/FlashMessage';
import Progress from '../components/Progress';
import UserForm from '../components/UserForm';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authed = useSelector((state) => state.user.authenticated);
  const { isLoading, error } = useSelector((state) => state.notifications);

  useEffect(() => {
    if (authed) navigate('/app', { replace: true });
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
    <div className="container pt-4 row mx-0">
      {error && <FlashMessage message={error} />}

      <div className="mw-md mx-auto">
        <CreditScoreTwoToneIcon fontSize="large" />
        <h2 className="my-3">Create your account</h2>
        {isLoading ? <Progress />
          : (
            <UserForm
              auth={authed}
              username={state.username}
              email={state.email}
              password={state.password}
              confirm={state.password_confirmation}
              setter={handleChange}
              submit={handleSubmit}
            />
          )}
      </div>
    </div>
  );
}
