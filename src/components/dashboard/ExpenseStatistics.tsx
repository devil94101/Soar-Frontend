import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ExpenseStatistics() {
  const data = {
    labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: [
          '#343C6A',   // Dark blue for Entertainment
          '#FC7900',   // Orange for Bill Expense
          '#2D60FF',   // Blue for Investment
          '#1C1C1C',   // Black for Others
        ],
        borderColor: '#FFFFFF',
        borderWidth: 2,
        spacing: 5,    // This creates space between segments
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the external legend
      },
      datalabels: {
        display: true,
        color: '#FFFFFF',
        font: {
          
          size: 10,
          family: "'Inter', sans-serif",
        },
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex];
          return [`${label}`, `${value}%`];  // Return both label and percentage
        },
        anchor: 'center' as const,
        align: 'center' as const,
        textAlign: 'center' as const,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: any) => {
            return ` ${context.label}: ${context.raw}%`;
          },
        },
      },
    },
    layout: {
      padding: 0
    },
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-[#343C6A]">
          Expense Statistics
        </h2>
      </div>
      <div className=" bg-white p-6 flex items-center justify-center rounded-lg">
        <div className="h-60">
          <Pie 
            data={data} 
            options={options}
            plugins={[ChartDataLabels]}
          />
        </div>
      </div>
    </div>
  );
}