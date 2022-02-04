import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createList, fetchExpenses, deleteList } from '../actions';
import { getAuthedUser, getAvailableOptions } from '../selectors';
import { actionTheme } from '../utils';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';
import List from '../components/List';

export default function Lists() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const view = (id, name) => {
    const query = `/app/track?id=${id}&list=${name}`;
    dispatch(fetchExpenses(id));
    navigate(query, { replace: true });
  };

  return (
    <>
      <Header>
        <span className="theme__heading"><HomeIcon fontSize="large" /></span>
      </Header>
      <div className="wrap-page">
        {error && <FlashMessage message={error} />}

        <section className="col-lg-4 offset-lg-4 mb-3">
          <Card>
            <Card.Body>
              <Card.Title>
                Hello 👋🏼 &nbsp;
                <span className="fs-3 fw-bold">{authedUserName}</span>
              </Card.Title>
              {!visible && suggested.length > 0 && (
                <Card.Text>
                  <span>Add category</span>
                  <Fab size="small" sx={actionTheme} aria-label="add" onClick={toggleDisplay}>
                    <AddIcon />
                  </Fab>
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </section>

        {visible && (
          <form className="col-lg-4 offset-lg-4" onSubmit={handleSubmit}>
            <Autocomplete
              disablePortal
              inputValue={category.name}
              onInputChange={handleChange}
              options={suggested}
              sx={{ width: 180 }}
              size="small"
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} label="Category" />}
            />
            <button className="btn ms-2" type="submit">ADD</button>
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

        {!lists.length && (<p className="p-3 text-center">No records</p>)}
      </div>
    </>
  );
}
