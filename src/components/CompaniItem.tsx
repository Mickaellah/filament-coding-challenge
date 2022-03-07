import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  getCompaniesAsync,
  selectCompanies,
} from '../redux/companies/companiesSlice';

export function CompaniItem() {
    return <div>Hello</div>
}