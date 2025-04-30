import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';  // Assuming Sidebar component is in 'components' folder
import Pricelist from './pages/Pricelist';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
          <Routes>
            <Route path="/price-list" element={<Pricelist />} />
          </Routes>
        </div>
    </Router>
  );
};

export default App;
