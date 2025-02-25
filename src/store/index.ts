import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cardsReducer from './slices/cardsSlice';
import transactionsReducer from './slices/transactionsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardsReducer,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;