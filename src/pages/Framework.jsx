import React from 'react';
import './Framework.css';

const Framework = () => {
    return (
        <div className="framework-page-container page-transition-enter-active">
            <section className="container section">
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">The Krishnaite Decision Framework</h1>
                    <p className="page-subtext mx-auto max-w-700">A structured philosophy for moving from confusion to absolute clarity.</p>
                </div>

                {/* Introduction Philosophy */}
                <div className="framework-content mb-8">
                    <div className="framework-text-block mb-6">
                        <h2 className="mb-3">Why Most People Make Poor Decisions</h2>
                        <p>
                            In moments of crisis or transition, humans are biologically wired to react rather than respond.
                            We often let temporary emotions dictate permanent consequences. This reactive state—fueled by stress,
                            ego, and external pressures—clouds our judgment, leading to choices that misalign with our core values.
                        </p>
                    </div>

                    <div className="framework-text-block mb-6">
                        <h2 className="mb-3">The Need for Structured Thinking</h2>
                        <p>
                            Structure provides a sanctuary for the mind. When faced with complexity, having a predefined framework
                            prevents cognitive overload. It forces a pause between stimulus and response, creating space where
                            true strategic thinking can occur.
                        </p>
                    </div>

                    <div className="framework-text-block mb-8">
                        <h2 className="mb-3">Ethical vs Emotional Reaction</h2>
                        <p>
                            An emotional reaction asks: <em>"What feels good right now?"</em> An ethical response asks:
                            <em>"What aligns with my principles in the long run?"</em> The Krishnaite Framework prioritizes ethics
                            over fleeting emotions, ensuring that decisions are not only logically sound but also morally justifiable.
                        </p>
                    </div>
                </div>

                {/* 7-Step Framework */}
                <div className="seven-step-section mb-8 relative">
                    <div className="circles-bg shape-3"></div>
                    <h2 className="text-center mb-6">The 7-Step Framework</h2>
                    <div className="framework-grid-detail">
                        <div className="step-card soft-card">
                            <div className="step-letter" data-letter="K">K</div>
                            <h3>Know the real problem</h3>
                            <p>Strip away the symptoms. What is the actual root cause of this dilemma?</p>
                        </div>
                        <div className="step-card soft-card">
                            <div className="step-letter" data-letter="R">R</div>
                            <h3>Review all perspectives</h3>
                            <p>Detach from your own bias. Step into the shoes of others involved.</p>
                        </div>
                        <div className="step-card soft-card">
                            <div className="step-letter" data-letter="I">I</div>
                            <h3>Identify ethical impact</h3>
                            <p>Who does this decision help? Who does it harm? Is it just?</p>
                        </div>
                        <div className="step-card soft-card">
                            <div className="step-letter" data-letter="S">S</div>
                            <h3>Strategize possible paths</h3>
                            <p>Map out multiple scenarios. Never settle for the first obvious answer.</p>
                        </div>
                        <div className="step-card soft-card">
                            <div className="step-letter" data-letter="H">H</div>
                            <h3>Harmonize stakeholders</h3>
                            <p>Find the alignment between the needs of all involved parties.</p>
                        </div>
                        <div className="step-card soft-card">
                            <div className="step-letter" data-letter="N">N</div>
                            <h3>Navigate execution</h3>
                            <p>A strategy without execution is just an idea. Plan the physical steps.</p>
                        </div>
                        <div className="step-card soft-card">
                            <div className="step-letter" data-letter="A">A</div>
                            <h3>Act with clarity</h3>
                            <p>Move forward with conviction, knowing your foundation is strong.</p>
                        </div>
                    </div>
                </div>

                {/* Case Study */}
                <div className="case-study-section soft-card p-6 mt-8">
                    <div className="text-center mb-6">
                        <h2>Example Case Study</h2>
                        <p className="subtext">Applying the K-R-I-S-H-N-A Model</p>
                    </div>
                    <div className="case-content">
                        <h3 className="mb-2">The Dilemma: The Co-Founder Conflict</h3>
                        <p className="mb-4">
                            Two startup founders strongly disagree on whether to take corporate investment that would shift their company's core mission.
                        </p>
                        <div className="case-steps">
                            <div className="row mb-3"><strong>K:</strong> It's not about money; it's about shifting values vs. survival.</div>
                            <div className="row mb-3"><strong>R:</strong> Founder A wants legacy; Founder B wants financial security. Both are valid.</div>
                            <div className="row mb-3"><strong>I:</strong> Does selling out compromise their promises to early employees?</div>
                            <div className="row mb-3"><strong>S:</strong> Can they take partial funding? Bootstrapping? A different investor?</div>
                            <div className="row mb-3"><strong>H:</strong> Finding an investor who aligns with legacy, offering secondary sales for B.</div>
                            <div className="row mb-3"><strong>N:</strong> Drafting the new terms sheet and presenting it together.</div>
                            <div className="row mb-3"><strong>A:</strong> Signing the deal with total mutual clarity and no resentment.</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Framework;
