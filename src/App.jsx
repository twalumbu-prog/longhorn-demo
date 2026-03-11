import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Booking from './pages/Booking';
import Pricing from './pages/Pricing';
import { DemoProvider } from './context/DemoContext';

function App() {
  return (
    <DemoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="listings" element={<Listings />} />
            <Route path="booking" element={<Booking />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </Router>
    </DemoProvider>
  );
}

export default App;


