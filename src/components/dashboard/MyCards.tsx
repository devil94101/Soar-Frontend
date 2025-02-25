import { Card } from '../../types';
import { Link } from 'react-router-dom';
import CardComponent from './CardComponent';

interface MyCardsProps {
  cards: Card[];
}

export default function MyCards({ cards }: MyCardsProps) {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6 p-6">
        <h2 className="text-lg font-semibold text-[#343C6A]">My Cards</h2>
        <Link 
          to="/credit-cards" 
          className="text-sm text-[#343C6A] hover:text-indigo-900 hover:underline transition duration-200"
        >
          See All
        </Link>
      </div>
      <div className="px-6 overflow-x-auto scrollbar-hide">
        <div className="grid grid-cols-2 gap-6 min-w-max">
          {cards.slice(0, 2).map((card) => (
            <CardComponent key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}