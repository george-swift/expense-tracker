import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Progress = () => (
  <Stack direction="row" justifyContent="center">
    <CircularProgress sx={{ color: '#8f659a', mt: 1 }} />
  </Stack>
);

export default Progress;
