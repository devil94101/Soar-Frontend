import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarClose } from 'lucide-react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={toggleSidebar}
        ></div>
        <div className="relative flex flex-col w-full max-w-xs bg-white h-full">
          <div className="absolute top-0 right-0 -mr-12 pt-4">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              <SidebarClose className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <Sidebar mobile={true} onClose={toggleSidebar} />
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 lg:p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}