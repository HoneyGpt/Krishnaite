import React, { useState } from 'react';
import { Network, ShieldCheck, Award, Calendar, Users, Briefcase, ChevronRight, Check } from 'lucide-react';
import './Enterprise.css';

const Enterprise = () => {
    const [activeNode, setActiveNode] = useState('core');
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        partnershipType: 'talent-validation',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const nodes = {
        core: {
            title: "Krishnaite Core",
            subtitle: "Ethical & Strategic Integration",
            desc: "The coordinating hub that aligns timeless philosophical frameworks with modern corporate governance. We translate complex ethical dilemmas into clear, actionable structural compliance protocols."
        },
        mentozy: {
            title: "Mentozy Platform",
            subtitle: "Ecosystem Backbone & Scale Engine",
            desc: "Our high-scale learning and hackathon engine. Hosting over 1,000+ elite global developers and building robust, verifiable evidence of technical excellence, peer recognition, and technical leadership."
        },
        mobility: {
            title: "Global Mobility Hub",
            subtitle: "O-1 and EB-1 Credentialing",
            desc: "A high-ticket talent positioning pipeline. We work with leading immigration firms to secure critical leadership, mentoring, and judging roles required to build robust, successful extraordinary-ability petitions."
        },
        csr: {
            title: "Corporate CSR Integration",
            subtitle: "High-Impact Developer Initiatives",
            desc: "Custom corporate social responsibility campaigns. We enable enterprises to sponsor technical hackathons and talent initiatives that drive massive global community impact while verifying developer credentials."
        },
        compliance: {
            title: "Strategic Compliance",
            subtitle: "Founders & Fast-Growing Systems",
            desc: "Tailored ethical compliance and governance structures for scaling startups. We ensure that rapid development is balanced with strategic integrity, preventing regulatory and cultural failures."
        }
    };

    const handleNodeHover = (nodeKey) => {
        setActiveNode(nodeKey);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const selectDate = (dayOffset) => {
        const date = new Date();
        date.setDate(date.getDate() + dayOffset);
        // Avoid weekends
        if (date.getDay() === 0) date.setDate(date.getDate() + 1);
        if (date.getDay() === 6) date.setDate(date.getDate() + 2);
        
        const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        setBookingDate(formattedDate);
        setBookingTime(''); // reset time when date changes
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        if (!bookingDate || !bookingTime) {
            alert('Please select a preferred briefing date and time from the calendar.');
            return;
        }

        setStatus('loading');
        try {
            // Using the same local proxy or production endpoint configured via Vite proxy
            const response = await fetch('/api/resend/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer re_eB84JVvV_2AtuSaXc5e3Pw1ja3gp2n9Ee`
                },
                body: JSON.stringify({
                    from: 'Acme <onboarding@resend.dev>',
                    to: ['hello@krishnaite.dev'],
                    subject: `B2B Strategic Briefing Request from ${formData.company}`,
                    html: `
                        <h2>New B2B Partnership & Strategic Briefing Request</h2>
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>Work Email:</strong> ${formData.email}</p>
                        <p><strong>Company/Firm:</strong> ${formData.company}</p>
                        <p><strong>Partnership Type:</strong> ${formData.partnershipType}</p>
                        <p><strong>Requested Meeting:</strong> ${bookingDate} at ${bookingTime}</p>
                        <p><strong>Additional Details:</strong></p>
                        <p>${formData.message || 'No additional details provided.'}</p>
                    `
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', partnershipType: 'talent-validation', message: '' });
                setBookingDate('');
                setBookingTime('');
            } else {
                const errorData = await response.json();
                console.error("Resend B2B Error:", errorData);
                setStatus('error');
            }
        } catch (error) {
            console.error("Fetch B2B Error:", error);
            setStatus('error');
        }
    };

    // Generate dates for the next 5 business days
    const getNextBusinessDays = () => {
        const days = [];
        let current = new Date();
        while (days.length < 5) {
            current.setDate(current.getDate() + 1);
            if (current.getDay() !== 0 && current.getDay() !== 6) {
                days.push({
                    dayName: current.toLocaleDateString('en-US', { weekday: 'short' }),
                    dayNum: current.getDate(),
                    month: current.toLocaleDateString('en-US', { month: 'short' }),
                    dateStr: current.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
                    offset: current.getDate() - new Date().getDate()
                });
            }
        }
        return days;
    };

    const timeSlots = ["10:00 AM EST", "11:30 AM EST", "02:00 PM EST", "03:30 PM EST", "05:00 PM EST"];

    return (
        <div className="enterprise-page-container page-transition-enter-active">
            
            {/* Panoramic Hero Section */}
            <section className="enterprise-hero wrapper-layout">
                {/* SVG Vaikunta Cosmic Network Graphic */}
                <div className="cosmic-bg">
                    <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        {/* Constellation connection lines */}
                        <line x1="720" y1="250" x2="480" y2="120" stroke="var(--charcoal)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" className={activeNode === 'mentozy' ? 'line-active' : ''} />
                        <line x1="720" y1="250" x2="960" y2="120" stroke="var(--charcoal)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" className={activeNode === 'mobility' ? 'line-active' : ''} />
                        <line x1="720" y1="250" x2="380" y2="350" stroke="var(--charcoal)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" className={activeNode === 'csr' ? 'line-active' : ''} />
                        <line x1="720" y1="250" x2="1060" y2="350" stroke="var(--charcoal)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" className={activeNode === 'compliance' ? 'line-active' : ''} />
                        
                        <line x1="480" y1="120" x2="960" y2="120" stroke="var(--charcoal)" strokeWidth="0.8" opacity="0.3" />
                        <line x1="380" y1="350" x2="1060" y2="350" stroke="var(--charcoal)" strokeWidth="0.8" opacity="0.3" />
                        <line x1="480" y1="120" x2="380" y2="350" stroke="var(--charcoal)" strokeWidth="0.8" opacity="0.3" />
                        <line x1="960" y1="120" x2="1060" y2="350" stroke="var(--charcoal)" strokeWidth="0.8" opacity="0.3" />

                        {/* Concentric Lotus Circles */}
                        <circle cx="720" cy="250" r="100" fill="none" stroke="var(--soft-ochre)" strokeWidth="1" strokeDasharray="2 8" opacity="0.5" className="spinning-circle-slow" />
                        <circle cx="720" cy="250" r="200" fill="none" stroke="var(--soft-ochre)" strokeWidth="0.5" strokeDasharray="4 12" opacity="0.3" className="spinning-circle-fast" />

                        {/* Interactive Nodes */}
                        {/* Core (Center) */}
                        <g className="network-node" onMouseEnter={() => handleNodeHover('core')} style={{ cursor: 'pointer' }}>
                            <circle cx="720" cy="250" r="28" fill="var(--warm-sand)" stroke="var(--charcoal)" strokeWidth="2.5" />
                            <circle cx="720" cy="250" r="20" fill="none" stroke="var(--soft-ochre)" strokeWidth="1.5" className="pulsing-circle" />
                            <circle cx="720" cy="250" r="6" fill="var(--charcoal)" />
                            <text x="720" y="295" textAnchor="middle" className="node-text core-text">KRISHNAITE CORE</text>
                        </g>

                        {/* Mentozy (Top Left) */}
                        <g className={`network-node ${activeNode === 'mentozy' ? 'node-highlighted' : ''}`} onMouseEnter={() => handleNodeHover('mentozy')} style={{ cursor: 'pointer' }}>
                            <circle cx="480" cy="120" r="22" fill="var(--warm-sand)" stroke="var(--charcoal)" strokeWidth="2" />
                            <circle cx="480" cy="120" r="16" fill="none" stroke="var(--soft-ochre)" strokeWidth="1" className={activeNode === 'mentozy' ? 'pulsing-circle' : ''} />
                            <circle cx="480" cy="120" r="4" fill="var(--charcoal)" />
                            <text x="480" y="75" textAnchor="middle" className="node-text">MENTOZY PLATFORM</text>
                        </g>

                        {/* Global Mobility (Top Right) */}
                        <g className={`network-node ${activeNode === 'mobility' ? 'node-highlighted' : ''}`} onMouseEnter={() => handleNodeHover('mobility')} style={{ cursor: 'pointer' }}>
                            <circle cx="960" cy="120" r="22" fill="var(--warm-sand)" stroke="var(--charcoal)" strokeWidth="2" />
                            <circle cx="960" cy="120" r="16" fill="none" stroke="var(--soft-ochre)" strokeWidth="1" className={activeNode === 'mobility' ? 'pulsing-circle' : ''} />
                            <circle cx="960" cy="120" r="4" fill="var(--charcoal)" />
                            <text x="960" y="75" textAnchor="middle" className="node-text">GLOBAL MOBILITY</text>
                        </g>

                        {/* Corporate CSR (Bottom Left) */}
                        <g className={`network-node ${activeNode === 'csr' ? 'node-highlighted' : ''}`} onMouseEnter={() => handleNodeHover('csr')} style={{ cursor: 'pointer' }}>
                            <circle cx="380" cy="350" r="22" fill="var(--warm-sand)" stroke="var(--charcoal)" strokeWidth="2" />
                            <circle cx="380" cy="350" r="16" fill="none" stroke="var(--soft-ochre)" strokeWidth="1" className={activeNode === 'csr' ? 'pulsing-circle' : ''} />
                            <circle cx="380" cy="350" r="4" fill="var(--charcoal)" />
                            <text x="380" y="395" textAnchor="middle" className="node-text">CORPORATE CSR</text>
                        </g>

                        {/* Compliance (Bottom Right) */}
                        <g className={`network-node ${activeNode === 'compliance' ? 'node-highlighted' : ''}`} onMouseEnter={() => handleNodeHover('compliance')} style={{ cursor: 'pointer' }}>
                            <circle cx="1060" cy="350" r="22" fill="var(--warm-sand)" stroke="var(--charcoal)" strokeWidth="2" />
                            <circle cx="1060" cy="350" r="16" fill="none" stroke="var(--soft-ochre)" strokeWidth="1" className={activeNode === 'compliance' ? 'pulsing-circle' : ''} />
                            <circle cx="1060" cy="350" r="4" fill="var(--charcoal)" />
                            <text x="1060" y="395" textAnchor="middle" className="node-text">STRATEGIC GOVERNANCE</text>
                        </g>
                    </svg>
                </div>

                <div className="container hero-split">
                    <div className="hero-text-area">
                        <p className="hero-pre-title">ENTERPRISE LAYER</p>
                        <h1 className="hero-title font-serif">
                            Strategic Talent<br />
                            Validation &<br />
                            Ecosystem Integration.
                        </h1>
                        <p className="hero-description subtext mb-6">
                            Krishnaite provides premium B2B infrastructure for global mobility, corporate CSR, and elite technical talent credentialing.
                        </p>
                        <div className="hero-buttons">
                            <a href="#briefing-form" className="btn-retro">REQUEST BRIEFING</a>
                            <a href="#talent-verification" className="btn-secondary-custom">EXPLORE INFRASTRUCTURE</a>
                        </div>
                    </div>

                    <div className="hero-interactive-panel sketch-card">
                        <div className="panel-node-indicator">
                            <Network size={20} className="indicator-icon" />
                            <span>INTERACTIVE CONSTELLATION MAP</span>
                        </div>
                        <h3 className="panel-node-title">{nodes[activeNode].title}</h3>
                        <p className="panel-node-subtitle">{nodes[activeNode].subtitle}</p>
                        <div className="divider-mini"></div>
                        <p className="panel-node-desc">{nodes[activeNode].desc}</p>
                        <p className="panel-hover-hint">Hover over nodes in the background network to inspect ecosystem pillars.</p>
                    </div>
                </div>
            </section>

            {/* Global Talent Verification Section */}
            <section id="talent-verification" className="talent-verification-section container section">
                <div className="text-center mb-8">
                    <h2 className="section-title">Global Talent Verification</h2>
                    <p className="page-subtext mx-auto max-w-700">
                        Rigorous objective criteria demonstrating peer recognition and industry-standard technical leadership.
                    </p>
                </div>

                <div className="talent-grid grid-2-col">
                    <div className="talent-copy-area">
                        <div className="verification-card soft-card">
                            <h3 className="mb-4">Verification Pathways for O-1 and EB-1 Candidates</h3>
                            <p className="mb-4 leading-relaxed">
                                Through our flagship technical platform, <strong>Mentozy</strong>, Krishnaite provides verifiable, high-impact credentialing pipelines for elite global talent. We partner with top-tier immigration firms and enterprise HR to secure guaranteed judging, mentorship, and leadership roles for O-1 and EB-1 candidates.
                            </p>
                            <p className="leading-relaxed">
                                Rather than trying to artificially construct evidence, our B2B ecosystem embeds extraordinary talent directly into ongoing technical governance, allowing candidates to satisfy strict regulatory requirements through objective peer recognition and actual technical authority.
                            </p>
                            
                            <ul className="pathway-features mt-6">
                                <li>
                                    <ShieldCheck size={18} className="feature-icon" />
                                    <span><strong>Guaranteed Judging Panels:</strong> Verification of peer review capability.</span>
                                </li>
                                <li>
                                    <Award size={18} className="feature-icon" />
                                    <span><strong>Verifiable Mentorship:</strong> Direct records of ecosystem leadership and evaluation.</span>
                                </li>
                                <li>
                                    <Users size={18} className="feature-icon" />
                                    <span><strong>Elite Credentialing Pipelines:</strong> Concrete proof of extraordinary-ability criteria.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="talent-metrics-area">
                        <div className="metrics-outer-card sketch-card">
                            <h3 className="mb-4 text-center">Ecosystem Scale & Credibility</h3>
                            <p className="metrics-intro text-center mb-6">
                                Proof of scale metrics proving robust ecosystem reach to support candidates' claims of leadership.
                            </p>
                            
                            <div className="metrics-container-grid">
                                <div className="metric-box text-center">
                                    <div className="metric-num">1,000+</div>
                                    <div className="metric-lbl">Active Developers & Technical Innovators</div>
                                </div>
                                <div className="metric-box text-center">
                                    <div className="metric-num">Dev Delight</div>
                                    <div className="metric-lbl">Premier Technical Hackathon Hosted on Unstop</div>
                                </div>
                                <div className="metric-box text-center">
                                    <div className="metric-num">100%</div>
                                    <div className="metric-lbl">Verifiable Blockchain & System Ledgers</div>
                                </div>
                                <div className="metric-box text-center">
                                    <div className="metric-num">Alma</div>
                                    <div className="metric-lbl">Partnering with Leading Global Mobility Agencies</div>
                                </div>
                            </div>

                            <div className="divider-mini" style={{ margin: '2rem 0' }}></div>
                            <div className="hackathon-proof text-center">
                                <p className="mb-2"><strong>Need Scale for Your Petitions?</strong></p>
                                <p className="subtext" style={{ fontSize: '0.9rem' }}>
                                    Immigration adjudicators demand proof of massive industry reach. Our ongoing Dev Delight Hackathon validates candidate impact over thousands of community members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Talent Verification Lifecycle Flow */}
            <section className="lifecycle-section container section">
                <div className="text-center mb-8">
                    <h2 className="section-title">Credentialing Lifecycle</h2>
                    <p className="page-subtext mx-auto max-w-700">
                        How we systematically transition elite candidates into validated ecosystem leaders.
                    </p>
                </div>

                <div className="lifecycle-flow-grid">
                    {[
                        { step: "01", name: "Ecosystem Onboarding", desc: "Candidate profiles are integrated into Mentozy. We analyze their specific technical expertise to target the highest-impact criteria." },
                        { step: "02", name: "Strategic Leadership", desc: "Candidates are appointed as formal judges, expert mentors, or steering committee leads in high-scale hackathons." },
                        { step: "03", name: "Objective Audit & Ledger", desc: "Every assessment, review, and session is logged in detail, creating an unshakeable objective audit trail." },
                        { step: "04", name: "Validation Dossier", desc: "Krishnaite's advisory board produces a formal B2B credentialing package, letter of recommendation, and evaluation proofs." }
                    ].map((item, idx) => (
                        <div key={idx} className="lifecycle-card soft-card">
                            <div className="lifecycle-step">{item.step}</div>
                            <h4>{item.name}</h4>
                            <p className="subtext">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Strategic Briefing Scheduler Section */}
            <section id="briefing-form" className="briefing-section container section">
                <div className="briefing-grid grid-2-col">
                    
                    <div className="briefing-pitch pr-8">
                        <div className="pitch-tag">HIGH-LEVEL PARTNERSHIPS</div>
                        <h2 className="section-title mb-4">Request a Strategic Briefing</h2>
                        <p className="page-subtext mb-6">
                            Secure your firm's custom pipeline. Partner with Krishnaite to secure guaranteed extraordinary-ability positions for your clients or explore enterprise CSR sponsorship.
                        </p>
                        
                        <div className="partnership-benefits">
                            <div className="benefit-item mb-4">
                                <Check size={18} className="benefit-icon" />
                                <span>Dedicated accounts for immigration firms (Alma, etc.)</span>
                            </div>
                            <div className="benefit-item mb-4">
                                <Check size={18} className="benefit-icon" />
                                <span>Tailored evaluation rubrics for specific technical fields</span>
                            </div>
                            <div className="benefit-item mb-4">
                                <Check size={18} className="benefit-icon" />
                                <span>Rapid deployment pipelines for imminent O-1 submissions</span>
                            </div>
                        </div>

                        {/* Simulated/Interactive Calendar Component */}
                        <div className="interactive-calendar sketch-card mt-6">
                            <div className="calendar-header mb-3">
                                <Calendar size={18} className="calendar-icon" />
                                <span>SELECT PREFERRED BRIEFING TIME</span>
                            </div>
                            
                            <p className="calendar-subtitle subtext mb-4">
                                Click an available date to view slots:
                            </p>

                            <div className="calendar-days-grid mb-4">
                                {getNextBusinessDays().map((day, idx) => {
                                    const isSelected = bookingDate.includes(day.dayNum);
                                    return (
                                        <button 
                                            key={idx} 
                                            type="button"
                                            className={`calendar-day-btn ${isSelected ? 'day-selected' : ''}`}
                                            onClick={() => selectDate(day.offset)}
                                        >
                                            <span className="day-name">{day.dayName}</span>
                                            <span className="day-num">{day.dayNum}</span>
                                            <span className="day-month">{day.month}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {bookingDate && (
                                <div className="calendar-slots-section">
                                    <p className="slots-title subtext mb-2">Available Slots for <strong>{bookingDate}</strong>:</p>
                                    <div className="slots-grid">
                                        {timeSlots.map((time, idx) => {
                                            const isSelected = bookingTime === time;
                                            return (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    className={`slot-btn ${isSelected ? 'slot-selected' : ''}`}
                                                    onClick={() => setBookingTime(time)}
                                                >
                                                    {time}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {!bookingDate && (
                                <div className="calendar-select-hint text-center py-4">
                                    <p className="subtext italic">Select a date above to check current availability.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="briefing-form-wrapper soft-card">
                        <h3 className="mb-4 text-center">B2B Partnership Intake</h3>
                        <p className="form-intro text-center subtext mb-6">
                            Complete the details below to initialize direct priority communication.
                        </p>

                        <form className="briefing-form" onSubmit={handleBookingSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Lead Partner / Representative Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={formData.name} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g. Sarah Sterling" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Work Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={formData.email} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g. s.sterling@alma-mobility.com" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company / Agency Name</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    value={formData.company} 
                                    onChange={handleInputChange} 
                                    placeholder="e.g. Alma Mobility" 
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="partnershipType">Partnership Focus</label>
                                <select 
                                    id="partnershipType" 
                                    value={formData.partnershipType} 
                                    onChange={handleInputChange}
                                >
                                    <option value="talent-validation">O-1 / EB-1 Candidate Credentialing</option>
                                    <option value="hackathon-csr">Hackathon CSR & Developer Sponsorship</option>
                                    <option value="enterprise-advisory">Executive Ethical Governance Advisory</option>
                                    <option value="ecosystem-integration">Ecosystem Integration & Mentozy API</option>
                                </select>
                            </div>

                            {bookingDate && bookingTime && (
                                <div className="selected-booking-alert mb-4">
                                    <span className="alert-lbl">Schedule Request:</span>
                                    <strong className="alert-val">{bookingDate} @ {bookingTime}</strong>
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="message">Strategic Scope or Specific Requirements (Optional)</label>
                                <textarea
                                    id="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Briefly describe the candidate volume, urgent visa deadlines, or CSR initiatives..."
                                ></textarea>
                            </div>

                            {status === 'success' && (
                                <div className="status-message success-message">
                                    <Check size={18} />
                                    <span>Briefing requested successfully! Our team will reach out within 2 hours.</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="status-message error-message">
                                    <span>Unable to send briefing request. Please check the console or contact hello@krishnaite.dev.</span>
                                </div>
                            )}

                            <div className="form-submit mt-6">
                                <button 
                                    type="submit" 
                                    className="btn-primary w-full" 
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Scheduling...' : 'Confirm Request & Reserve Slot'}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
            
        </div>
    );
};

export default Enterprise;
