import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Scale, Network, CheckCircle2 } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container page-transition-enter-active">
            {/* Hero Section */}
            <section className="hero-section wrapper-layout">
                {/* SVG Clouds Background */}
                <div className="hero-clouds">
                    <svg viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 150 120 Q 180 80 230 110 Q 280 80 320 120 Q 350 150 320 170 L 150 170 Q 120 150 150 120 Z" fill="rgba(215, 205, 185, 0.4)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M 450 180 Q 480 150 520 170 Q 560 140 600 170 Q 640 160 660 190 L 450 190 Q 420 180 450 180 Z" fill="rgba(215, 205, 185, 0.3)" stroke="var(--charcoal)" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M 50 220 Q 70 200 100 210 Q 130 180 170 210 Q 190 230 170 240 L 50 240 Z" fill="rgba(215, 205, 185, 0.2)" stroke="var(--charcoal)" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M 680 110 Q 700 80 740 100 Q 770 90 790 120 L 680 120 Z" fill="rgba(215, 205, 185, 0.3)" stroke="var(--charcoal)" strokeWidth="1" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="container hero-split">
                    <div className="hero-text-area">
                        <p className="hero-pre-title">STRATEGIC WISDOM</p>
                        <h1 className="hero-title">
                            SOLVE WITH<br />
                            STRATEGY.<br />
                            ACT WITH<br />
                            PURPOSE.
                        </h1>
                        <div className="hero-buttons">
                            <Link to="/knowledge" className="btn-retro">EXPLORE SOLUTIONS</Link>
                        </div>
                    </div>
                    <div className="hero-image-area">
                        <img src="/hero_ship.png" alt="Strategic Navigation" className="hero-illustration-img" />
                    </div>
                </div>

                {/* Ocean Waves SVG Background */}
                <div className="hero-waves">
                    <svg viewBox="0 0 1440 300" preserveAspectRatio="none">
                        {/* Background shape */}
                        <path d="M0,200 C300,300 600,100 900,200 C1100,260 1300,200 1440,150 L1440,300 L0,300 Z" fill="rgba(235, 230, 218, 0.4)" stroke="var(--charcoal)" strokeWidth="2" />
                        <path d="M0,150 C400,100 700,250 1000,150 C1200,80 1350,150 1440,200 L1440,300 L0,300 Z" fill="rgba(240, 236, 225, 0.5)" stroke="var(--charcoal)" strokeWidth="2" />

                        {/* Front lines */}
                        <path d="M0,250 C250,150 500,350 800,200 C1100,50 1300,250 1440,180 L1440,300 L0,300 Z" fill="rgba(248, 244, 236, 0.8)" stroke="var(--charcoal)" strokeWidth="2" />
                        <path d="M0,100 C300,200 600,50 1000,180 C1200,250 1350,100 1440,150 L1440,300 L0,300 Z" fill="transparent" stroke="var(--charcoal)" strokeWidth="2" />
                        <path d="M0,280 C200,220 400,320 700,260 C900,220 1100,280 1440,240 L1440,300 L0,300 Z" fill="rgba(248, 244, 236, 1)" stroke="var(--charcoal)" strokeWidth="2" />
                    </svg>
                </div>
            </section>

            {/* Subtext moved slightly down */}
            <section className="container text-center mb-8 subtext-section">
                <p className="hero-subtext">
                    Real-life problems require structured thinking, ethical clarity, and calm execution. <br />
                    Krishnaite provides modern decision frameworks inspired by timeless wisdom.
                </p>
            </section>

            {/* What is Krishnaite Section */}
            <section className="about-section container" style={{ marginTop: '2rem' }}>
                <div className="text-center mb-8">
                    <h2 className="section-title mb-3">What is Krishnaite?</h2>
                </div>

                <div className="pillars-grid">
                    <div className="pillar-card sketch-card text-center">
                        <BrainCircuit className="pillar-icon mb-3" size={32} strokeWidth={1} />
                        <h3 className="pillar-title">Strategic Thinking</h3>
                    </div>
                    <div className="pillar-card sketch-card text-center">
                        <Scale className="pillar-icon mb-3" size={32} strokeWidth={1} />
                        <h3 className="pillar-title">Ethical Reasoning</h3>
                    </div>
                    <div className="pillar-card sketch-card text-center">
                        <Network className="pillar-icon mb-3" size={32} strokeWidth={1} />
                        <h3 className="pillar-title">Clear Decision Frameworks</h3>
                    </div>
                    <div className="pillar-card sketch-card text-center">
                        <CheckCircle2 className="pillar-icon mb-3" size={32} strokeWidth={1} />
                        <h3 className="pillar-title">Practical Solutions</h3>
                    </div>
                </div>
            </section>

            {/* The Framework Section */}
            <section className="framework-section container">
                <div className="text-center mb-8">
                    <h2 className="section-title">The K-R-I-S-H-N-A Framework</h2>
                </div>
                <div className="framework-grid">
                    {[
                        { letter: 'K', title: 'Know the real problem' },
                        { letter: 'R', title: 'Review all perspectives' },
                        { letter: 'I', title: 'Identify ethical impact' },
                        { letter: 'S', title: 'Strategize possible paths' },
                        { letter: 'H', title: 'Harmonize stakeholders' },
                        { letter: 'N', title: 'Navigate execution' },
                        { letter: 'A', title: 'Act with clarity' },
                    ].map((item, index) => (
                        <div key={index} className="framework-item sketch-card">
                            <div className="framework-letter">{item.letter}</div>
                            <p className="framework-desc">{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Problems We Address */}
            <section className="problems-section container">
                <div className="text-center mb-8">
                    <h2 className="section-title">Real-Life Problems We Address</h2>
                </div>
                <div className="problems-grid">
                    {['Career & Direction', 'Startup & Leadership', 'Ethical Dilemmas', 'Relationships', 'Productivity & Focus', 'Life Decisions'].map((cat, idx) => (
                        <div key={idx} className="problem-card sketch-card flex-center">
                            <h3>{cat}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Closing Section */}
            <section className="closing-section container text-center">
                <div className="quote-container mb-6">
                    <p className="quote-text">
                        "Clarity is not found in noise.<br />
                        It is built through structure."
                    </p>
                </div>
                <div className="flex-center" style={{ gap: '1.5rem' }}>
                    <Link to="/knowledge" className="btn-retro">KNOWLEDGE LIBRARY</Link>
                    <Link to="/submit" className="btn-retro">SUBMIT DILEMMA</Link>
                </div>

                {/* SVG Ocean Elements */}
                <div className="closing-ocean">
                    <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Static Waves (pen line style) */}
                        <path d="M0,150 C200,100 400,200 600,150 C800,100 1000,200 1200,150 C1350,120 1440,150 1440,150" fill="none" stroke="var(--charcoal)" strokeWidth="1.5" opacity="0.4" />
                        <path d="M0,170 C250,130 500,210 750,170 C1000,130 1250,210 1440,170" fill="none" stroke="var(--charcoal)" strokeWidth="1.2" opacity="0.6" />
                        <path d="M0,190 C300,160 600,220 900,190 C1200,160 1440,190 1440,190" fill="none" stroke="var(--charcoal)" strokeWidth="2" />

                        {/* Detailed Jumping Fish Drawing */}
                        <g className="fish-jump">
                            {/* Fish Body (pen stroke style) */}
                            <path d="M700,150 C705,130 720,115 745,110 C765,108 780,115 785,125 C788,135 775,145 750,150" fill="none" stroke="var(--charcoal)" strokeWidth="1.2" />
                            {/* Tail Fin */}
                            <path d="M700,150 L685,145 L685,155 Z" fill="none" stroke="var(--charcoal)" strokeWidth="1" />
                            {/* Dorsal Fin */}
                            <path d="M735,115 Q745,105 755,112" fill="none" stroke="var(--charcoal)" strokeWidth="1" />
                            {/* Eye */}
                            <circle cx="775" cy="120" r="1" fill="var(--charcoal)" />
                            {/* Gills/Scale texture (minimal pen marks) */}
                            <path d="M760,120 Q758,125 760,130" opacity="0.6" fill="none" stroke="var(--charcoal)" strokeWidth="0.8" />
                        </g>

                        {/* Enhanced Splash Drawing */}
                        <g className="splash">
                            <path d="M690,155 Q685,140 680,150" fill="none" stroke="var(--charcoal)" strokeWidth="0.8" />
                            <path d="M710,155 Q715,140 720,150" fill="none" stroke="var(--charcoal)" strokeWidth="0.8" />
                            <path d="M695,160 Q700,152 705,160" fill="none" stroke="var(--charcoal)" strokeWidth="1" />
                            <circle cx="688" cy="142" r="1" fill="var(--charcoal)" />
                            <circle cx="712" cy="142" r="1" fill="var(--charcoal)" />
                            <circle cx="700" cy="138" r="0.8" fill="var(--charcoal)" />
                        </g>
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Home;
