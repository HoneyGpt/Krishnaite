import React from 'react';
import { NavLink } from 'react-router-dom';
import { Anchor } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <NavLink to="/" className="brand">
          <Anchor size={20} strokeWidth={2} />
          KRISHNAITE
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">HOME</NavLink>
          <NavLink to="/knowledge" className="nav-link">KNOWLEDGE</NavLink>
          <NavLink to="/framework" className="nav-link">FRAMEWORK</NavLink>
          <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
