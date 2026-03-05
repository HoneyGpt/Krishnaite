import React from 'react';
import './SubmitDilemma.css';

const SubmitDilemma = () => {
    return (
        <div className="submit-container page-transition-enter-active">
            <section className="container section flex-center">
                <div className="submit-form-wrapper soft-card">
                    <div className="text-center mb-8">
                        <h1 className="page-title mb-3">Facing a Difficult Decision?</h1>
                        <p className="page-subtext mx-auto">
                            Submit your dilemma anonymously. We’ll respond using the Krishnaite Framework.
                        </p>
                    </div>

                    <form className="dilemma-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name <span className="optional">(Optional)</span></label>
                                <input type="text" id="name" placeholder="How should we address you?" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email <span className="optional">(Optional)</span></label>
                                <input type="email" id="email" placeholder="For a direct response" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select id="category">
                                <option value="">Select a domain</option>
                                <option value="career">Career & Direction</option>
                                <option value="startup">Startup & Leadership</option>
                                <option value="ethics">Ethical Dilemmas</option>
                                <option value="relationships">Relationships</option>
                                <option value="productivity">Productivity & Focus</option>
                                <option value="life">Life Decisions</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="situation">Describe Your Situation</label>
                            <textarea
                                id="situation"
                                rows="5"
                                placeholder="What is the core conflict? Who is involved? What makes this difficult?"
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="outcome">Desired Outcome</label>
                            <textarea
                                id="outcome"
                                rows="3"
                                placeholder="What does a successful resolution look like to you?"
                            ></textarea>
                        </div>

                        <div className="form-submit text-center mt-8">
                            <button type="submit" className="btn-primary w-full">
                                Submit for Structured Review
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SubmitDilemma;
