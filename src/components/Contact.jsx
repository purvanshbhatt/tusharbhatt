import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact-info" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-primary)', color: 'var(--color-bg-light)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>

                {/* Contact Details */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <h3 className="text-accent" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>Get in Touch</h3>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Contact Information</h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <FaPhone style={{ color: 'var(--color-accent)', fontSize: '1.5rem', marginRight: '1.5rem' }} />
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</h4>
                                <p style={{ color: 'var(--color-text-main)' }}>+91 94254 86154</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <FaEnvelope style={{ color: 'var(--color-accent)', fontSize: '1.5rem', marginRight: '1.5rem' }} />
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h4>
                                <p style={{ color: 'var(--color-text-main)' }}>adv.tusharbhatt@gmail.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--color-accent)', fontSize: '1.5rem', marginRight: '1.5rem' }} />
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Office</h4>
                                <p style={{ color: 'var(--color-text-main)' }}>17-B Arihant Vikram Nagar, Sethi Nagar,<br />Ujjain, Madhya Pradesh, 456010</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ height: '400px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.497262696666!2d75.7905553150556!3d23.18855598486926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de000001%3A0x1234567890abcdef!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Office Location"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
