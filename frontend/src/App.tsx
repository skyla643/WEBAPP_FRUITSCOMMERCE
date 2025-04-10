// frontend/src/App.tsx (Even More Simplified)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MapTest from './components/MapTest';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/map-test" element={<MapTest />} />
      </Routes>
    </Router>
  );
};

export default App;