import React, { useState } from 'react';
import { Mail, MessageSquare, Briefcase } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using our local vite proxy /api/resend to bypass CORS.
            // In production (Vercel/Netlify), this needs to be a serverless function.
            const response = await fetch('/api/resend/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer re_dCBAppBP_va8tmK8yYcRZEDBF81hUXphX`
                },
                body: JSON.stringify({
                    from: 'Acme <onboarding@resend.dev>',
                    to: ['hello@krishnaite.dev'], // Send to the registered email address
                    subject: `New Contact Form Submission from ${formData.name}`,
                    html: `
                        <h2>New Message via Krishnaite Contact Form</h2>
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Message:</strong></p>
                        <p>${formData.message}</p>
                    `
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const errorData = await response.json();
                console.error("Resend Error:", errorData);
                setStatus('error');
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setStatus('error');
        }
    };

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
                                <span>hello@krishnaite.dev</span>
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
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your email address" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    required
                                ></textarea>
                            </div>
                            
                            {status === 'success' && <div style={{ color: 'green', marginBottom: '1rem' }}>Message sent successfully!</div>}
                            {status === 'error' && <div style={{ color: 'red', marginBottom: '1rem' }}>Failed to send message. Check console.</div>}

                            <div className="form-submit mt-6 text-center">
                                <button type="submit" className="btn-primary w-full" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
