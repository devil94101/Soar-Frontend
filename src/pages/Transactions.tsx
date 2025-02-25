import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Transaction } from '../types'; 
import CardIcon from '../assets/Card.svg';
import PaypalIcon from '../assets/paypal.svg';
import PersonIcon from '../assets/Person.svg';

export default function Transactions() {
  const transactions = useSelector((state: RootState) => state.transactions); 

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-[#343C6A] mb-4">All Transactions</h2>
      <div className="space-y-4">
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions found.</p>
        ) : (
          transactions.map((transaction: Transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border-b">
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
                  <p className="text-sm font-medium text-[#343C6A]">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div
                className={`text-sm font-medium ${
                  transaction.type === "deposit" ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.type === "deposit" ? "+" : "-"}$
                {transaction.amount.toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
