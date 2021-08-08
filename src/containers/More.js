import { FaPencilAlt, FaSpinner, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useFormState, useVerify } from '../hooks';
import { editUserRequest } from '../actions';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';
import Form from '../components/UserForm';

const More = () => {
  const {
    loggedIn, id, username, email, dispatch, isLoading, error,
  } = useVerify();

  const { info } = useSelector((state) => state.user);

  const {
    state, handleChange, visible, toggleDisplay, reset,
  } = useFormState(info);

  const manageEditor = () => {
    if (visible) {
      toggleDisplay();
      reset();
    } else toggleDisplay();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserRequest(id, state));
    toggleDisplay();
  };

  return (
    <div className="profile page">
      <Header>
        <span className="theme">Profile</span>
      </Header>
      <div className="wrap-page">
        <section className="user-info">
          <p className="text-center fw-bold">
            <FaUserCircle className="avatar mb-2" />
            <br />
            <span className="fs-5">{username}</span>
            <br />
            <span className="fs-6 fw-lighter text-secondary">{email}</span>
          </p>
        </section>
        <section className="row editor">
          <div className="col-md-4 offset-md-4">
            <h4>
              <span className="me-2">EDIT PROFILE</span>
              <button
                type="button"
                className="btn btn-sm"
                onClick={manageEditor}
              >
                <FaPencilAlt />
              </button>
            </h4>
            {error !== null && (
              <FlashMessage>
                {error}
              </FlashMessage>
            )}

            {isLoading && <p className="page-loading"><FaSpinner /></p>}

            {visible && (
              <Form
                loggedIn={loggedIn}
                username={state.username}
                email={state.email}
                handleChange={handleChange}
                submitAction={handleSubmit}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default More;
