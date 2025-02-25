import { useSelector } from "react-redux";
import { Bell, Search, Menu, Settings } from "lucide-react";
import { RootState } from "../store";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-4">
        <div className="flex items-center w-full lg:w-auto justify-between lg:justify-start">
          <button
            type="button"
            className="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
            onClick={onMenuClick}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="text-2xl font-semibold text-[#343C6A]">Overview</div>
          <img
            className="h-8 w-8 rounded-full lg:hidden"
            src={user.avatar}
            alt={user.name}
          />
        </div>

        <div className="w-full lg:hidden mt-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border border-gray-300 rounded-full py-2 px-4"
              placeholder="Search for something"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border border-gray-300 rounded-full py-2 px-4"
              placeholder="Search for something"
            />
          </div>
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
          </button>
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
            <Settings className="h-6 w-6" />
          </button>
          <img
            className="h-8 w-8 rounded-full"
            src={user.avatar}
            alt={user.name}
          />
        </div>
      </div>
    </header>
  );
}