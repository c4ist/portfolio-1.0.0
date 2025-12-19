import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TinyTools from './pages/TinyTools';
import MemoryLane from './pages/MemoryLane';
import Echo from './pages/Echo';
import Works from './pages/Works';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/tiny-tools" element={<TinyTools />} />
      <Route path="/memory-lane" element={<MemoryLane />} />
      <Route path="/echo" element={<Echo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
