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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklyActivity() {
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
          display: false,
          stepSize: 100,
        },
        max: 500,
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

  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Withdraw',
        data: [450, 320, 300, 450, 150, 380, 380],
        backgroundColor: '#232323',
        borderRadius: 20,
      },
      {
        label: 'Deposit',
        data: [220, 120, 250, 350, 230, 220, 330],
        backgroundColor: '#396AFF',
        borderRadius: 20,
      },
    ],
  };

  return (
    <div className=" p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-[#343C6A]">Weekly Activity</h2>
      </div>
      <div className="h-[300px] bg-white p-4 rounded-lg">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}