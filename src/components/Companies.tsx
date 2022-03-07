import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  getCompaniesAsync,
  selectCompanies,
  selectCompaniesFetchError,
  selectCompaniesFetchSatus
} from '../redux/companies/companiesSlice';
import { CompanyItem } from './CompaniItem';
import {SquarePagination} from './Pagination';
import { Company } from '../api/companiesAPI';

const COMPANIES_PAGINATION = {
  itemsPerPage: 10
};

export function Companies() {
  const companies = useAppSelector(selectCompanies);
  const status = useAppSelector(selectCompaniesFetchSatus);
  const error = useAppSelector(selectCompaniesFetchError);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const indexOfLastCard = page * COMPANIES_PAGINATION.itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - COMPANIES_PAGINATION.itemsPerPage;
  const currentCards = companies && companies.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    dispatch(getCompaniesAsync());
  }, [dispatch])

  return (
    <>
    {error && <Typography color="red" variant="h4" sx={{textAlign: 'center'}}>Problem encontered while fetching companies.</Typography>}
    {status === 'loading' && <Typography variant="h2" sx={{textAlign: 'center'}}>Loading...</Typography>}
    {
      companies.length > 0 &&
      <>
        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3, marginTop: '32px', maxWidth: '1000px', marginInline: 'auto'}}>
            {currentCards.map((company: Company) => {
                return (
                    <CompanyItem key={company.id} name={company.name} />
                )
            })}
        </Box>
        <SquarePagination totalItems={companies.length} itemsPerPage={COMPANIES_PAGINATION.itemsPerPage} setPage={setPage} page={page} />
      </>
      }
    </>
  );
}