import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { fetchCompanies } from '../../api/companiesAPI';
export interface CounterState {
  value: any;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}
const initialState: CounterState = {
  value: [],
  status: 'idle',
  error: null,
};

export const getCompaniesAsync = createAsyncThunk(
  'companies/fetchCompanies',
  async (_:void, thunkApi) => {
    const response = await fetchCompanies();
    const companies = await response.json();
    console.log({companies});
    
    if (response.status !== 200 || !response.ok) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch companies.',
      })
    }
    return companies
  }
);
export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompaniesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCompaniesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getCompaniesAsync.rejected, (state, { payload }) => {
        state.status = 'idle';
      })
      ;
  },
});

export const selectCompanies = (state: RootState) => state.companies.value;
export default companiesSlice.reducer;