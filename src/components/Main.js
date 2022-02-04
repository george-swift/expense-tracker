import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Nav';
import Lists from '../containers/Lists';
import Tracker from '../containers/Tracker';
import Reports from '../containers/Reports';
import More from '../containers/More';

export default function Main() {
  const navigate = useNavigate();
  const authed = useSelector((state) => state.user.authenticated);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (authed === false) navigate('/', { replace: true });
  }, [authed]);

  return (
    <div className="vh-100 position-relative">
      <Routes>
        <Route path="/" element={<Lists />} />
        <Route path="/track" element={<Tracker />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Navbar show={show} handleShow={handleShow} handleClose={handleClose} />
    </div>
  );
}
