import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Company, fetchCompanies } from '../../api/companiesAPI';
export interface CompanyState {
  value: Company[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}
const initialState: CompanyState = {
  value: [],
  status: 'idle',
  error: null,
};

export const getCompaniesAsync = createAsyncThunk(
  'companies/fetchCompanies',
  async (_:void, thunkApi) => {
    const response = await fetchCompanies();
    const companies = await response.json();
    
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
        console.log({action});
        
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getCompaniesAsync.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Network error'
      })
      ;
  },
});

export const selectCompanies = (state: RootState) => state.companies.value;
export const selectCompaniesFetchSatus = (state: RootState) => state.companies.status;
export const selectCompaniesFetchError = (state: RootState) => state.companies.error;
export default companiesSlice.reducer;