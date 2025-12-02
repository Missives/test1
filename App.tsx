import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <Hero />
    <Portfolio />
    <About />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="bg-black min-h-screen text-neutral-200 selection:bg-neon-purple selection:text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="pt-20"><About /></div>} />
          <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        
        <footer className="py-12 border-t border-gray-900 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Lumina Portfolio. 保留所有权利。</p>
          <p className="mt-2 text-xs">基于 React, Tailwind & Gemini AI 设计。</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;