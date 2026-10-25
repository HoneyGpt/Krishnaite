import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Shield, CornerDownLeft } from 'lucide-react';
import './ProjectChatbar.css';

const EXAMPLE_PROMPTS = [
  "Hi Krishnaite! I'm a computer science student and need a presentation for my project. My budget is ₹500–₹1,500, and I'd like it completed by Friday.",
  "I need a personal portfolio website within a budget of ₹2,500. I want it to showcase my projects, skills, and contact information.",
  "We are launching a D2C beverage brand and need 3 AI UGC video ads and social media hooks for Instagram campaigns.",
  "Need a clean landing page and branding for my local business. We have a modest budget and want to launch in 2 weeks."
];

const ProjectChatbar = ({ initialMessage = '', className = '' }) => {
  const [message, setMessage] = useState(initialMessage);
  const [replyEmail, setReplyEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [activePlaceholderIndex, setActivePlaceholderIndex] = useState(0);

  const handlePromptClick = (promptText) => {
    setMessage(promptText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setErrorMessage('Please type a few words about what you are looking to build.');
      setStatus('error');
      return;
    }

    if (!replyEmail.trim()) {
      setErrorMessage('Please provide an email address so our team can send your quotation.');
      setStatus('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyEmail)) {
      setErrorMessage('Please provide a valid email format.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message.trim(),
          replyEmail: replyEmail.trim(),
          source: 'Homepage Project Request Chatbar'
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(
          result.error || "We couldn't send your request right now. Please try again in a moment."
        );
      }
    } catch (err) {
      console.error('Chatbar submit error:', err);
      setStatus('error');
      setErrorMessage("We couldn't send your request right now. Please try again in a moment.");
    }
  };

  return (
    <div className={`project-chatbar-wrapper ${className}`} id="project-chatbar">
      <div className="chatbar-card">
        
        {/* Chatbar Header */}
        <div className="chatbar-header">
          <div className="chatbar-header-badge">
            <span className="chatbar-status-dot"></span>
            <span>HUMAN TEAM REVIEW • CUSTOM QUOTATIONS</span>
          </div>
          <h2 className="chatbar-title">Tell us what you're building.</h2>
          <p className="chatbar-subtitle">
            Describe your project in your own words. Share your requirements, budget, and timeline so we can understand what you need.
          </p>
          <p className="chatbar-pricing-note">
            “Every project is different. Tell us what you need, your budget, and your goals. We'll review your request and prepare a quotation tailored to your requirements.”
          </p>
        </div>

        {/* Success State */}
        {status === 'success' ? (
          <div className="chatbar-success-state">
            <CheckCircle2 size={48} className="success-icon" />
            <h3 className="success-title">Project Request Received</h3>
            <p className="success-body">
              Your project request has been sent to Krishnaite. Thank you for sharing your idea! Our team will review your message and respond to <strong>{replyEmail}</strong> with a tailored proposal.
            </p>
            <button
              type="button"
              className="btn-outline chatbar-reset-btn"
              onClick={() => {
                setStatus('idle');
                setMessage('');
                setReplyEmail('');
              }}
            >
              Submit Another Project Request
            </button>
          </div>
        ) : (
          /* Active Chatbar Form */
          <form className="chatbar-form" onSubmit={handleSubmit} noValidate>
            
            {/* Example Prompts Strip */}
            <div className="chatbar-examples-strip">
              <span className="examples-label">Example requests:</span>
              <div className="examples-chips">
                <button
                  type="button"
                  className="example-chip"
                  onClick={() => handlePromptClick(EXAMPLE_PROMPTS[0])}
                >
                  Student Presentation (₹500–₹1,500)
                </button>
                <button
                  type="button"
                  className="example-chip"
                  onClick={() => handlePromptClick(EXAMPLE_PROMPTS[1])}
                >
                  Personal Portfolio (₹2,500)
                </button>
                <button
                  type="button"
                  className="example-chip"
                  onClick={() => handlePromptClick(EXAMPLE_PROMPTS[2])}
                >
                  AI UGC Video Ads Suite
                </button>
                <button
                  type="button"
                  className="example-chip"
                  onClick={() => handlePromptClick(EXAMPLE_PROMPTS[3])}
                >
                  Startup Brand & Website
                </button>
              </div>
            </div>

            {/* Main Multiline Description Textarea */}
            <div className="chatbar-input-box">
              <label htmlFor="chatbar-message" className="sr-only">
                Describe your project, budget, and timeline
              </label>
              <textarea
                id="chatbar-message"
                className="chatbar-textarea"
                rows={4}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Hi Krishnaite! I'm looking for... (e.g. website, logo, AI video ads, mobile app, student project). My target budget is ₹... and I'd like it by..."
                disabled={status === 'submitting'}
              ></textarea>
            </div>

            {/* Bottom Controls Row: Email Input + Submit Action */}
            <div className="chatbar-controls-row">
              <div className="chatbar-email-field">
                <label htmlFor="chatbar-email" className="sr-only">Your Reply Email</label>
                <input
                  type="email"
                  id="chatbar-email"
                  className="chatbar-email-input"
                  value={replyEmail}
                  onChange={(e) => {
                    setReplyEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Your reply email (e.g. name@example.com)"
                  disabled={status === 'submitting'}
                />
              </div>

              <button
                type="submit"
                className="btn-bronze chatbar-submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span>Sending your request...</span>
                ) : (
                  <>
                    <span>Send Project Request</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </div>

            {/* Error Message Alert */}
            {status === 'error' && (
              <div className="chatbar-error-banner" role="alert">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Subtle Privacy & Scope Note */}
            <div className="chatbar-privacy-note">
              <Shield size={14} className="privacy-icon" />
              <span>
                Your request is delivered directly to the Krishnaite human team. We never share your contact details. Custom quotes are prepared without any obligation.
              </span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default ProjectChatbar;
