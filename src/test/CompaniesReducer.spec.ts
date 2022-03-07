import { CompanyState, getCompaniesAsync } from "../redux/companies/companiesSlice"
import companiesReducer from '../redux/companies/companiesSlice';

describe('company reducer async actions', () => {
    const initialState: CompanyState = {
      value: [],
      status: 'idle',
      error: ''
    }
  
    it('should set status to "pending"', async () => {
      const action = { type: getCompaniesAsync.pending.type,payload:[]}
      const state = companiesReducer(initialState, action)
      expect(state).toEqual({
        ...initialState,
        status: 'loading'
      })
    })
  
    it('should set status to "idle"', async () => {
      const action = { type: getCompaniesAsync.fulfilled.type ,payload:[]}
      const state = companiesReducer(initialState, action)
      console.log(state);

      expect(state).toEqual({
        ...initialState,
        value: initialState.value,
        status: 'idle'
      })
    })
  
    it('should set status to "failed"', async () => {
      const action = {
        type: getCompaniesAsync.rejected.type,
        payload: 'loading error'
      }
      const state = companiesReducer(initialState, action)
      expect(state).toEqual({
        ...initialState,
        error: 'Network error',
        status: 'failed'
      })
    })
  })
