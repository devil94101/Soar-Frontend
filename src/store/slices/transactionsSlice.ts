import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from '../../types';

const getLast7Days = () => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() - i); 
    return date.toISOString();
  });
};

const initialState: Transaction[] = [
  {
    id: '1',
    type: 'withdrawal',
    amount: 850,
    description: 'Deposit from my Card',
    date: getLast7Days()[0], 
    serviceProvider: 'Card',
    use: 'entertainment'
  },
  {
    id: '2',
    type: 'deposit',
    amount: 2500,
    description: 'Deposit PayPal',
    date: getLast7Days()[0], 
    serviceProvider: 'Paypal',
  },
  {
    id: '3',
    type: 'deposit',
    amount: 5400,
    description: 'Jemi Wilson',
    date: getLast7Days()[1], 
    serviceProvider: 'Person',
  },
  {
    id: '4',
    type: 'withdrawal',
    amount: 1200,
    description: 'Amazon Purchase',
    date: getLast7Days()[2], 
    serviceProvider: 'Card',
    use: 'entertainment'
  },
  {
    id: '5',
    type: 'deposit',
    amount: 3800,
    description: 'Salary Deposit',
    date: getLast7Days()[3], 
    serviceProvider: 'Person',
  },
  {
    id: '6',
    type: 'withdrawal',
    amount: 920,
    description: 'Netflix Subscription',
    date: getLast7Days()[4], 
    serviceProvider: 'Card',
    use: 'bills'
  },
  {
    id: '7',
    type: 'deposit',
    amount: 1500,
    description: 'Freelance Payment',
    date: getLast7Days()[5], 
    serviceProvider: 'Paypal',
  },
  {
    id: '8',
    type: 'withdrawal',
    amount: 650,
    description: 'Grocery Shopping',
    date: getLast7Days()[6], 
    serviceProvider: 'Card',
    use: 'investment'
  },
  {
    id: '9',
    type: 'deposit',
    amount: 4200,
    description: 'Client Payment',
    date: getLast7Days()[6], 
    serviceProvider: 'Person',
  },
  {
    id: '10',
    type: 'withdrawal',
    amount: 890,
    description: 'Utility Bills',
    date: getLast7Days()[6], 
    serviceProvider: 'Card',
    use: 'others'
  }
];

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.unshift(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;