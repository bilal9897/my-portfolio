import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import BiodiversityDemo from './pages/BiodiversityDemo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biodiversity-demo" element={<BiodiversityDemo />} />
      </Routes>
    </Router>
  );
}
