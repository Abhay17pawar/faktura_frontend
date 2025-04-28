import { IoIosPricetag } from "react-icons/io";
import { FaFileInvoiceDollar, FaUsers, FaBusinessTime, FaFileAlt, FaFileInvoice, FaTimesCircle, FaGift, FaBoxes, FaUserFriends, FaCloudUploadAlt, FaSignOutAlt, FaCircle } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-white shadow-lg">
      <div className="mt-6 px-4">
        <h2 className="text-gray-700 flex mb-3 border-b-2 border-blue-300 justify-center font-semibold text-xl mb-7">Menu</h2>
        <ul className="space-y-2 ml-4">
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaFileInvoiceDollar className="mr-3 text-blue-400" /> Invoices
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaUsers className="mr-3 text-green-400" /> Customers
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaBusinessTime className="mr-3 text-gray-400" /> My Business
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaFileAlt className="mr-3 text-blue-400" /> Invoice Journal
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            {/* Adding a green dot or icon before the price tag */}
            <FaCircle className="mr-2 text-green-500 w-3 h-3" />
            <IoIosPricetag className="w-3 h-3 mr-3" /> Price List
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaFileInvoice className="mr-3 text-blue-400" /> Multiple Invoicing
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaTimesCircle className="mr-3 text-pink-500" /> Unpaid Invoices
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaGift className="mr-3 text-yellow-400" /> Offer
          </li>
          <li className="flex items-center text-gray-400 cursor-not-allowed">
            <FaBoxes className="mr-3 text-blue-300" /> Inventory Control
          </li>
          <li className="flex items-center text-gray-400 cursor-not-allowed">
            <FaUserFriends className="mr-3 text-blue-300" /> Member Invoicing
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaCloudUploadAlt className="mr-3 text-blue-400" /> Import/Export
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaSignOutAlt className="mr-3 text-blue-400" /> Log out
          </li>
        </ul>
      </div>
    </div>
  );
}
