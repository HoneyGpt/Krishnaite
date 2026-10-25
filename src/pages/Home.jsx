import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Globe, Palette, Smartphone, TrendingUp, Cpu, 
  ArrowRight, ArrowUpRight, CheckCircle2, MessageSquare, ExternalLink
} from 'lucide-react';
import BrandEmblem from '../components/BrandEmblem';
import ProjectChatbar from '../components/ProjectChatbar';
import { SERVICES } from '../data/servicesData';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import './Home.css';

const Home = () => {
  // Mapping service icon names to Lucide icons
  const iconMap = {
    Sparkles: <Sparkles size={24} />,
    Globe: <Globe size={24} />,
    Palette: <Palette size={24} />,
    Smartphone: <Smartphone size={24} />,
    TrendingUp: <TrendingUp size={24} />,
    Cpu: <Cpu size={24} />
  };

  const handleScrollToChatbar = () => {
    const el = document.getElementById('project-chatbar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <div className="home-agency-page">
      
      {/* 1. HERO SECTION */}
      <section className="agency-hero-section">
        {/* Subtle geometric mandala watermark */}
        <div className="hero-heritage-pattern" aria-hidden="true">
          <svg viewBox="0 0 600 600" className="hero-mandala-svg">
            <circle cx="300" cy="300" r="280" stroke="var(--heritage-bronze)" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.25" />
            <circle cx="300" cy="300" r="200" stroke="var(--charcoal)" strokeWidth="0.8" opacity="0.15" />
            <rect x="150" y="150" width="300" height="300" stroke="var(--heritage-bronze)" strokeWidth="0.8" fill="none" opacity="0.2" />
            <rect x="150" y="150" width="300" height="300" transform="rotate(45 300 300)" stroke="var(--charcoal)" strokeWidth="0.8" fill="none" opacity="0.2" />
            <circle cx="300" cy="300" r="80" stroke="var(--heritage-bronze)" strokeWidth="1" strokeDasharray="2 4" opacity="0.3" />
          </svg>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="section-eyebrow">CREATIVE × TECHNOLOGY × GROWTH</div>
            
            <h1 className="hero-headline">
              Your Vision.<br />
              <span className="hero-accent-text">Our Craft.</span><br />
              Limitless Possibilities.
            </h1>
            
            <p className="hero-subtext">
              We build distinctive brands, digital experiences, and creative campaigns that help businesses stand out and move forward.
            </p>

            <div className="hero-cta-group">
              <a 
                href="#project-chatbar" 
                onClick={handleScrollToChatbar}
                className="btn-bronze"
              >
                <span>Tell Us What You're Building</span>
                <ArrowRight size={16} />
              </a>
              <Link to="/work" className="btn-outline">
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Micro proof bar */}
            <div className="hero-proof-bar">
              <div className="proof-item">
                <span className="proof-num">6+</span>
                <span className="proof-lbl">Service Disciplines</span>
              </div>
              <div className="proof-divider"></div>
              <div className="proof-item">
                <span className="proof-num">Custom</span>
                <span className="proof-lbl">Individual Quotations</span>
              </div>
              <div className="proof-divider"></div>
              <div className="proof-item">
                <span className="proof-num">100%</span>
                <span className="proof-lbl">Honest Scopes</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition Card */}
          <div className="hero-visual-card">
            <div className="visual-card-frame">
              <div className="visual-card-header">
                <BrandEmblem size={24} variant="bronze" />
                <span className="visual-card-tag">AGENCY ARCHITECTURE</span>
              </div>
              <div className="visual-card-body">
                <h3 className="visual-card-quote">
                  "Ancient Inspiration.<br />Modern Creation."
                </h3>
                <p className="visual-card-desc">
                  Merging timeless aesthetic balance with modern computational design, full-stack code, and AI acceleration.
                </p>
                <div className="visual-pillars-list">
                  <div className="visual-pillar">
                    <span className="pillar-dot"></span>
                    <span>AI Video Commercials & Creatives</span>
                  </div>
                  <div className="visual-pillar">
                    <span className="pillar-dot"></span>
                    <span>High-Performance Web Platforms</span>
                  </div>
                  <div className="visual-pillar">
                    <span className="pillar-dot"></span>
                    <span>Heritage-Grounded Visual Identity</span>
                  </div>
                  <div className="visual-pillar">
                    <span className="pillar-dot"></span>
                    <span>Workflow & Business Automations</span>
                  </div>
                </div>
              </div>
              <div className="visual-card-footer">
                <Link to="/services" className="btn-text-arrow">
                  <span>Explore All Services</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NON-AI PROJECT REQUEST CHATBAR SECTION (Featured Prominently) */}
      <section className="section chatbar-section" id="project-request-section">
        <div className="container">
          <ProjectChatbar />
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW SECTION */}
      <section className="section services-overview-section" id="services">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">OUR CAPABILITIES</span>
            <h2 className="section-title">Everything Your Brand Needs to Move Forward.</h2>
            <p className="section-subtitle">
              Six dedicated digital departments engineered to handle design, code, video, and automation under one roof.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((service) => (
              <div key={service.id} className="agency-card service-card">
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    {iconMap[service.iconName] || <Sparkles size={24} />}
                  </div>
                  <span className="badge-sage">{service.badge}</span>
                </div>

                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>

                <div className="service-deliverables-sample">
                  <span className="deliverables-label">Core Deliverables:</span>
                  <ul>
                    {service.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="deliverable-check" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-bottom">
                  <Link to={`/services#${service.id}`} className="btn-text-arrow">
                    <span>Department Details</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link to={`/contact?service=${service.id}`} className="service-quick-enquire">
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn-charcoal">
              <span>View Comprehensive Services & Deliverables</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED WORK & PORTFOLIO SECTION */}
      <section className="section featured-work-section" id="work">
        <div className="container">
          <div className="featured-work-header">
            <div>
              <span className="section-eyebrow">PROVEN CRAFT</span>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Featured Work</h2>
              <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
                Curated genuine initiatives and transparently labeled concept demonstrations.
              </p>
            </div>
            
            <Link to="/work" className="btn-outline view-all-work-btn">
              <span>All Portfolio Projects</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="agency-card project-card">
                <div className="project-card-badge-row">
                  <span className={project.type === 'Genuine Project' ? 'badge-bronze' : 'badge-sage'}>
                    {project.type}
                  </span>
                  <span className="project-category-tag">{project.categoryLabel}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-deliverables-tags">
                  {project.deliverables.map((item, i) => (
                    <span key={i} className="deliverable-tag">{item}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span className="project-client-name">For: {project.client}</span>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <span>Live Site</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <Link to="/work" className="project-link-btn">
                      <span>View Case Study</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY KRISHNAITE SECTION */}
      <section className="section why-krishnaite-section">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">OUR APPROACH</span>
            <h2 className="section-title">Why Partner With Krishnaite?</h2>
            <p className="section-subtitle">
              We combine creative ambition with disciplined engineering—no bloated agency overhead, no vague promises.
            </p>
          </div>

          <div className="principles-grid">
            <div className="agency-card principle-card">
              <div className="principle-number">01</div>
              <h3 className="principle-title">Creative Thinking with Practical Execution</h3>
              <p className="principle-desc">
                Great ideas are worthless if they cannot be built efficiently. We balance bold creative direction with realistic technical constraints from day one.
              </p>
            </div>

            <div className="agency-card principle-card">
              <div className="principle-number">02</div>
              <h3 className="principle-title">Design Tailored to Each Business</h3>
              <p className="principle-desc">
                We avoid generic cookie-cutter templates. Every typography choice, color palette, and interface workflow is specifically calibrated to your industry.
              </p>
            </div>

            <div className="agency-card principle-card">
              <div className="principle-number">03</div>
              <h3 className="principle-title">Technology Selected for Real Needs</h3>
              <p className="principle-desc">
                We choose frameworks, APIs, and AI models that actually solve business bottlenecks—delivering fast load times, scalability, and maintainability.
              </p>
            </div>

            <div className="agency-card principle-card">
              <div className="principle-number">04</div>
              <h3 className="principle-title">Transparent Communication & Defined Deliverables</h3>
              <p className="principle-desc">
                Clear written milestone agreements, defined revision cycles, and direct access to the designers and engineers building your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS SECTION */}
      <section className="section process-section">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">METHODICAL EXECUTION</span>
            <h2 className="section-title">A Simple, Four-Stage Process</h2>
            <p className="section-subtitle">
              From first spark to agreed handover support, our process is clear, transparent, and structured.
            </p>
          </div>

          <div className="process-timeline-grid">
            <div className="process-step-card">
              <div className="process-step-indicator">
                <span className="step-num">01</span>
                <span className="step-name">Discover</span>
              </div>
              <h4 className="process-step-title">Understand the Business</h4>
              <p className="process-step-desc">
                We dissect your brand objectives, audience demographics, target channels, and functional requirements before writing a single line of code.
              </p>
            </div>

            <div className="process-step-card">
              <div className="process-step-indicator">
                <span className="step-num">02</span>
                <span className="step-name">Define</span>
              </div>
              <h4 className="process-step-title">Establish Scope & Direction</h4>
              <p className="process-step-desc">
                We map out exact deliverables, creative moodboards, milestone dates, and revision boundaries so expectations are completely aligned.
              </p>
            </div>

            <div className="process-step-card">
              <div className="process-step-indicator">
                <span className="step-num">03</span>
                <span className="step-name">Create</span>
              </div>
              <h4 className="process-step-title">Design, Code & Refine</h4>
              <p className="process-step-desc">
                Production sprints across branding, UI/UX, web architecture, and video ads. Consolidated feedback rounds ensure rapid, focused iterations.
              </p>
            </div>

            <div className="process-step-card">
              <div className="process-step-indicator">
                <span className="step-num">04</span>
                <span className="step-name">Deliver</span>
              </div>
              <h4 className="process-step-title">Test, Launch & Handover</h4>
              <p className="process-step-desc">
                Comprehensive cross-device QA testing, SEO audit, asset exports, production deployment, and agreed post-launch stabilization support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOM QUOTATION EXPLANATION STRIP */}
      <section className="section custom-quote-strip-section">
        <div className="container">
          <div className="agency-card quote-strip-card text-center">
            <span className="section-eyebrow">TAILORED QUOTATIONS</span>
            <h2 className="quote-strip-title">Every Project is Different</h2>
            <p className="quote-strip-body">
              “Every project is different. Tell us what you need, your budget, and your goals. We'll review your request and prepare a quotation tailored to your requirements.”
            </p>
            <p className="quote-strip-sub">
              Whether you need a student project presentation, a personal portfolio, brand identity, or an enterprise application, our team reviews each brief individually.
            </p>
            <div className="quote-strip-action">
              <a 
                href="#project-chatbar" 
                onClick={handleScrollToChatbar}
                className="btn-bronze"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL HIGH-IMPACT CTA SECTION */}
      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="cta-mandala-decor" aria-hidden="true">
              <BrandEmblem size={120} variant="light" className="cta-decor-emblem" />
            </div>

            <div className="final-cta-content">
              <span className="final-cta-eyebrow">TAKE THE NEXT STEP</span>
              <h2 className="final-cta-headline">Have an Idea Worth Building?</h2>
              <p className="final-cta-subtext">
                Tell us what you're working on. Let's find the right way to bring it to life with clear deliverables and transparent communication.
              </p>
              
              <div className="final-cta-buttons">
                <a 
                  href="#project-chatbar" 
                  onClick={handleScrollToChatbar}
                  className="btn-bronze btn-cta-large"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight size={16} />
                </a>
                <Link to="/services" className="btn-outline-light">
                  <span>Explore All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
