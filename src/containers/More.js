import { useDispatch, useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import EditIcon from '@mui/icons-material/Edit';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import useFormState from '../hooks';
import { editUserRequest } from '../actions';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';
import UserForm from '../components/UserForm';

export default function More() {
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.notifications);

  const { state, handleChange, toggleDisplay } = useFormState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserRequest(user?.id, state));
    toggleDisplay();
  };

  return (
    <div>
      <Header>
        <span className="theme__heading">
          <ManageAccountsTwoToneIcon />
        </span>
      </Header>

      {error && <FlashMessage message={error} />}

      <div className="wrap-page user">
        <section className="user__info">
          <p className="text-center fw-bold">
            <FaUserCircle className="user__avatar mb-3" />
            <br />
            <span className="fs-3">{user?.username}</span>
            <br />
            <small>{user?.email}</small>
          </p>
        </section>
        <section className="row user__editor">
          <div className="col-md-4 offset-md-4">
            <h4>
              <span className="me-3">Manage account</span>
              <EditIcon />
            </h4>

            <UserForm
              auth={authenticated}
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
}
