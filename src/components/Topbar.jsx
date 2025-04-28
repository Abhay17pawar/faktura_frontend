import { FaSearch } from 'react-icons/fa';

const Topbar = () => (
  <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    <div className="flex gap-2 w-full md:w-auto">
      <input type="text" placeholder="Search Article No..." className="border rounded px-3 py-1 w-full" />
      <input type="text" placeholder="Search Product..." className="border rounded px-3 py-1 w-full" />
      <button className="bg-blue-500 text-white p-2 rounded">
        <FaSearch />
      </button>
    </div>
    <div className="flex gap-2 items-center">
      <button className="bg-green-500 text-white rounded px-4 py-2">New Product</button>
      <button className="bg-blue-500 text-white rounded px-4 py-2">Print List</button>
      <button className="bg-gray-300 text-gray-700 rounded px-4 py-2">Advanced Mode</button>
      <div className="ml-4 flex items-center gap-2">
        <span>Norsk Bokmål</span>
        <img src="https://flagcdn.com/no.svg" alt="Norway Flag" className="w-6 h-4" />
      </div>
    </div>
  </div>
);

export default Topbar;
