import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container page-transition-enter-active">
            <section className="container section">
                <div className="about-hero text-center mb-8">
                    <h1 className="page-title mb-4">Why Krishnaite Exists</h1>
                    <p className="page-subtext mx-auto max-w-700">
                        In a world of noise and impulsive reactions, Krishnaite was created to bring back
                        structured thinking and ethical clarity. Inspired by timeless strategic wisdom,
                        the platform exists to help individuals respond — not react — to life’s challenges.
                    </p>
                </div>

                <div className="about-content grid-2-col soft-card p-6 mt-8 relative">
                    <div className="decoration-line"></div>

                    <div className="about-block">
                        <h2 className="mb-3">Vision</h2>
                        <p>
                            To cultivate a generation of leaders, thinkers, and individuals who do not succumb
                            to the chaos of the immediate, but instead navigate their lives with intentionality,
                            foresight, and unshakeable ethical grounding.
                        </p>
                    </div>

                    <div className="about-block">
                        <h2 className="mb-3">Philosophy</h2>
                        <p>
                            True wisdom is practical. Philosophical insight that cannot be applied to a boardroom conflict,
                            a career pivot, or a personal dilemma is merely artistic. Krishnaite bridges the gap between
                            high-level philosophy and ground-level execution.
                        </p>
                    </div>

                    <div className="about-block">
                        <h2 className="mb-3">Core Principles</h2>
                        <ul className="principles-list">
                            <li><strong>Clarity over Speed:</strong> Fast decisions are often flawed decisions.</li>
                            <li><strong>Ethics over Ego:</strong> The right outcome benefits the whole, not just the self.</li>
                            <li><strong>Structure over Chaos:</strong> Frameworks provide safety when emotions run high.</li>
                            <li><strong>Execution over Theory:</strong> A perfect strategy without action is useless.</li>
                        </ul>
                    </div>

                    <div className="about-block">
                        <h2 className="mb-3">Commitment to Practicality</h2>
                        <p>
                            We do not deal in platitudes. Every framework, article, and piece of advice provided
                            through Krishnaite is designed to be immediately actionable. We dissect the anatomy of
                            problems so you can surgically apply solutions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
