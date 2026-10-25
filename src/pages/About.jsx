import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import BrandEmblem from '../components/BrandEmblem';
import './About.css';

const About = () => {
  return (
    <div className="about-agency-page">
      
      {/* About Hero */}
      <section className="about-hero-section">
        <div className="container text-center">
          <span className="section-eyebrow">ABOUT KRISHNAITE</span>
          <h1 className="section-title">
            Ancient Inspiration.<br />
            Modern Creation.
          </h1>
          <p className="section-subtitle">
            A digital creative and technology agency uniting time-tested principles of proportion, harmony, and purpose with modern code and AI-powered production.
          </p>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-copy">
              <span className="section-eyebrow">OUR DESIGN ETHOS</span>
              <h2 className="philosophy-heading">
                Why "Ancient Inspiration"?
              </h2>
              <p className="philosophy-paragraph">
                For millennia, classical Indian architecture, mathematics, and craft operated on rigorous geometric principles—symmetry, structural integrity, and deep reverence for the human experience.
              </p>
              <p className="philosophy-paragraph">
                At Krishnaite, we treat this heritage not as nostalgic decoration, but as an intellectual compass. In an era where digital products are flooded with sterile, generic templates, we draw upon timeless aesthetic proportions to build brands, interfaces, and campaigns that feel grounded, distinctive, and enduring.
              </p>
              <p className="philosophy-paragraph">
                Yet inspiration without modern execution is merely theory. That is where <strong>Modern Creation</strong> takes over: deploying sub-second web architectures, clean responsive code, and AI-accelerated creative workflows to give modern businesses a real commercial advantage.
              </p>
            </div>

            <div className="philosophy-emblem-card agency-card text-center">
              <BrandEmblem size={80} variant="bronze" className="about-card-emblem" />
              <h3 className="about-card-title">The Geometry of Balance</h3>
              <p className="about-card-desc">
                Our geometric emblem unites the traditional stepped-well and mandapa square with the cardinal coordinates of digital technology.
              </p>
              <div className="about-emblem-specs">
                <div className="spec-item">
                  <span className="spec-label">PROPORTION</span>
                  <span className="spec-val">Sacred Symmetry</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">EXECUTION</span>
                  <span className="spec-val">Modern Code</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">FOCUS</span>
                  <span className="spec-val">Measurable Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="agency-card mission-card">
              <span className="card-micro-tag">OUR MISSION</span>
              <h3 className="card-title">Empowering Businesses to Stand Out</h3>
              <p className="card-desc">
                To equip startups, established enterprises, and entrepreneurs with the complete creative and technical infrastructure needed to present their vision authentically, command attention, and sustainably grow their digital presence.
              </p>
            </div>

            <div className="agency-card vision-card">
              <span className="card-micro-tag">OUR VISION</span>
              <h3 className="card-title">A New Standard for Agency Craft</h3>
              <p className="card-desc">
                To build an internationally recognized creative and technology studio rooted in Indian cultural depth, proving that high design, technical rigor, and honest client partnerships produce superior commercial results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative & Technical Approach */}
      <section className="section approach-section">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">HOW WE WORK</span>
            <h2 className="section-title">Our Creative & Technical Approach</h2>
            <p className="section-subtitle">
              We eliminate traditional agency bloat. Every project is steered by senior creative direction and rigorous engineering principles.
            </p>
          </div>

          <div className="approach-pillars-grid">
            <div className="agency-card approach-pillar-card">
              <div className="pillar-icon-box">
                <Compass size={24} />
              </div>
              <h4>Holistic Brand Integration</h4>
              <p>
                We do not view code and design in silos. Your brand typography, messaging hooks, website code, and ad creatives are built to reinforce each other seamlessly.
              </p>
            </div>

            <div className="agency-card approach-pillar-card">
              <div className="pillar-icon-box">
                <Cpu size={24} />
              </div>
              <h4>Modern, Maintainable Tech Stacks</h4>
              <p>
                We build on clean modern foundations—React, Vite, Next.js, and lightweight CSS. No bloated site builders or fragile dependencies that trap you later.
              </p>
            </div>

            <div className="agency-card approach-pillar-card">
              <div className="pillar-icon-box">
                <Sparkles size={24} />
              </div>
              <h4>AI as a Production Multiplier</h4>
              <p>
                We leverage generative AI responsibly—rapidly iterating visual concepts, storyboards, and scripts to save you thousands in production costs while maintaining strict human quality control.
              </p>
            </div>

            <div className="agency-card approach-pillar-card">
              <div className="pillar-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h4>Uncompromising Intellectual Property</h4>
              <p>
                You retain 100% full ownership of all final designs, code repositories, creative assets, and accounts upon project completion and agreed handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and Communication Commitments */}
      <section className="section commitments-section">
        <div className="container">
          <div className="commitments-banner agency-card">
            <div className="text-center mb-4">
              <span className="section-eyebrow">OUR PROMISE</span>
              <h3 className="section-title" style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
                Principles of Client Partnership
              </h3>
            </div>

            <div className="commitments-grid">
              <div className="commitment-item">
                <CheckCircle2 size={18} className="commitment-icon" />
                <div>
                  <h5>Defined Milestone Scopes</h5>
                  <p>Every phase has clear agreed deliverables in writing before work begins.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={18} className="commitment-icon" />
                <div>
                  <h5>Consolidated Feedback Cycles</h5>
                  <p>Structured revision rounds ensure rapid, focused iterations without endless delays.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={18} className="commitment-icon" />
                <div>
                  <h5>Transparent Costing</h5>
                  <p>No hidden fees or unexpected invoices. Third-party costs are clarified upfront.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={18} className="commitment-icon" />
                <div>
                  <h5>Post-Launch Handover Support</h5>
                  <p>We provide training, documentation, and agreed stabilization support after launch.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6" style={{ marginTop: '3rem' }}>
              <Link to="/contact" className="btn-bronze">
                <span>Work With Krishnaite</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
