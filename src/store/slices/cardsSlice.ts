import { createSlice } from '@reduxjs/toolkit';
import { Card } from '../../types';

const initialState: Card[] = [
  {
    id: '1',
    cardNumber: '3778 **** **** 1234',
    cardHolder: 'Eddy Cusuma',
    expiryDate: '12/24',
    balance: 5756,
    type: 'credit',
  },
  {
    id: '2',
    cardNumber: '4562 **** **** 8765',
    cardHolder: 'Eddy Cusuma',
    expiryDate: '03/25',
    balance: 3450,
    type: 'debit',
  },
  {
    id: '3',
    cardNumber: '6589 **** **** 4321',
    cardHolder: 'Eddy Cusuma',
    expiryDate: '09/24',
    balance: 8900,
    type: 'credit',
  },
  {
    id: '4',
    cardNumber: '9876 **** **** 5432',
    cardHolder: 'Eddy Cusuma',
    expiryDate: '06/25',
    balance: 2100,
    type: 'debit',
  },
  {
    id: '5',
    cardNumber: '2345 **** **** 7890',
    cardHolder: 'Eddy Cusuma',
    expiryDate: '11/24',
    balance: 7600,
    type: 'credit',
  }
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export default cardsSlice.reducer;