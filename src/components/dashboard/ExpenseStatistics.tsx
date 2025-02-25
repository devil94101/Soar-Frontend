import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Transaction } from "../../types";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ExpenseStatistics({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const [data, setData] = useState({
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: ["#343C6A", "#FC7900", "#2D60FF", "#1C1C1C"],
        borderColor: "#FFFFFF",
        borderWidth: 2,
        spacing: 5,
      },
    ],
  });

  useEffect(() => {
    const withdrawalTransactions = transactions.filter(
      (transaction) => transaction.type === "withdrawal"
    );

    const totalWithdrawals = withdrawalTransactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

    const entertainment = withdrawalTransactions
      .filter((transaction) => transaction.use === "entertainment")
      .reduce((total, transaction) => total + transaction.amount, 0);

    const billExpense = withdrawalTransactions
      .filter((transaction) => transaction.use === "bills")
      .reduce((total, transaction) => total + transaction.amount, 0);

    const investment = withdrawalTransactions
      .filter((transaction) => transaction.use === "investment")
      .reduce((total, transaction) => total + transaction.amount, 0);

    const others =
      totalWithdrawals - (entertainment + billExpense + investment);

    const percentages =
      totalWithdrawals > 0
        ? [
            (entertainment / totalWithdrawals) * 100,
            (billExpense / totalWithdrawals) * 100,
            (investment / totalWithdrawals) * 100,
            (others / totalWithdrawals) * 100,
          ]
        : [0, 0, 0, 0];

    setData({
      labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
      datasets: [
        {
          data: percentages,
          backgroundColor: ["#343C6A", "#FC7900", "#2D60FF", "#1C1C1C"],
          borderColor: "#FFFFFF",
          borderWidth: 2,
          spacing: 5,
        },
      ],
    });
  }, [transactions]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
      datalabels: {
        display: true,
        color: "#FFFFFF",
        font: {
          size: 10,
          family: "'Inter', sans-serif",
        },
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex];
          return [`${label}`, `${value.toFixed(2)}%`]; 
        },
        anchor: "center" as const,
        align: "center" as const,
        textAlign: "center" as const,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: any) => {
            return ` ${context.label}: ${context.raw.toFixed(2)}%`;
          },
        },
      },
    },
    layout: {
      padding: 0,
    },
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-[#343C6A]">
          Expense Statistics
        </h2>
      </div>
      <div className="bg-white p-6 flex items-center justify-center rounded-lg">
        <div
          className="h-60"
          role="region"
          aria-label="Expense Statistics Chart"
        >
          <Pie
            data={data}
            options={options}
            plugins={[ChartDataLabels]}
            aria-label="Pie chart showing expense distribution"
          />
        </div>
      </div>
    </div>
  );
}
