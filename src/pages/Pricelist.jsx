import { useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { Search } from 'lucide-react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const Pricelist = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="p-4">
      {/* Inputs + Buttons */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Input Fields */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-3xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Article No..."
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
          </div>

          <div className="relative w-full md:w-[300px]">
            <input
              type="text"
              className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-3xl shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Product..."
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
          </div>
        </div>

        {/* Buttons */}
        <div className={`flex gap-2 flex-wrap ${isMobile ? 'justify-between' : 'justify-end'} md:flex-nowrap`}>
  <button className="h-10 px-4 flex items-center gap-2 bg-white text-gray-400 border border-gray-100 rounded-3xl shadow-sm hover:bg-gray-50 transition md:border-2 sm:border-4">
    {!isMobile && 'New Product'}
    <AddCircleOutlineIcon className="text-green-500" fontSize="medium" />
  </button>

  <button className="h-10 px-4 flex items-center gap-2 bg-white text-gray-400 border border-gray-100 rounded-3xl shadow-sm hover:bg-gray-50 transition md:border-2 sm:border-4">
    {!isMobile && 'Print List'}
    <LocalPrintshopIcon className="text-blue-500" fontSize="medium" />
  </button>

  <button className="h-10 px-4 flex items-center gap-2 bg-white text-gray-400 border border-gray-100 rounded-3xl shadow-sm hover:bg-gray-50 transition md:border-2 sm:border-4">
    {!isMobile && 'Advanced Mode'}
    <ToggleOnIcon className="text-blue-500" fontSize="medium" />
  </button>
</div>

      </div>
    </div>
  );
};

export default Pricelist;
