import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Core Agency Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

// Preserved Ecosystem Pages
import KnowledgeLibrary from './pages/KnowledgeLibrary';
import Framework from './pages/Framework';
import SubmitDilemma from './pages/SubmitDilemma';
import Article from './pages/Article';
import Enterprise from './pages/Enterprise';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-window-wrapper">
        <div className="app-window flex flex-col min-h-screen">
          <Navigation />
          <main style={{ flex: 1 }}>
            <Routes>
              {/* Primary Agency Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Preserved Ecosystem & Legacy Routes */}
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/framework" element={<Framework />} />
              <Route path="/knowledge" element={<KnowledgeLibrary />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/submit" element={<SubmitDilemma />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
