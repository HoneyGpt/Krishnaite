import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Article.css';

const Article = () => {
    const { id } = useParams();

    // Mock content for any ID based on the prompt structure
    return (
        <div className="article-container page-transition-enter-active">
            <section className="container max-w-800 section">
                <Link to="/knowledge" className="back-link mb-6 inline-block">← Back to Library</Link>

                <div className="text-center mb-8 pb-6 border-b">
                    <h1 className="article-main-title mb-4">Resolving Co-Founder Conflicts</h1>
                    <p className="article-subtext">A structured approach to choosing between a stable corporate role and a high-risk startup opportunity.</p>
                </div>

                <div className="article-body">
                    <div className="structured-section">
                        <h2>The Dilemma</h2>
                        <p>Two startup founders strongly disagree on whether to take corporate investment that would shift their company's core mission. Founder A wants to stick to the original vision, while Founder B sees taking the money as necessary for financial survival.</p>
                    </div>

                    <div className="structured-section">
                        <h2>Stakeholder Analysis</h2>
                        <ul>
                            <li><strong>Founder A:</strong> Desires legacy and brand purity.</li>
                            <li><strong>Founder B:</strong> Needs financial security and growth scale.</li>
                            <li><strong>Employees:</strong> Need job stability but joined for the mission.</li>
                            <li><strong>Customers:</strong> Expect the original product experience.</li>
                        </ul>
                    </div>

                    <div className="structured-section">
                        <h2>Ethical Considerations</h2>
                        <p>Promising employees a disruptive, non-corporate culture and then pivoting for cash could be perceived as a breach of trust. However, allowing the company to run out of money and dismissing all employees is also an ethical failure.</p>
                    </div>

                    <div className="structured-section">
                        <h2>Strategic Options</h2>
                        <p>1. <strong>Take the cash, pivot the mission:</strong> Ensures survival, betrays early vision.</p>
                        <p>2. <strong>Reject the cash, risk bankruptcy:</strong> Retains integrity, but harms employees if it fails.</p>
                        <p>3. <strong>Partial buyout:</strong> Find an investor aligned with the legacy, allowing Founder B to cash out partially.</p>
                    </div>

                    <div className="structured-section">
                        <h2>Recommended Path</h2>
                        <p>Option 3 is the most harmonized. It requires finding a strategic partner rather than a purely financial one. It honors the vision while providing security.</p>
                    </div>

                    <div className="structured-section">
                        <h2>Execution Plan</h2>
                        <p>Draft a new term sheet that explicitly protects the core mission. Propose a secondary sale for Founder B to relieve their financial anxiety, creating mental space for them to continue building without resentment.</p>
                    </div>
                </div>

                <div className="text-center mt-8 pt-6 border-t">
                    <Link to="/submit" className="btn-secondary">Face a similar dilemma? Submit it.</Link>
                </div>
            </section>
        </div>
    );
};

export default Article;
