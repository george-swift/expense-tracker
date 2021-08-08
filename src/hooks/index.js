import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const useFormState = (data) => {
  const [state, setState] = useState(data);
  const [visible, setVisible] = useState(false);

  const toggleDisplay = () => setVisible((hidden) => !hidden);

  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => setState(data);

  return {
    state,
    handleChange,
    visible,
    toggleDisplay,
    reset,
  };
};

export const useVerify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loggedIn } = useSelector((state) => state.user);
  const { id, username, email } = useSelector((state) => state.user.info);
  const { isLoading, error } = useSelector((state) => state.notifications);

  return {
    loggedIn,
    id,
    username,
    email,
    isLoading,
    error,
    dispatch,
    navigate,
  };
};
