import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Terms from './pages/Terms';

const AppContent = () => {
  const location = useLocation();
  const showSidebar = location.pathname === '/price-list';

  return (
    <div>
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
