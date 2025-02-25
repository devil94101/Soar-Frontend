import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { lazy, Suspense } from 'react';

// Lazy load components
const MyCards = lazy(() => import('../components/dashboard/MyCards'));
const RecentTransactions = lazy(() => import('../components/dashboard/RecentTransactions'));
const WeeklyActivity = lazy(() => import('../components/dashboard/WeeklyActivity'));
const ExpenseStatistics = lazy(() => import('../components/dashboard/ExpenseStatistics'));
const QuickTransfer = lazy(() => import('../components/dashboard/QuickTransfer'));
const BalanceHistory = lazy(() => import('../components/dashboard/BalanceHistory'));

export default function Dashboard() {
  const cards = useSelector((state: RootState) => state.cards);
  const transactions = useSelector((state: RootState) => state.transactions);

  return (
    <div className="space-y-0 lg:space-y-6">
      <div className="grid grid-cols-12 gap-0 lg:gap-6">
        <div className="col-span-12 lg:col-span-8 h-[400px]">
          <Suspense fallback={<div className="h-full bg-white lg:rounded-lg animate-pulse" />}>
            <div className="h-full bg-white lg:rounded-lg">
              <MyCards cards={cards} />
            </div>
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-4 h-[400px]">
          <Suspense fallback={<div className="h-full bg-white lg:rounded-lg animate-pulse" />}>
            <div className="h-full bg-white lg:rounded-lg">
              <RecentTransactions transactions={transactions} />
            </div>
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-0 lg:gap-6">
        <div className="col-span-12 lg:col-span-8 h-[400px]">
          <Suspense fallback={<div className="h-full bg-white lg:rounded-lg animate-pulse" />}>
            <div className="h-full bg-white lg:rounded-lg">
              <WeeklyActivity />
            </div>
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-4 h-[400px]">
          <Suspense fallback={<div className="h-full bg-white lg:rounded-lg animate-pulse" />}>
            <div className="h-full bg-white lg:rounded-lg">
              <ExpenseStatistics />
            </div>
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-0 lg:gap-6">
        <div className="col-span-12 lg:col-span-4 h-[400px]">
          <Suspense fallback={<div className="h-full bg-white lg:rounded-lg animate-pulse" />}>
            <div className="h-full bg-white lg:rounded-lg">
              <QuickTransfer />
            </div>
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 h-[400px]">
          <Suspense fallback={<div className="h-full bg-white lg:rounded-lg animate-pulse" />}>
            <div className="h-full bg-white lg:rounded-lg">
              <BalanceHistory />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}