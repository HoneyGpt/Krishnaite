import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import BrandEmblem from './BrandEmblem';
import './Navigation.css';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle subtle sticky header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartProjectClick = () => {
    const chatbarEl = document.getElementById('project-chatbar');
    if (chatbarEl) {
      chatbarEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        {/* Brand Wordmark & Geometric Emblem */}
        <Link to="/" className="brand-lockup" aria-label="Krishnaite Home">
          <BrandEmblem size={30} variant="default" className="brand-emblem-icon" />
          <div className="brand-text-group">
            <span className="brand-name">KRISHNAITE</span>
            <span className="brand-tagline">CREATIVE × TECH</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop" aria-label="Primary Navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Services
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Our Work
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Start a Project Primary CTA */}
        <div className="nav-actions">
          <Link 
            to="/#project-chatbar" 
            onClick={handleStartProjectClick}
            className="btn-bronze btn-nav-cta"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-inner container">
            <nav className="mobile-nav-links">
              <NavLink to="/" className="mobile-nav-link" end>
                Home
              </NavLink>
              <NavLink to="/services" className="mobile-nav-link">
                Services
              </NavLink>
              <NavLink to="/work" className="mobile-nav-link">
                Our Work
              </NavLink>
              <NavLink to="/about" className="mobile-nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="mobile-nav-link">
                Contact
              </NavLink>
            </nav>

            <div className="mobile-drawer-footer">
              <Link 
                to="/#project-chatbar" 
                onClick={handleStartProjectClick}
                className="btn-bronze w-full text-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </Link>
              <p className="mobile-drawer-brand">Ancient Inspiration. Modern Creation.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
