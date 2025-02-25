import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Transaction } from '../../types';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklyActivity({ transactions }: { transactions: Transaction[] }) {
  const [data, setData] = useState({
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Withdraw',
        data: Array(7).fill(0),
        backgroundColor: '#232323',
        borderRadius: 20,
      },
      {
        label: 'Deposit',
        data: Array(7).fill(0),
        backgroundColor: '#396AFF',
        borderRadius: 20,
      },
    ],
  });

  useEffect(() => {
    const today = new Date();
   
    const lastSaturday = new Date(today);
    lastSaturday.setDate(today.getDate() - (today.getDay() + 1) % 7); 

    const lastWeekDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(lastSaturday);
      date.setDate(lastSaturday.getDate() + i); 
      return date.toISOString().split('T')[0]; 
    });

    const withdrawals = Array(7).fill(0);
    const deposits = Array(7).fill(0);

    transactions?.forEach(transaction => {
      const transactionDate = new Date(transaction.date).toISOString().split('T')[0];
      const index = lastWeekDates.indexOf(transactionDate);
      if (index !== -1) {
        if (transaction.type === 'withdrawal') {
          withdrawals[index] += transaction.amount;
        } else if (transaction.type === 'deposit') {
          deposits[index] += transaction.amount;
        }
      }
    });

    setData({
      labels: lastWeekDates.map(date => new Date(date).toLocaleDateString('en-US', { weekday: 'short' })), 
      datasets: [
        {
          label: 'Withdraw',
          data: withdrawals,
          backgroundColor: '#232323',
          borderRadius: 20,
        },
        {
          label: 'Deposit',
          data: deposits,
          backgroundColor: '#396AFF',
          borderRadius: 20,
        },
      ],
    });
  }, [transactions]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#343C6A',
        }
      },
      y: {
        grid: {
          color: '#F0F0F0',
        },
        ticks: {
          display: true,
          stepSize: 100,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: '#343C6A',
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
      title: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    barPercentage: 0.4,
    categoryPercentage: 0.5,
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-[#343C6A]">Weekly Activity</h2>
      </div>
      <div className="h-[300px] bg-white p-4 rounded-lg">
      <Bar options={options} data={data} aria-label="Bar chart showing weekly withdrawals and deposits" />
      </div>
    </div>
  );
}