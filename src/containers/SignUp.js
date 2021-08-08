import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCoins, FaSpinner } from 'react-icons/fa';
import { useFormState, useVerify } from '../hooks';
import { clearFlash, createAccountRequest, fetchLists } from '../actions';
import FlashMessage from '../components/FlashMessage';
import Form from '../components/UserForm';

const SignUp = () => {
  const { state = {}, handleChange } = useFormState();
  const {
    loggedIn, id, isLoading, error, dispatch, navigate,
  } = useVerify();

  useEffect(() => {
    if (id !== undefined) {
      navigate('/et', { replace: true });
      dispatch(fetchLists(id));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAccountRequest(state));
  };

  const switchAction = () => { if (error !== null) dispatch(clearFlash()); };

  return (
    <div className="container pt-4 row mx-0">
      {error !== null && (
        <FlashMessage>
          {error}
        </FlashMessage>
      )}
      <div className="col-md-4 offset-md-4">
        <Link to="/" className="text-secondary">
          <FaCoins className="display-6 mb-3" />
        </Link>
        <h2 className="mb-4">Create your account</h2>
        {isLoading
          ? (<p className="page-loading"><FaSpinner /></p>)
          : (
            <Form
              username={state.username || ''}
              email={state.email || ''}
              password={state.password || ''}
              passwordConfirmation={state.password_confirmation || ''}
              handleChange={handleChange}
              submitAction={handleSubmit}
              switchAction={switchAction}
              loggedIn={loggedIn}
            />
          )}
      </div>
    </div>
  );
};

export default SignUp;
