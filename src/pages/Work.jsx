import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Layers, CheckCircle2, X } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import './Work.css';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="work-page">
      
      {/* Work Hero Header */}
      <section className="work-hero-section">
        <div className="container text-center">
          <span className="section-eyebrow">PORTFOLIO & CASE STUDIES</span>
          <h1 className="section-title">
            Crafted with Purpose.<br />
            Built for Impact.
          </h1>
          <p className="section-subtitle">
            An honest survey of digital platforms, brand identity systems, AI commercial campaigns, and technical infrastructure built by Krishnaite.
          </p>

          {/* Category Filter Pills */}
          <div className="work-filter-bar">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`work-filter-btn ${activeCategory === cat ? 'work-filter-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section work-grid-section">
        <div className="container">
          
          {filteredProjects.length === 0 ? (
            <div className="work-empty-state text-center agency-card">
              <Layers size={40} className="empty-icon" />
              <h3 className="empty-title">No projects currently listed in this category</h3>
              <p className="empty-desc">
                We only showcase verified client deliverables and tested concept demonstrations. Need custom work in this discipline?
              </p>
              <Link to="/contact" className="btn-bronze mt-4">
                <span>Enquire About a Custom Project</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          ) : (
            <div className="portfolio-cards-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="agency-card portfolio-card">
                  
                  {/* Top Badges */}
                  <div className="portfolio-badge-row">
                    <span className={project.type === 'Genuine Project' ? 'badge-bronze' : 'badge-sage'}>
                      {project.type}
                    </span>
                    <span className="portfolio-cat-pill">{project.categoryLabel}</span>
                  </div>

                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-summary">{project.summary}</p>

                  <div className="portfolio-deliverables-box">
                    <span className="deliverables-micro-tag">KEY DELIVERABLES:</span>
                    <div className="deliverables-chips">
                      {project.deliverables.map((item, idx) => (
                        <span key={idx} className="deliverable-chip">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="portfolio-card-footer">
                    <span className="portfolio-client-info">Client / Source: {project.client}</span>
                    <div className="portfolio-btn-group">
                      <button
                        type="button"
                        className="btn-text-arrow"
                        onClick={() => setSelectedProject(project)}
                      >
                        <span>Case Details</span>
                        <ArrowRight size={13} />
                      </button>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-external-link"
                          aria-label={`Open ${project.title} external link`}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Case Study Modal Drawer */}
      {selectedProject && (
        <div className="case-modal-overlay" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true">
          <div className="case-modal-content agency-card" onClick={e => e.stopPropagation()}>
            <button 
              type="button" 
              className="case-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-badge-row">
              <span className={selectedProject.type === 'Genuine Project' ? 'badge-bronze' : 'badge-sage'}>
                {selectedProject.type}
              </span>
              <span className="portfolio-cat-pill">{selectedProject.categoryLabel}</span>
            </div>

            <h2 className="modal-project-title">{selectedProject.title}</h2>
            <p className="modal-client-meta">Entity: <strong>{selectedProject.client}</strong></p>

            <div className="modal-divider"></div>

            <h4 className="modal-section-heading">Project Overview & Approach</h4>
            <p className="modal-body-desc">{selectedProject.description}</p>

            <h4 className="modal-section-heading" style={{ marginTop: '1.5rem' }}>Full Deliverables Package</h4>
            <ul className="modal-deliverables-list">
              {selectedProject.deliverables.map((del, i) => (
                <li key={i}>
                  <CheckCircle2 size={15} className="deliverable-check" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>

            <div className="modal-actions-bar">
              <Link
                to={`/contact?reference=${selectedProject.id}`}
                className="btn-bronze"
                onClick={() => setSelectedProject(null)}
              >
                <span>Request Similar Project</span>
                <ArrowRight size={15} />
              </Link>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="section work-cta-strip">
        <div className="container text-center">
          <span className="section-eyebrow">YOUR VISION NEXT</span>
          <h2 className="section-title">Ready to Create Something Exceptional?</h2>
          <p className="section-subtitle">
            Let's discuss how our multidisciplinary team can build your brand, digital experience, or campaign.
          </p>
          <Link to="/contact" className="btn-bronze">
            <span>Start a Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Work;
