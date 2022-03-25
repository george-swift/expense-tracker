import '../assets/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateUser } from '../slice/user';
import { getLocalAuth } from '../api';
import Main from './Main';
import NotFound from './NotFound';
import SignUp from './SignUp';
import LogIn from './LogIn';

const App = () => {
  const dispatch = useDispatch();
  const authed = useSelector((state) => state.user.authenticated);

  useEffect(() => {
    const localAuth = getLocalAuth();
    if (localAuth) dispatch(authenticateUser(JSON.parse(localAuth)));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="//*" element={authed ? <Main /> : <LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
