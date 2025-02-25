import { Transaction } from "../../types";
import CardIcon from "../../assets/Card.svg";
import PaypalIcon from "../../assets/paypal.svg";
import PersonIcon from "../../assets/Person.svg";
import { Link } from "react-router-dom";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  console.log(transactions)
  return (
    <div className="rounded-lg">
      <div className="flex justify-between items-center mb-6 p-6">
        <h2 className="text-lg font-semibold text-[#343C6A]">
          Recent Transactions
        </h2>
        <Link
          to="/transactions"
          className="text-sm text-[#343C6A] hover:text-indigo-900 hover:underline transition duration-200"
        >
          See All
        </Link>
      </div>
      <div className="px-6 bg-white rounded-lg min-h-[270px]">
        {transactions.slice(0, 3).map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full text-2xl">
                <img
                  src={
                    transaction.serviceProvider === "Paypal"
                      ? PaypalIcon
                      : transaction.serviceProvider === "Card"
                      ? CardIcon
                      : PersonIcon
                  }
                  alt={transaction.serviceProvider}
                  loading="lazy"
                  className="w-12 h-12"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-[#343C6A] lg:text-xs">
                  {transaction.description}
                </p>
                <p className="text-xs text-gray-500 lg:text-2xs">
                  {new Date(transaction.date).toDateString()}
                </p>
              </div>
            </div>
            <div
              className={`text-sm font-medium ${
                transaction.type === "deposit"
                  ? "text-green-600"
                  : "text-red-600"
              } lg:text-xs`}
            >
              {transaction.type === "deposit" ? "+" : "-"}$
              {transaction.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
