import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  getCompaniesAsync,
  selectCompanies,
} from '../redux/companies/companiesSlice';
import { CompanyItem } from './CompaniItem';

export function Companies() {
  const companies = useAppSelector(selectCompanies);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getCompaniesAsync());
  }, [])

  return (
    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3}}>
        {companies.map((company: any) => {
            return (
                <CompanyItem name={company.name} />
            )
        })}
    </Box>
  );
}