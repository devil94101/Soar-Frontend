export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Card {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  balance: number;
  type: 'credit' | 'debit';
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  description: string;
  date: string;
  serviceProvider: string;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ExpenseCategory {
  name: string;
  percentage: number;
  color: string;
}

export interface UserFormType {
  label: string;
  name: string;
  type: string;
  colSpan?: string;
  placeholder?: string
}