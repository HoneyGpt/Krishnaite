import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Linkedin, Clock, CheckCircle2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data/servicesData';
import './Contact.css';

const Contact = () => {
  const [searchParams] = useSearchParams();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    serviceRequired: 'websites-webapps',
    estimatedBudget: 'Flexible / Disclose in discovery',
    timeline: 'Standard (3-4 weeks)',
    projectDescription: '',
    referenceLinks: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-fill from URL query parameters (e.g. /contact?service=ai-creative)
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const referenceParam = searchParams.get('reference');

    if (serviceParam) {
      const foundSvc = SERVICES.find(s => s.id === serviceParam);
      if (foundSvc) {
        setFormData(prev => ({
          ...prev,
          serviceRequired: foundSvc.id,
          projectDescription: prev.projectDescription || `Inquiring about ${foundSvc.name}. `
        }));
      } else if (serviceParam === 'custom-quote') {
        setFormData(prev => ({
          ...prev,
          serviceRequired: 'bespoke-custom',
          projectDescription: prev.projectDescription || 'Requesting a custom quote for our upcoming project. '
        }));
      }
    } else if (referenceParam) {
      setFormData(prev => ({
        ...prev,
        projectDescription: prev.projectDescription || `Referencing portfolio work: ${referenceParam}. Interested in a similar scope. `
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear validation error on change
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide a brief project summary (at least 15 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // Dispatched strictly to the server-side endpoint (no API keys on client)
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          businessName: formData.businessName,
          email: formData.email,
          service: formData.serviceRequired,
          budget: formData.estimatedBudget,
          timeline: formData.timeline,
          message: formData.projectDescription,
          referenceLinks: formData.referenceLinks,
          source: 'Comprehensive Project Contact Form'
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.ok) {
        setStatus('success');
      } else {
        console.error("Enquiry Submission Error:", result);
        setStatus('error');
        setErrorMessage(result.error || 'Unable to submit enquiry. Please email hello@krishnaite.dev directly.');
      }
    } catch (err) {
      console.error("Network Fetch Error:", err);
      setStatus('error');
      setErrorMessage('Network error. Please reach out to hello@krishnaite.dev directly.');
    }
  };

  return (
    <div className="contact-agency-page">
      
      {/* Contact Hero Header */}
      <section className="contact-hero-section">
        <div className="container text-center">
          <span className="section-eyebrow">START A PROJECT</span>
          <h1 className="section-title">
            Let's Build Something<br />
            Distinctive.
          </h1>
          <p className="section-subtitle">
            Tell us about your brand, functional requirements, and target timeline. We review every brief individually and prepare a tailored quotation.
          </p>

          <div className="contact-pricing-pill agency-card" style={{ maxWidth: '780px', margin: '2rem auto 0', padding: '1.25rem 2rem' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--charcoal)', fontSize: '0.95rem', margin: 0 }}>
              “Every project is different. Tell us what you need, your budget, and your goals. We'll review your request and prepare a quotation tailored to your requirements.”
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Intake Form */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left Column: Direct Info & Next Steps */}
            <div className="contact-info-panel">
              <div className="agency-card info-card">
                <span className="card-micro-tag">WHAT HAPPENS NEXT</span>
                <h3 className="info-card-title">Our Discovery Workflow</h3>

                <div className="steps-flow">
                  <div className="flow-step">
                    <span className="flow-num">1</span>
                    <div>
                      <h5>Review Within 24 Hours</h5>
                      <p>Our studio examines your technical and creative requirements against current sprint bandwidth.</p>
                    </div>
                  </div>

                  <div className="flow-step">
                    <span className="flow-num">2</span>
                    <div>
                      <h5>Discovery Discussion</h5>
                      <p>A focused discovery exchange to clarify deliverables, integrations, budget expectations, and timeline.</p>
                    </div>
                  </div>

                  <div className="flow-step">
                    <span className="flow-num">3</span>
                    <div>
                      <h5>Tailored Quotation & Proposal</h5>
                      <p>You receive a proposal with defined deliverables, milestone dates, revision boundaries, and honest scoping.</p>
                    </div>
                  </div>
                </div>

                <div className="direct-channels-box">
                  <span className="channels-title">DIRECT CHANNELS:</span>
                  <div className="channel-item">
                    <Mail size={16} className="channel-icon" />
                    <a href="mailto:hello@krishnaite.dev" className="channel-link">hello@krishnaite.dev</a>
                  </div>
                  <div className="channel-item">
                    <Linkedin size={16} className="channel-icon" />
                    <a href="https://www.linkedin.com/company/krishnaite" target="_blank" rel="noopener noreferrer" className="channel-link">
                      LinkedIn / Krishnaite
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Enquiry Form */}
            <div className="contact-form-panel">
              <div className="agency-card form-card">
                
                {status === 'success' ? (
                  <div className="success-state-container text-center">
                    <CheckCircle2 size={54} className="success-state-icon" />
                    <h3 className="success-state-title">Project Enquiry Received</h3>
                    <p className="success-state-desc">
                      Thank you for sharing your brief, <strong>{formData.fullName}</strong>. Our team has received your submission and will review your requirements within 24 hours.
                    </p>
                    <p className="success-state-sub">
                      A copy of your inquiry has been routed to <code>hello@krishnaite.dev</code>.
                    </p>
                    <button
                      type="button"
                      className="btn-outline mt-4"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          fullName: '',
                          businessName: '',
                          email: '',
                          serviceRequired: 'websites-webapps',
                          estimatedBudget: 'Flexible / Disclose in discovery',
                          timeline: 'Standard (3-4 weeks)',
                          projectDescription: '',
                          referenceLinks: ''
                        });
                      }}
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form className="project-intake-form" onSubmit={handleSubmit} noValidate>
                    <h3 className="form-card-title">Project Scope Intake</h3>
                    <p className="form-card-subtitle">All submissions are kept strictly confidential under mutual NDA standards.</p>

                    {/* Name & Business */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="fullName">Full Name <span className="req">*</span></label>
                        <input
                          type="text"
                          id="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Maya Sharma"
                          className={errors.fullName ? 'input-error' : ''}
                          required
                        />
                        {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="businessName">Business / Brand Name <span className="opt">(Optional)</span></label>
                        <input
                          type="text"
                          id="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="e.g. Acme Studio"
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div className="form-group">
                      <label htmlFor="email">Work Email <span className="req">*</span></label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. maya@acme.com"
                        className={errors.email ? 'input-error' : ''}
                        required
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    {/* Service Required */}
                    <div className="form-group">
                      <label htmlFor="serviceRequired">Primary Service Needed <span className="req">*</span></label>
                      <select
                        id="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                      >
                        <option value="websites-webapps">Websites & Web Applications</option>
                        <option value="ai-creative">AI Creative & Advertising</option>
                        <option value="branding-design">Branding & Graphic Design</option>
                        <option value="ui-ux-apps">UI/UX & App Development</option>
                        <option value="marketing-content">Digital Marketing & Content</option>
                        <option value="software-ai">Software, AI & Automation</option>
                        <option value="bespoke-custom">Bespoke / Multi-Discipline Scope</option>
                        <option value="student-portfolio">Student / Personal Project</option>
                      </select>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="estimatedBudget">Your Comfortable Budget (Guideline only)</label>
                        <input
                          type="text"
                          id="estimatedBudget"
                          value={formData.estimatedBudget}
                          onChange={handleChange}
                          placeholder="e.g. ₹1,000, ₹5,000, ₹25,000, or Flexible"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="timeline">Desired Timeline</label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                        >
                          <option value="Urgent (1-2 weeks)">Urgent (Within 1-2 weeks)</option>
                          <option value="Standard (3-4 weeks)">Standard (Within 3-4 weeks)</option>
                          <option value="Flexible (1-3 months)">Flexible (1-3 months)</option>
                          <option value="Planning phase">Exploratory / Planning phase</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="form-group">
                      <label htmlFor="projectDescription">Project Summary & Core Objectives <span className="req">*</span></label>
                      <textarea
                        id="projectDescription"
                        rows="4"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        placeholder="Briefly describe what you need (e.g., student presentation, personal portfolio, brand logo, web application, AI ads), your goals, and any specific requirements..."
                        className={errors.projectDescription ? 'input-error' : ''}
                        required
                      ></textarea>
                      {errors.projectDescription && <span className="error-text">{errors.projectDescription}</span>}
                    </div>

                    {/* Reference Links */}
                    <div className="form-group">
                      <label htmlFor="referenceLinks">Reference Links or Inspiration <span className="opt">(Optional)</span></label>
                      <input
                        type="text"
                        id="referenceLinks"
                        value={formData.referenceLinks}
                        onChange={handleChange}
                        placeholder="Links to current website, competitors, or Figma references..."
                      />
                    </div>

                    {/* Error Banner */}
                    {status === 'error' && (
                      <div className="form-alert error-alert" role="alert">
                        <AlertCircle size={18} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="form-actions mt-4">
                      <button
                        type="submit"
                        className="btn-bronze w-full text-center"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          <span>Transmitting Project Brief...</span>
                        ) : (
                          <>
                            <span>Request Custom Quotation</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
