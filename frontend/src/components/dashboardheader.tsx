import { Search, Bell } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className="bg-white shadow">
      <div className="w-full px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* SEARCH */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09637E] w-64"
            />
          </div>

          {/* NOTIFICATION */}
          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-gray-500" />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              3
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;