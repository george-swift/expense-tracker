import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Lists from '../containers/Lists';
import Tracker from '../containers/Tracker';
import Reports from '../containers/Reports';
import More from '../containers/More';

const Main = () => (
  <div className="vh-100">
    <Routes>
      <Route path="/" element={<Lists />} />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/more" element={<More />} />
    </Routes>
    <Nav />
  </div>
);

export default Main;
