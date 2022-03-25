import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendAndArchiveTwoToneIcon from '@mui/icons-material/SendAndArchiveTwoTone';
import { modalTheme } from '../utils';

const ExpenseForm = ({
  state, handleChange, handleDate, open, handleClose, save,
}) => (
  <Modal
    aria-labelledby="modal-title"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 500 }}
  >
    <Fade in={open}>
      <Box sx={modalTheme}>
        <Typography id="modal-title" variant="h4">Add Expense</Typography>
        <Box
          component="form"
          sx={{
            '& > .MuiTextField-root': { mb: 3, width: '100%' },
          }}
          autoComplete="off"
          onSubmit={save}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date incurred"
              value={state.date}
              onChange={handleDate}
                // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            label="Title"
            name="title"
            value={state.title}
            onChange={handleChange}
            required
          />
          <TextField
            label="Amount"
            name="amount"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            value={state.amount}
            onChange={handleChange}
            required
          />
          <TextField
            label="Notes"
            name="notes"
            multiline
            minRows={4}
            value={state.notes}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendAndArchiveTwoToneIcon />}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Fade>
  </Modal>
);

ExpenseForm.propTypes = {
  state: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDate: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default ExpenseForm;
