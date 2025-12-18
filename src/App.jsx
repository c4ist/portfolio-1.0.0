import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TinyTools from './pages/TinyTools';
import MemoryLane from './pages/MemoryLane';
import Echo from './pages/Echo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tiny-tools" element={<TinyTools />} />
      <Route path="/memory-lane" element={<MemoryLane />} />
      <Route path="/echo" element={<Echo />} />
    </Routes>
  );
};

export default App;
