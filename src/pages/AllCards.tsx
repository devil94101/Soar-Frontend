import { useSelector } from 'react-redux';
import { Card } from '../types';
import CardComponent from '../components/dashboard/CardComponent';
import { RootState } from '../store';

export default function AllCards() {
  const cards = useSelector((state: RootState) => state.cards); 

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-[#343C6A] mb-4">All Cards</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cards.map((card: Card) => (
          <CardComponent card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
} 