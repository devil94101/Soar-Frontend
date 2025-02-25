import { createSlice } from '@reduxjs/toolkit';
import { Transaction } from '../../types';

const initialState: Transaction[] = [
  {
    id: '1',
    type: 'withdrawal',
    amount: 850,
    description: 'Deposit from my Card',
    date: '25 January 2024',
    serviceProvider: 'Card'
  },
  {
    id: '2',
    type: 'deposit',
    amount: 2500,
    description: 'Deposit PayPal',
    date: '25 January 2024',
    serviceProvider: 'Paypal',
  },
  {
    id: '3',
    type: 'deposit',
    amount: 5400,
    description: 'Jemi Wilson',
    date: '24 January 2024',
    serviceProvider: 'Person',
  },
  {
    id: '4',
    type: 'withdrawal',
    amount: 1200,
    description: 'Amazon Purchase',
    date: '23 January 2024',
    serviceProvider: 'Card',
  },
  {
    id: '5',
    type: 'deposit',
    amount: 3800,
    description: 'Salary Deposit',
    date: '22 January 2024',
    serviceProvider: 'Person',
  },
  {
    id: '6',
    type: 'withdrawal',
    amount: 920,
    description: 'Netflix Subscription',
    date: '21 January 2024',
    serviceProvider: 'Card',
  },
  {
    id: '7',
    type: 'deposit',
    amount: 1500,
    description: 'Freelance Payment',
    date: '20 January 2024',
    serviceProvider: 'Paypal',
  },
  {
    id: '8',
    type: 'withdrawal',
    amount: 650,
    description: 'Grocery Shopping',
    date: '19 January 2024',
    serviceProvider: 'Card',
  },
  {
    id: '9',
    type: 'deposit',
    amount: 4200,
    description: 'Client Payment',
    date: '18 January 2024',
    serviceProvider: 'Person',
  },
  {
    id: '10',
    type: 'withdrawal',
    amount: 890,
    description: 'Utility Bills',
    date: '17 January 2024',
    serviceProvider: 'Card',
  }
];

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
});

export default transactionsSlice.reducer;