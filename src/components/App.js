import '../assets/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { authenticateUser } from '../slice/user';
import Home from './Home';
import Main from './Main';
import NotFound from './NotFound';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem('exp_tracker');
    if (auth) {
      dispatch(authenticateUser(JSON.parse(auth)));
    }
  }, []);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  }),
  [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/app/*" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
