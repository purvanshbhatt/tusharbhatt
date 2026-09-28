import React from 'react';
import { motion } from 'framer-motion';
import { MdVerified, MdGavel, MdBalance, MdShield, MdArrowForward } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import aboutVisual from '../assets/tushar-bhatt.png';

const About = () => {
    const { t } = useLanguage();

    return (
        <section 
            id="about" 
            style={{ 
                padding: 'var(--spacing-xl) 0', 
                backgroundColor: 'var(--bg-section-primary)', 
                transition: 'background-color 0.3s ease',
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
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="m3-badge-gold" style={{ marginBottom: '1.25rem' }}>
                            <MdVerified style={{ fontSize: '1.1rem' }} />
                            <span>{t.about.badge}</span>
                        </div>

                        <h2 style={{ 
                            fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', 
                            lineHeight: 1.18, 
                            marginBottom: '1.5rem',
                            color: 'var(--text-heading)' 
                        }}>
                            {t.about.titleLine1} <br />
                            <span style={{ color: 'var(--md-sys-color-tertiary)', fontStyle: 'italic' }}>
                                {t.about.titleLine2}
                            </span>
                        </h2>

                        <p style={{ 
                            fontSize: '1.12rem', 
                            lineHeight: 1.8, 
                            color: 'var(--text-heading)', 
                            fontWeight: 500,
                            marginBottom: '1.25rem' 
                        }}>
                            {t.about.intro}
                        </p>

                        <p style={{ 
                            color: 'var(--text-body)', 
                            fontSize: '1rem',
                            lineHeight: 1.75, 
                            marginBottom: '1.75rem' 
                        }}>
                            {t.about.body}
                        </p>

                        {/* M3 Stat Cards */}
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                            gap: '1.25rem',
                            marginBottom: '2rem'
                        }}>
                            <div className="m3-card-elevated" style={{ padding: '1.25rem', textAlign: 'center' }}>
                                <div style={{ 
                                    fontSize: '2.2rem', 
                                    fontWeight: 800, 
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--md-sys-color-tertiary)', 
                                    lineHeight: 1 
                                }}>
                                    {t.about.stats.yearsVal}
                                </div>
                                <div style={{ 
                                    fontSize: '0.8rem', 
                                    fontWeight: 700, 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '0.5px', 
                                    color: 'var(--text-heading)',
                                    marginTop: '0.5rem' 
                                }}>
                                    {t.about.stats.yearsLabel}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                                    {t.about.stats.yearsSub}
                                </div>
                            </div>

                            <div className="m3-card-elevated" style={{ padding: '1.25rem', textAlign: 'center' }}>
                                <div style={{ 
                                    fontSize: '2.2rem', 
                                    fontWeight: 800, 
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--md-sys-color-tertiary)', 
                                    lineHeight: 1 
                                }}>
                                    {t.about.stats.casesVal}
                                </div>
                                <div style={{ 
                                    fontSize: '0.8rem', 
                                    fontWeight: 700, 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '0.5px', 
                                    color: 'var(--text-heading)',
                                    marginTop: '0.5rem' 
                                }}>
                                    {t.about.stats.casesLabel}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                                    {t.about.stats.casesSub}
                                </div>
                            </div>

                            <div className="m3-card-elevated" style={{ padding: '1.25rem', textAlign: 'center' }}>
                                <div style={{ 
                                    fontSize: '2.2rem', 
                                    fontWeight: 800, 
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--md-sys-color-tertiary)', 
                                    lineHeight: 1 
                                }}>
                                    {t.about.stats.privilegeVal}
                                </div>
                                <div style={{ 
                                    fontSize: '0.8rem', 
                                    fontWeight: 700, 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '0.5px', 
                                    color: 'var(--text-heading)',
                                    marginTop: '0.5rem' 
                                }}>
                                    {t.about.stats.privilegeLabel}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                                    {t.about.stats.privilegeSub}
                                </div>
                            </div>
                        </div>

                        {/* Legal Chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                            {t.about.chips.map((chip, idx) => (
                                <span className="m3-chip" key={idx}>
                                    {idx === 0 && <MdGavel style={{ color: 'var(--md-sys-color-tertiary)' }} />}
                                    {idx === 1 && <MdBalance style={{ color: 'var(--md-sys-color-tertiary)' }} />}
                                    {idx === 2 && <MdShield style={{ color: 'var(--md-sys-color-tertiary)' }} />}
                                    <span>{chip}</span>
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a 
                                href="#contact-info" 
                                className="m3-btn m3-btn-filled"
                                style={{ display: 'inline-flex' }}
                            >
                                <span>{t.about.cta}</span>
                                <MdArrowForward />
                            </a>
                            <a 
                                href="#cases" 
                                className="m3-btn m3-btn-outlined"
                                style={{ display: 'inline-flex' }}
                            >
                                <MdBalance />
                                <span>{t.about.viewCasesCta}</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        {/* Architectural Frame */}
                        <div style={{
                            position: 'relative',
                            maxWidth: '440px',
                            width: '100%'
                        }}>
                            {/* Decorative Gold Accent Border */}
                            <div style={{
                                position: 'absolute',
                                top: '-14px',
                                right: '-14px',
                                width: '100%',
                                height: '100%',
                                border: '2px solid var(--md-sys-color-tertiary)',
                                borderRadius: 'var(--md-sys-shape-corner-lg)',
                                zIndex: 0,
                                opacity: 0.85
                            }} />

                            {/* Image Container */}
                            <div style={{
                                position: 'relative',
                                zIndex: 1,
                                borderRadius: 'var(--md-sys-shape-corner-lg)',
                                overflow: 'hidden',
                                boxShadow: 'var(--md-sys-elevation-3)',
                                backgroundColor: 'var(--md-sys-color-surface-container)'
                            }}>
                                <img
                                    src={aboutVisual}
                                    alt="Advocate Tushar Y. Bhatt"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        objectFit: 'cover'
                                    }}
                                />

                                {/* Floating Authentic Legal Badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '16px',
                                    left: '16px',
                                    right: '16px',
                                    backgroundColor: 'rgba(10, 28, 61, 0.92)',
                                    backdropFilter: 'blur(8px)',
                                    color: '#ffffff',
                                    padding: '1rem 1.25rem',
                                    borderRadius: 'var(--md-sys-shape-corner-md)',
                                    border: '1px solid rgba(212, 175, 55, 0.4)',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                        <MdBalance style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.4rem' }} />
                                        <div>
                                            <div style={{ 
                                                fontSize: '0.95rem', 
                                                fontWeight: 700, 
                                                fontFamily: 'var(--font-heading)',
                                                letterSpacing: '0.5px' 
                                            }}>
                                                {t.about.sealName}
                                            </div>
                                            <div style={{ 
                                                fontSize: '0.78rem', 
                                                color: 'var(--md-sys-color-tertiary)', 
                                                letterSpacing: '0.8px',
                                                textTransform: 'uppercase',
                                                fontWeight: 600
                                            }}>
                                                {t.about.sealSub}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
