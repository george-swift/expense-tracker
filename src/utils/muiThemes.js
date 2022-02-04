export const actionTheme = {
  backgroundColor: '#8f659a',
  color: '#f8f9fa',
  marginLeft: 1.65,
  '&:hover': {
    backgroundColor: '#42224a',
  },
};

export const modalTheme = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  width: '96%',
  maxWidth: 400,
  bgcolor: '#f7f4f7',
  boxShadow: 24,
  p: 4,
  '& .MuiTypography-root': {
    mb: 3,
    color: '#42224a',
  },
  '& .MuiButton-root': { width: '100%' },
};
