import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
