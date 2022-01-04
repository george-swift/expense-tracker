import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useVerify } from '../hooks';
import Navbar from './Nav';
import Lists from '../containers/Lists';
import Tracker from '../containers/Tracker';
import Reports from '../containers/Reports';
import More from '../containers/More';

const Main = () => {
  const { loggedIn, navigate } = useVerify();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (loggedIn === false) navigate('/', { replace: true });
  }, [loggedIn]);

  return (
    <div className="vh-100 position-relative">
      <Routes>
        <Route path="/" element={<Lists />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Navbar show={show} handleShow={handleShow} handleClose={handleClose} />
    </div>
  );
};

export default Main;
