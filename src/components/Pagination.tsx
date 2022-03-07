import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
    totalItems: number,
    itemsPerPage: number,
    setPage: (page: number) => void,
    page: number,
}

export const SquarePagination: React.FC<PaginationProps> = ({totalItems, itemsPerPage, setPage, page}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const count = Math.ceil(totalItems / itemsPerPage);
  return (
    <Stack spacing={2}>
      <Pagination sx={{marginTop: '48px', display: 'flex', justifyContent: 'center'}} shape="rounded" count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}