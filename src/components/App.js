import '../assets/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearNotifications } from '../actions';
import { authenticateUser } from '../slice/user';
import Home from './Home';
import Main from './Main';
import NotFound from './NotFound';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';

const App = () => {
  const dispatch = useDispatch();
  const resetAlerts = () => dispatch(clearNotifications());

  useEffect(() => {
    const storage = localStorage.getItem('exp_tracker');
    if (storage) {
      dispatch(authenticateUser(JSON.parse(storage)));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home reset={resetAlerts} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/app/*" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
