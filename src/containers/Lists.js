import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createList, fetchExpenses, deleteList } from '../actions';
import { getAuthedUser, getAvailableOptions } from '../selectors';
import { actionTheme } from '../utils';
import FlashMessage from '../components/FlashMessage';
import List from '../components/List';

export default function Lists() {
  const dispatch = useDispatch();
  const { authedUserID, authedUserName } = useSelector(getAuthedUser);
  const { lists, suggested } = useSelector(getAvailableOptions);
  const { error } = useSelector((state) => state.notifications);

  const [visible, setVisible] = useState(false);
  const toggleDisplay = () => setVisible((visible) => !visible);

  const [category, setCategory] = useState({ name: '' });
  const handleChange = (_, name) => setCategory({ name });
  const handleDelete = (id) => dispatch(deleteList(id));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category.name.length) return;
    dispatch(createList(authedUserID, category));
    toggleDisplay();
  };

  const view = (id) => dispatch(fetchExpenses(id));

  return (
    <main>
      <h2 className="theme">
        👋🏼  Hello
        {' '}
        {authedUserName}
      </h2>
      {error && <FlashMessage message={error} />}

      <section>
        {!visible && suggested.length > 0 && (
        <div className="card">
          <Fab size="small" sx={actionTheme} aria-label="add" onClick={toggleDisplay}>
            <AddIcon />
          </Fab>
        </div>
        )}
      </section>

      {visible && (
      <form className="categories" onSubmit={handleSubmit}>
        <Autocomplete
          disablePortal
          inputValue={category.name}
          onInputChange={handleChange}
          options={suggested}
          sx={{ width: 180, marginRight: 2 }}
          size="small"
              // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        <button type="submit">ADD</button>
        <Fab sx={actionTheme} size="small" aria-label="add" onClick={toggleDisplay}>
          <CloseIcon />
        </Fab>
      </form>
      )}

      <ul className="lists">
        {lists.map(({ id, name }) => (
          <List
            key={id}
            id={id}
            name={name}
            track={view}
            discard={handleDelete}
          />
        ))}
      </ul>

      {!lists.length && (<p>No records</p>)}
    </main>
  );
}
