import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Krishnaite</h3>
                        <p className="subtext mt-2">Strategic Wisdom for Real-Life Problems</p>
                    </div>
                    <div className="footer-links">
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/submit">Submit Dilemma</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Krishnaite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
