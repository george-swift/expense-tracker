/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from 'prop-types';

const Flash = (props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

const Alert = forwardRef(Flash);

const FlashMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => setVisible((visible) => !visible);

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={visible} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

FlashMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FlashMessage;
