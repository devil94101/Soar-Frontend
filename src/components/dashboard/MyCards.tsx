import { Card } from '../../types';
import ChipCardIcon from '../../assets/Chip_Card.svg';
import CardCircleIcon from '../../assets/card_circle.svg';

interface MyCardsProps {
  cards: Card[];
}

export default function MyCards({ cards }: MyCardsProps) {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-6 p-6">
        <h2 className="text-lg font-semibold text-[#343C6A]">My Cards</h2>
        <button className="text-sm text-[#343C6A] hover:text-indigo-900">
          See All
        </button>
      </div>
      <div className="px-6 overflow-x-auto scrollbar-hide">
        <div className="flex md:grid md:grid-cols-2 gap-6 min-w-max md:min-w-0">
          {cards.slice(0,2).map((card) => (
            <div
              key={card.id}
              className={`p-6 rounded-2xl w-[380px] md:w-auto relative ${
                card.type === 'credit' 
                  ? 'bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white' 
                  : 'bg-white text-[#343C6A] border border-[#DFEAF2]'
              }`}
            >
              {card.type === 'credit' && (
                <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent rounded-2xl pointer-events-none" />
              )}
              
              <div className="relative">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className={`text-sm font-medium ${
                      card.type === 'credit' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Balance
                    </p>
                    <p className={`text-2xl font-bold mt-1 ${
                      card.type === 'credit' ? 'text-white' : 'text-[#343C6A]'
                    }`}>
                      ${card.balance.toLocaleString()}
                    </p>
                  </div>
                  <img 
                    src={ChipCardIcon}
                    alt="Chip"
                    loading="lazy"
                    className={`w-10 h-10 ${
                      card.type === 'credit' 
                        ? 'brightness-100' 
                        : 'brightness-0'
                    }`}
                  />
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div>
                      <p className={`text-xs ${
                        card.type === 'credit' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        CARD HOLDER
                      </p>
                      <p className={`text-sm font-medium mt-1 ${
                        card.type === 'credit' ? 'text-white' : 'text-[#343C6A]'
                      }`}>
                        {card.cardHolder}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${
                        card.type === 'credit' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        VALID THRU
                      </p>
                      <p className={`text-sm font-medium mt-1 ${
                        card.type === 'credit' ? 'text-white' : 'text-[#343C6A]'
                      }`}>
                        {card.expiryDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className={`text-lg tracking-[0.3em] font-medium ${
                    card.type === 'credit' ? 'text-white' : 'text-[#343C6A]'
                  }`}>
                    {card.cardNumber}
                  </p>
                  <img 
                    src={CardCircleIcon}
                    alt="Card Circle"
                    loading="lazy"
                    className={`h-8 ${
                      card.type === 'credit' 
                        ? 'opacity-50' 
                        : 'opacity-30'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}