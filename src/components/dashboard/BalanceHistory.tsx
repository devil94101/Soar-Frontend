import { useEffect, useState } from 'react';
import AssetLoader from '../../utils/AssetLoader';
import { Line } from 'react-chartjs-2';

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false
    }
    
  },
  scales: {
    y: {
      beginAtZero: false,
    },
  },
  
};

const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

const data = {
  labels,
  datasets: [
    {
      label: 'Balance',
      data: [4000, 5200, 3800, 5600, 4800, 6200, 5400],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.5)',
      tension: 0.4,
    },
  ],
};

export default function BalanceHistory() {
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    async function initializeChart() {
      const { 
        Chart,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend 
      } = await AssetLoader.load('CHART_JS');

      Chart.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      setIsChartReady(true);
    }

    initializeChart();
  }, []);

  if (!isChartReady) {
    return <div>Loading chart...</div>;
  }

  return (
    <div className="p-6 h-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Balance History
      </h2>
      <div className="h-[calc(100%-4rem)]">
        <Line 
          options={{
            ...options,
            maintainAspectRatio: false
          }} 
          data={data} 
        />
      </div>
    </div>
  );
}