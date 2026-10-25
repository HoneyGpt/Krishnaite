import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import BrandEmblem from './BrandEmblem';
import { SERVICES } from '../data/servicesData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="agency-footer" aria-label="Site Footer">
      <div className="container">
        
        {/* Top Pre-Footer Banner */}
        <div className="footer-top-strip">
          <div className="footer-brand-hero">
            <Link to="/" className="footer-brand-link">
              <BrandEmblem size={36} variant="light" />
              <span className="footer-brand-title">KRISHNAITE</span>
            </Link>
            <p className="footer-tagline">Ancient Inspiration. Modern Creation.</p>
            <p className="footer-summary">
              A full-service digital creative and technology agency. We combine creative design, modern web architecture, and AI-powered production to help businesses stand out and grow.
            </p>
          </div>

          <div className="footer-cta-box">
            <span className="footer-cta-eyebrow">TELL US WHAT YOU NEED</span>
            <h4 className="footer-cta-heading">Every project receives a custom quotation.</h4>
            <Link to="/#project-chatbar" className="btn-bronze footer-start-btn">
              <span>Start a Project</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Multi-column Navigation Links */}
        <div className="footer-grid">
          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="footer-link">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency & Work Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Agency</h4>
            <ul className="footer-list">
              <li><Link to="/about" className="footer-link">About Krishnaite</Link></li>
              <li><Link to="/work" className="footer-link">Featured Work & Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link">Contact & Inquiries</Link></li>
              <li><Link to="/enterprise" className="footer-link">Enterprise Mobility & Credentials</Link></li>
            </ul>
          </div>

          {/* Ecosystem Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Ecosystem</h4>
            <ul className="footer-list">
              <li>
                <a href="https://mentozy.app/" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                  <span>Mentozy Platform</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://unstop.com/hackathons/dev-delight-hack-mentozy-1668061" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                  <span>Dev Delight Hackathon</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li><Link to="/framework" className="footer-link">Decision Framework</Link></li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <p className="footer-contact-text">
              Direct inquiries for project scopes, enterprise partnerships, and media:
            </p>
            <div className="footer-contact-item">
              <Mail size={16} className="contact-item-icon" />
              <a href="mailto:hello@krishnaite.dev" className="footer-email-link">
                hello@krishnaite.dev
              </a>
            </div>
            <div className="footer-contact-item">
              <Linkedin size={16} className="contact-item-icon" />
              <a href="https://www.linkedin.com/company/krishnaite" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                LinkedIn / Krishnaite
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Krishnaite. All rights reserved. Ancient Inspiration. Modern Creation.
          </p>
          <div className="footer-legal-links">
            <span className="legal-notice">Custom quotations prepared for all clients. No fixed packages or automated billing.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
