import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  getCompaniesAsync,
  selectCompanies,
} from '../redux/companies/companiesSlice';
export function Companies() {
  const companies = useAppSelector(selectCompanies);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getCompaniesAsync());
  }, [])

  return (
    <div>
        {companies.map((company: any) => {
            return (
                <li key={company.id}>
                    {company.name}
                </li>
            )
        })}
    </div>
  );
}