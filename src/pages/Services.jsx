import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, Globe, Palette, Smartphone, TrendingUp, Cpu, 
  CheckCircle2, ArrowRight, ArrowUpRight, HelpCircle, Layers, ShieldCheck
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import './Services.css';

const Services = () => {
  const location = useLocation();
  const [selectedDept, setSelectedDept] = useState('all');

  const iconMap = {
    Sparkles: <Sparkles size={28} />,
    Globe: <Globe size={28} />,
    Palette: <Palette size={28} />,
    Smartphone: <Smartphone size={28} />,
    TrendingUp: <TrendingUp size={28} />,
    Cpu: <Cpu size={28} />
  };

  // Scroll to hash if present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const displayedServices = selectedDept === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.id === selectedDept);

  return (
    <div className="services-page">
      
      {/* Services Hero Header */}
      <section className="services-hero-section">
        <div className="container text-center">
          <span className="section-eyebrow">OUR DISCIPLINES</span>
          <h1 className="section-title">
            Creative Craft.<br />
            Modern Code.<br />
            Measurable Momentum.
          </h1>
          <p className="section-subtitle">
            Six focused departments engineered to handle design, code, video, and automation under one roof. Every project receives an individually prepared quotation tailored to your exact scope.
          </p>

          <div className="custom-quote-callout agency-card" style={{ maxWidth: '780px', margin: '2rem auto 0', padding: '1.5rem 2rem' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--charcoal)', fontSize: '0.95rem', margin: 0 }}>
              “Every project is different. Tell us what you need, your budget, and your goals. We'll review your request and prepare a quotation tailored to your requirements.”
            </p>
          </div>

          {/* Quick Department Filter Bar */}
          <div className="department-filter-bar">
            <button
              type="button"
              className={`dept-tab ${selectedDept === 'all' ? 'dept-tab-active' : ''}`}
              onClick={() => setSelectedDept('all')}
            >
              All 6 Departments
            </button>
            {SERVICES.map(s => (
              <button
                key={s.id}
                type="button"
                className={`dept-tab ${selectedDept === s.id ? 'dept-tab-active' : ''}`}
                onClick={() => setSelectedDept(s.id)}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Detailed List */}
      <section className="services-list-section section">
        <div className="container">
          <div className="services-detailed-container">
            {displayedServices.map((service, index) => (
              <div key={service.id} id={service.id} className="department-detail-card agency-card">
                
                {/* Header Row */}
                <div className="dept-header-row">
                  <div className="dept-icon-box">
                    {iconMap[service.iconName] || <Sparkles size={28} />}
                  </div>
                  <div className="dept-title-group">
                    <div className="dept-meta-badge">
                      <span className="badge-bronze">{service.badge}</span>
                      <span className="dept-number">DEPARTMENT 0{index + 1}</span>
                    </div>
                    <h2 className="dept-title">{service.name}</h2>
                  </div>
                </div>

                <p className="dept-main-desc">{service.shortDesc}</p>

                {/* Highlight Quote Box */}
                <div className="dept-highlight-box">
                  <span className="highlight-tag">STRATEGIC ADVANTAGE:</span>
                  <p className="highlight-text">{service.highlight}</p>
                </div>

                {/* Two Column Grid: Deliverables + Intended For */}
                <div className="dept-columns-grid">
                  
                  {/* Column 1: Specific Deliverables */}
                  <div className="dept-deliverables-col">
                    <h4 className="dept-subheading">Agreed Deliverables</h4>
                    <ul className="dept-deliverables-list">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="deliverable-item">
                          <CheckCircle2 size={16} className="deliverable-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Best Suited For & Engagement */}
                  <div className="dept-audience-col">
                    <h4 className="dept-subheading">Best Suited For</h4>
                    <p className="audience-desc">{service.targetAudience}</p>

                    <div className="scoping-notice-box">
                      <ShieldCheck size={18} className="scoping-icon" />
                      <p className="scoping-text">
                        Scope, milestone schedules, revision cycles, and deliverables are confirmed during discovery before billing begins.
                      </p>
                    </div>

                    <div className="dept-cta-action">
                      <Link 
                        to={`/contact?service=${service.id}`} 
                        className="btn-bronze w-full text-center"
                      >
                        <span>Request a Custom Quote</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoping & Feasibility Transparency Banner */}
      <section className="section transparency-section">
        <div className="container">
          <div className="transparency-card">
            <div className="transparency-content text-center">
              <span className="section-eyebrow">HONEST EXECUTION</span>
              <h3 className="transparency-title">Transparent Project Feasibility</h3>
              <p className="transparency-desc">
                We only promise deliverables we can reliably execute at the highest quality. Third-party software subscriptions, domain registrations, ad spends, and external API licenses are billed directly to your business to ensure you retain 100% intellectual property ownership.
              </p>
              <div className="transparency-actions">
                <Link to="/contact" className="btn-charcoal">
                  <span>Schedule a Project Discovery Call</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/#project-chatbar" className="btn-outline">
                  <span>Tell Us What You're Building</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
