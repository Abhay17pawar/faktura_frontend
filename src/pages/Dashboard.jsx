import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ProductTable from '../components/ProductTable';

const Dashboard = () => (
  <div className="flex min-h-screen flex-col md:flex-row bg-gray-100">
    <Sidebar />
    <main className="flex-1 p-6">
      <Topbar />
      <ProductTable />
    </main>
  </div>
);

export default Dashboard;
