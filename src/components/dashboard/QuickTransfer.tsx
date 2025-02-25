import { useState } from "react";
import SendIcon from "../../assets/send.svg";

const contacts = [
  {
    id: "1",
    name: "Livia Bator",
    role: "CEO",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    id: "2",
    name: "Randy Press",
    role: "Director",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
  {
    id: "3",
    name: "Workman",
    role: "Designer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
  },
  {
    id: "4",
    name: "Sarah Chen",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
  {
    id: "5",
    name: "Marcus Rodriguez",
    role: "Developer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    id: "6",
    name: "Emma Wilson",
    role: "Marketing Lead",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
  },
  {
    id: "7",
    name: "James Cooper",
    role: "Sales Director",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
  },
  {
    id: "8",
    name: "Nina Patel",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
  },
  {
    id: "9",
    name: "David Kim",
    role: "Tech Lead",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100",
  },
  {
    id: "10",
    name: "Sophie Taylor",
    role: "HR Manager",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
  },
];

export default function QuickTransfer() {
  const [amount, setAmount] = useState("525.50");
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-6 p-6">
        <h2 className="text-lg font-semibold text-[#343C6A]">
          Quick Transfer
        </h2>
      </div>
      <div className="bg-white rounded-xl p-6">
        <div className="space-y-6">
          <div className="overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
            <div className="flex space-x-4">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact.id)}
                  className={`flex flex-col items-center space-y-1 min-w-[80px] relative`}
                >
                  <div className="relative">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="h-12 w-12 rounded-full"
                    />
                  </div>
                  <div className="text-center w-full">
                    <p className="text-sm font-medium text-[#343C6A]">
                      {contact.name}
                    </p>
                    <p className="text-xs text-[#8B8D97]">{contact.role}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <p className="text-xs text-[#718EBF] ">Write Amount</p>
          <div className="relative flex">
            <div className="flex-1">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-full bg-[#EDF1F7] text-[#718EBF] py-3 px-4 text-lg font-medium focus:outline-none"
              />
            </div>
            <button className="absolute right-0 bg-[#232323] text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-[#2D60FF]/90 transition-colors">
              <span className="font-medium">Send</span>
              <img
                src={SendIcon}
                alt={SendIcon}
                loading="lazy"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
