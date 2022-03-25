import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Lists from '../containers/Lists';
import Tracker from '../containers/Tracker';
import Reports from '../containers/Reports';
import Profile from '../containers/Profile';

const Main = () => (
  <div className="wrapper">
    <Navigation />
    <Routes>
      <Route index element={<Lists />} />
      <Route path="/track" element={<Tracker />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default Main;
