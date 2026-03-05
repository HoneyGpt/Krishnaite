import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import KnowledgeLibrary from './pages/KnowledgeLibrary';
import Framework from './pages/Framework';
import SubmitDilemma from './pages/SubmitDilemma';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      {/* Background Shapes */}
      <div className="abstract-shape shape-1"></div>
      <div className="abstract-shape shape-2"></div>

      <div className="app-window-wrapper">
        <div className="app-window flex flex-col min-h-screen">
          <Navigation />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/knowledge" element={<KnowledgeLibrary />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/framework" element={<Framework />} />
              <Route path="/submit" element={<SubmitDilemma />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
