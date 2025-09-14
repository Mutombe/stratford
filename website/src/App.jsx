import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/nav';
import HomePage from './components/home';
import AboutPage from './components/about';
import ServicesPage from './components/service';
import PortfolioPage from './components/portfolio';
import ContactPage from './components/contact';
import Footer from './components/footer';
import { Toaster } from 'sonner';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
          @font-face {
            font-family: 'Gravesend Sans';
            src: url('./fonts/fonnts.com-Gravesend_Sans_Light.otf') format('opentype');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gravesend Sans';
            src: url('./fonts/fonnts.com-Gravesend_Sans_Medium.otf') format('opentype');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gravesend Sans';
            src: url('./fonts/fonnts.com-Gravesend_Sans_Bold.otf') format('opentype');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          
          /* Century Gothic Font Face */
          @font-face {
            font-family: 'Century Gothic Custom';
            src: url('./fonts/weezerfont.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gellix';
            src: url('./fonts/Gellix-Light.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Gellix';
            src: url('./fonts/Gellix-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          /* Font utility classes */
          .gravesend-sans {
            font-family: 'Gravesend Sans', 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          .roboto-font {
            font-family: 'Roboto', 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          .century-gothic {
            font-family: 'Century Gothic Custom', 'Century Gothic', 'Arial', sans-serif;
          }

          .gellix-font {
            font-family: 'Gellix', 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          body {
            overflow-x: hidden;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      <ScrollToTop />
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
};

// Root App with Router
export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
            