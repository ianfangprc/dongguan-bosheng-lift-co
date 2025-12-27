
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { Icons } from './components/Icon';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const News = lazy(() => import('./pages/News')); 
const NewsDetail = lazy(() => import('./pages/NewsDetail')); // Added NewsDetail import if it was missing or implied
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
// Internal Tool
const BusinessCard = lazy(() => import('./pages/BusinessCard'));

// Simple loading spinner
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Icons.Loader2 className="animate-spin text-industrial-accent w-12 h-12" />
      <span className="text-white font-bold tracking-widest">LOADING...</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-slate-50 font-sans selection:bg-industrial-accent selection:text-white">
        {/* Navbar is rendered on all pages except Business Card for clean printing */}
        <Routes>
           <Route path="/business-card" element={null} />
           <Route path="*" element={<Navbar />} />
        </Routes>
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} /> 
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              {/* Internal Route for Business Card Generation */}
              <Route path="/business-card" element={<BusinessCard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer & CTA hidden on Business Card page */}
        <Routes>
           <Route path="/business-card" element={null} />
           <Route path="*" element={<><Footer /><FloatingCTA /></>} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
