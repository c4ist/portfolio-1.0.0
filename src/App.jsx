import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Literature from './pages/Literature';
import Recipes from './pages/Recipes';
import FourOhFour from './pages/fourohfour';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/literature" element={<Literature />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};

export default App;
