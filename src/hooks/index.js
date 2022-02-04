import { useEffect, useState } from 'react';

export default function useFormState(data) {
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

  const handleDate = (newDate) => setState({ ...state, date: newDate.toISOString().slice(0, 10) });

  const reset = () => setState(data);

  return {
    state,
    handleChange,
    handleDate,
    visible,
    toggleDisplay,
    reset,
  };
}
