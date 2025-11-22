import './contact.css';
import React, { useState } from 'react';
import { Send, Mail, MessageSquare, User, X } from 'lucide-react';

const Contact = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thanks for your message! This is a demo form.');
        setShowForm(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            {/* Floating Contact Button */}
            <div className="floating-contact-container">
                <button
                    className={`floating-contact-btn ${showForm ? 'open' : ''}`}
                    onClick={() => setShowForm(!showForm)}
                    aria-label="Contact form"
                >
                    {showForm ? <X size={24} /> : <MessageSquare size={24} />}
                </button>
            </div>

            {/* Contact Form Dialog */}
            {showForm && (
                <div className="contact-dialog-overlay" onClick={() => setShowForm(false)}>
                    <div className="contact-dialog" onClick={(e) => e.stopPropagation()}>
                        <div className="dialog-header">
                            <h2 className="dialog-title">Get In Touch</h2>
                            <button
                                className="dialog-close-btn"
                                onClick={() => setShowForm(false)}
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <p className="dialog-description">
                            Have a project in mind or just want to say hi? I'm always open to discussing new projects and opportunities.
                        </p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        <User size={16} className="form-icon" /> Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        <Mail size={16} className="form-icon" /> Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    <MessageSquare size={16} className="form-icon" /> Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="form-textarea"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact;
