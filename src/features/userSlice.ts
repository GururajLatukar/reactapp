import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
});

export const { actions } = userReducer;
export default userReducer.reducer;