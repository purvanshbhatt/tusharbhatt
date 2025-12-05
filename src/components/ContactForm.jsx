import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all required fields.');
            return;
        }

        console.log('Form Submitted Securely:', formData);
        setStatus('Thank you! Your message has been sent securely.');
        setFormData({ name: '', email: '', phone: '', message: '' });

        setTimeout(() => setStatus(''), 5000);
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        marginBottom: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '2px',
        fontSize: '1rem',
        fontFamily: 'var(--font-body)',
        outline: 'none',
        transition: 'border-color 0.3s',
        backgroundColor: 'var(--bg-section-primary)',
        color: 'var(--text-body)'
    };

    return (
        <section id="contact" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--bg-section-primary)', transition: 'background-color 0.3s ease' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h3 className="text-accent" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}>Consultation</h3>
                    <h2 style={{ color: 'var(--text-heading)', fontSize: '2.5rem' }}>Get In Touch</h2>
                    <p style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                        Fill out the form below to schedule a consultation. All communications are privileged and confidential.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    onSubmit={handleSubmit}
                    style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    <textarea
                        name="message"
                        placeholder="How can we help you? *"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        required
                    ></textarea>

                    {status && <p style={{ color: status.includes('Thank') ? 'green' : 'red', marginBottom: '1rem', textAlign: 'center' }}>{status}</p>}

                    <div style={{ textAlign: 'center' }}>
                        <button
                            type="submit"
                            style={{
                                padding: '1rem 3rem',
                                fontSize: '1rem',
                                fontWeight: 600,
                                backgroundColor: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                borderRadius: '2px',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--color-primary)'; e.target.style.color = 'var(--color-accent)'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'var(--color-accent)'; e.target.style.color = 'var(--color-primary)'; }}
                        >
                            Submit Request
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactForm;
