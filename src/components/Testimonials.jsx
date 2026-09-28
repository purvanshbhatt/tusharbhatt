import React from 'react';
import { motion } from 'framer-motion';
import { MdFormatQuote, MdVerifiedUser } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    return (
        <section 
            id="testimonials" 
            style={{ 
                padding: 'var(--spacing-xl) 0', 
                backgroundColor: 'var(--bg-section-secondary)',
                transition: 'background-color 0.3s ease'
            }}
        >
            <div className="container">
                <div className="section-header">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">
                            {t.testimonials.eyebrow}
                        </span>
                        <h2 className="section-title">
                            {t.testimonials.title}
                        </h2>
                        <div className="legal-divider" />
                        <p className="section-subtitle">
                            {t.testimonials.subtitle}
                        </p>
                    </motion.div>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '1.75rem' 
                }}>
                    {t.testimonials.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="m3-card m3-card-elevated"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative'
                            }}
                        >
                            <div>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center',
                                    marginBottom: '1rem' 
                                }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                        padding: '0.25rem 0.65rem',
                                        borderRadius: 'var(--md-sys-shape-corner-full)',
                                        backgroundColor: 'var(--md-sys-color-surface-container-high)',
                                        color: 'var(--md-sys-color-tertiary)'
                                    }}>
                                        {item.category}
                                    </span>
                                    <MdFormatQuote style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '2rem', opacity: 0.7 }} />
                                </div>

                                <p style={{ 
                                    color: 'var(--text-body)', 
                                    fontStyle: 'italic', 
                                    fontSize: '0.96rem',
                                    lineHeight: 1.7,
                                    marginBottom: '1.5rem' 
                                }}>
                                    "{item.quote}"
                                </p>
                            </div>

                            <div style={{
                                borderTop: '1px solid var(--md-sys-color-outline-variant)',
                                paddingTop: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.6rem'
                            }}>
                                <MdVerifiedUser style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.1rem' }} />
                                <div>
                                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                                        {item.context}
                                    </div>
                                    <div style={{ fontSize: '0.78rem', color: 'var(--text-body)' }}>
                                        {item.location}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
