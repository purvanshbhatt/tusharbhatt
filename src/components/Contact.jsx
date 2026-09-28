import React from 'react';
import { motion } from 'framer-motion';
import { MdPhone, MdEmail, MdLocationOn, MdSchedule, MdVerified } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section 
            id="contact-info" 
            style={{ 
                padding: 'var(--spacing-xl) 0', 
                backgroundColor: 'var(--md-sys-color-primary)', 
                color: '#ffffff',
                position: 'relative'
            }}
        >
            <div className="container">
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                    gap: 'var(--spacing-lg)',
                    alignItems: 'center'
                }}>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="m3-badge-gold" style={{ marginBottom: '1.25rem' }}>
                            <MdVerified />
                            <span>{t.contact.badge}</span>
                        </div>

                        <h2 style={{ 
                            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', 
                            marginBottom: '1rem', 
                            color: '#ffffff',
                            lineHeight: 1.2
                        }}>
                            {t.contact.titleLine1} <br />
                            <span style={{ color: 'var(--md-sys-color-tertiary)' }}>
                                {t.contact.titleLine2}
                            </span>
                        </h2>

                        <p style={{ color: '#d1d8e6', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            {t.contact.desc}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {/* Phone */}
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '1.25rem',
                                padding: '1rem',
                                borderRadius: 'var(--md-sys-shape-corner-md)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{ 
                                    color: 'var(--md-sys-color-tertiary)', 
                                    fontSize: '1.6rem',
                                    marginTop: '2px'
                                }}>
                                    <MdPhone />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--md-sys-color-tertiary)', marginBottom: '0.2rem' }}>
                                        {t.contact.phoneLabel}
                                    </h3>
                                    <a href="tel:+919425486154" style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}>
                                        +91 94254 86154
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '1.25rem',
                                padding: '1rem',
                                borderRadius: 'var(--md-sys-shape-corner-md)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{ 
                                    color: 'var(--md-sys-color-tertiary)', 
                                    fontSize: '1.6rem',
                                    marginTop: '2px'
                                }}>
                                    <MdEmail />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--md-sys-color-tertiary)', marginBottom: '0.2rem' }}>
                                        {t.contact.emailLabel}
                                    </h3>
                                    <a href="mailto:adv.tusharbhatt@gmail.com" style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 500, textDecoration: 'none' }}>
                                        adv.tusharbhatt@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Office Address */}
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '1.25rem',
                                padding: '1rem',
                                borderRadius: 'var(--md-sys-shape-corner-md)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{ 
                                    color: 'var(--md-sys-color-tertiary)', 
                                    fontSize: '1.6rem',
                                    marginTop: '2px'
                                }}>
                                    <MdLocationOn />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--md-sys-color-tertiary)', marginBottom: '0.2rem' }}>
                                        {t.contact.officeLabel}
                                    </h3>
                                    <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.6 }}>
                                        {t.contact.address}
                                    </p>
                                </div>
                            </div>

                            {/* Timings */}
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '1.25rem',
                                padding: '1rem',
                                borderRadius: 'var(--md-sys-shape-corner-md)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <div style={{ 
                                    color: 'var(--md-sys-color-tertiary)', 
                                    fontSize: '1.6rem',
                                    marginTop: '2px'
                                }}>
                                    <MdSchedule />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--md-sys-color-tertiary)', marginBottom: '0.2rem' }}>
                                        {t.contact.hoursLabel}
                                    </h3>
                                    <p style={{ color: '#ffffff', fontSize: '0.95rem' }}>
                                        {t.contact.hours} <br />
                                        <span style={{ color: '#d1d8e6', fontSize: '0.85rem' }}>{t.contact.hoursSub}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map in M3 Frame */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{
                            height: '460px',
                            borderRadius: 'var(--md-sys-shape-corner-lg)',
                            overflow: 'hidden',
                            boxShadow: 'var(--md-sys-elevation-4)',
                            border: '2px solid rgba(212, 175, 55, 0.35)',
                            position: 'relative',
                            backgroundColor: '#0a192f'
                        }}
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=17-B+Arihant+Vikram+Nagar+Sethi+Nagar+Ujjain+Madhya+Pradesh+456010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Advocate Tushar Bhatt Chamber Location"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
