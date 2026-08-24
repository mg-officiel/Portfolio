import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import Home from './pages/Home';
import Services from './pages/Services';
import Stack from './pages/Stack';
import CaseStudies from './pages/CaseStudies';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden selection:bg-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <FloatingSocials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
