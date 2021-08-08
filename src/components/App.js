import '../assets/Sass/App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearFlash } from '../actions';
import Home from './Home';
import Main from './Main';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';

const App = () => {
  const dispatch = useDispatch();
  const resetAlerts = () => dispatch(clearFlash());

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home ui={resetAlerts} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/et/*" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
