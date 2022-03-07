import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';
export const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
