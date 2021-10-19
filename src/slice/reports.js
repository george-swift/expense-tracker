import { createSlice } from '@reduxjs/toolkit';

const reportSlice = createSlice({
  name: 'reports',
  initialState: [],
  reducers: {
    fetchReportSucceeded: (state, action) => action.payload,
  },
});

export const { fetchReportSucceeded } = reportSlice.actions;

export default reportSlice.reducer;
