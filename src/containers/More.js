import { FaPencilAlt, FaSpinner, FaUserCircle } from 'react-icons/fa';
import { useFormState, useVerify } from '../hooks';
import { editUserRequest } from '../actions';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';
import UserForm from '../components/UserForm';

const More = () => {
  const {
    loggedIn, user, dispatch, isLoading, error,
  } = useVerify();

  const { state, handleChange, toggleDisplay } = useFormState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserRequest(user?.id, state));
    toggleDisplay();
  };

  return (
    <div>
      <Header>
        <span className="theme__heading">Profile</span>
      </Header>

      <div className="wrap-page user">
        <section className="user__info">
          <p className="text-center fw-bold">
            <FaUserCircle className="user__avatar mb-2" />
            <br />
            <span className="fs-5">{user?.username}</span>
            <br />
            <span className="fs-6 fw-lighter">{user?.email}</span>
          </p>
        </section>
        <section className="row user__editor">
          <div className="col-md-4 offset-md-4">
            <h4>
              <span className="me-3">Edit Profile</span>
              <FaPencilAlt className="fs-6" />
            </h4>
            {error !== null && <FlashMessage>{error}</FlashMessage>}

            {isLoading && <p className="page-loading"><FaSpinner /></p>}

            <UserForm
              auth={loggedIn}
              username={state?.username || ''}
              email={state?.email || ''}
              setter={handleChange}
              submit={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default More;
