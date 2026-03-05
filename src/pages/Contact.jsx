import React from 'react';
import { Mail, MessageSquare, Briefcase } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container page-transition-enter-active">
            <section className="container section">
                <div className="contact-grid">

                    <div className="contact-info pr-8">
                        <h1 className="page-title mb-4">Get in Touch</h1>
                        <p className="page-subtext mb-6">
                            We welcome collaboration, discussions, and thoughtful exchanges. Whether you are
                            seeking advisory services or just want to connect, reach out.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item mb-4">
                                <Mail className="contact-icon" size={20} strokeWidth={1} />
                                <span>wearekrishnaites@gmail.com</span>
                            </div>
                            <div className="method-item mb-4">
                                <MessageSquare className="contact-icon" size={20} strokeWidth={1} />
                                <span>@krishnaite_hq</span>
                            </div>
                            <div className="method-item mb-4">
                                <Briefcase className="contact-icon" size={20} strokeWidth={1} />
                                <span>LinkedIn / Krishnaite</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper soft-card">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="c-name">Name</label>
                                <input type="text" id="c-name" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="c-email">Email</label>
                                <input type="email" id="c-email" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="c-message">Message</label>
                                <textarea
                                    id="c-message"
                                    rows="4"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <div className="form-submit mt-6 text-center">
                                <button type="submit" className="btn-primary w-full">Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
