/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import useFormState from '../hooks';
import { editUserRequest } from '../actions';
import FlashMessage from '../components/FlashMessage';

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.notifications);

  const { state, handleChange, toggleDisplay } = useFormState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserRequest(user?.id, state));
    toggleDisplay();
  };

  return (
    <main>
      {error && <FlashMessage message={error} />}

      <div className="user">
        <section className="user__info">
          <p>
            <FaUserCircle className="user__avatar" />
            <br />
            <span>{user?.username}</span>
            <br />
            <small>{user?.email}</small>
          </p>
        </section>
        <section className="user__editor">
          <div>
            <h4>Manage account</h4>

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
              <button type="submit">Update</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
