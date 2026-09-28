import React from 'react';
import { motion } from 'framer-motion';
import { MdGavel, MdBalance, MdShield, MdArrowForward } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/hero-bg.png';
import logoIcon from '../assets/logo-icon.png';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                minHeight: '100vh',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '6rem',
                paddingBottom: '3.5rem',
                color: '#ffffff'
            }}
        >
            {/* Background Image with Layered Judicial Gradient */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(8, 22, 48, 0.90) 0%, rgba(6, 16, 36, 0.94) 60%, rgba(4, 10, 24, 0.98) 100%)',
                    zIndex: -1,
                }}
            />

            {/* Radial Accent Glow behind crest */}
            <div
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '450px',
                    height: '450px',
                    background: 'radial-gradient(circle, rgba(179, 134, 34, 0.15) 0%, rgba(10, 28, 61, 0) 70%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }}
            />

            {/* Content */}
            <div className="container" style={{ textAlign: 'center', zIndex: 1, maxWidth: '960px' }}>
                {/* Emblem / Scales of Justice */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '1rem', display: 'inline-block' }}
                >
                    <div style={{
                        position: 'relative',
                        padding: '10px',
                        background: 'rgba(255, 255, 255, 0.96)',
                        borderRadius: '50%',
                        boxShadow: '0 0 35px rgba(212, 175, 55, 0.35)',
                        border: '2px solid rgba(212, 175, 55, 0.6)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={logoIcon}
                            alt="Scales of Justice - Advocate Tushar Bhatt"
                            className="hero-logo-crest"
                            style={{
                                height: '60px',
                                width: '60px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </motion.div>

                {/* Overline Chip */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    style={{ marginBottom: '1rem' }}
                >
                    <span className="m3-badge-gold" style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}>
                        {t.hero.badge}
                    </span>
                </motion.div>

                {/* Main Hero Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        fontSize: 'clamp(2rem, 4.8vw, 3.8rem)',
                        fontWeight: 700,
                        marginBottom: '1.25rem',
                        lineHeight: 1.18,
                        letterSpacing: '0.6px',
                        color: '#ffffff'
                    }}
                >
                    {t.hero.titleLine1} <br />
                    <span style={{ 
                        color: 'var(--md-sys-color-tertiary)',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        {t.hero.titleLine2}
                    </span>
                </motion.h1>

                {/* Lead Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    style={{
                        fontSize: 'clamp(0.96rem, 1.8vw, 1.15rem)',
                        maxWidth: '720px',
                        margin: '0 auto 2rem',
                        color: '#d1d8e6',
                        lineHeight: 1.7
                    }}
                >
                    {t.hero.desc}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="hero-cta-group"
                    style={{
                        display: 'flex',
                        gap: '0.85rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '2.5rem'
                    }}
                >
                    <a
                        href="#contact-form"
                        className="m3-btn m3-btn-filled"
                        style={{ fontSize: '0.95rem', padding: '0.75rem 1.6rem' }}
                    >
                        <MdGavel style={{ fontSize: '1.15rem' }} />
                        <span>{t.hero.button}</span>
                        <MdArrowForward />
                    </a>

                    <a
                        href="#cases"
                        className="m3-btn m3-btn-outlined-light"
                        style={{ fontSize: '0.95rem', padding: '0.75rem 1.6rem' }}
                    >
                        <MdBalance style={{ fontSize: '1.15rem' }} />
                        <span>{t.hero.casesBtn}</span>
                    </a>

                    <a
                        href="#practice-areas"
                        className="m3-btn m3-btn-outlined-light"
                        style={{ fontSize: '0.95rem', padding: '0.75rem 1.6rem' }}
                    >
                        <span>{t.hero.practiceBtn}</span>
                    </a>
                </motion.div>

                {/* Stately Trust & Credibility Chips Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.75 }}
                    className="hero-trust-bar"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.8rem',
                        flexWrap: 'wrap',
                        padding: '1rem 1.5rem',
                        background: 'rgba(16, 36, 75, 0.65)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 'var(--md-sys-shape-corner-lg)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        maxWidth: '850px',
                        margin: '0 auto'
                    }}
                >
                    {t.hero.chips.map((chip, index) => (
                        <React.Fragment key={index}>
                            <div className="hero-trust-chip" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#e8edf8', fontSize: '0.86rem', fontWeight: 600 }}>
                                {chip.icon === 'shield' ? (
                                    <MdShield style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.05rem' }} />
                                ) : (
                                    <span style={{ color: 'var(--md-sys-color-tertiary)' }}>{chip.icon}</span>
                                )}
                                <span>{chip.text}</span>
                            </div>
                            {index < t.hero.chips.length - 1 && (
                                <span className="hero-trust-divider" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .hero-trust-bar {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr !important;
                        gap: 0.65rem !important;
                        padding: 0.85rem !important;
                        text-align: left !important;
                    }
                    .hero-trust-divider {
                        display: none !important;
                    }
                    .hero-trust-chip {
                        font-size: 0.78rem !important;
                    }
                    .hero-logo-crest {
                        height: 48px !important;
                        width: 48px !important;
                    }
                    .hero-cta-group a {
                        width: 100% !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
