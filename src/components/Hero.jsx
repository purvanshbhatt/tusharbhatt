import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import logoIcon from '../assets/logo-icon.png';

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-bg-light)'
            }}
        >
            {/* Background Image with Overlay */}
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
                    backgroundColor: 'rgba(10, 25, 47, 0.85)', // Deep Navy overlay
                    zIndex: -1,
                }}
            />

            {/* Content */}
            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '1.5rem' }}
                >
                    <img
                        src={logoIcon}
                        alt="Scales of Justice"
                        style={{
                            height: '100px',
                            width: 'auto',
                            background: 'rgba(255,255,255,0.9)',
                            padding: '15px',
                            borderRadius: '50%',
                            boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
                        }}
                    />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: '1.5rem',
                        letterSpacing: '3px',
                        color: 'var(--color-accent)',
                        marginBottom: '1rem',
                        fontWeight: 500
                    }}
                >
                    TUSHAR Y. BHATT, ADVOCATE
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 700,
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}
                >
                    YOUR TRUSTED <br />
                    <span className="text-accent">LEGAL PARTNER</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        color: 'var(--color-text-main)'
                    }}
                >
                    Providing expert legal counsel with integrity, dedication, and a client-centric approach.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent-light)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        padding: '1rem 2.5rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        borderRadius: '2px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
                    }}
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                    Get a Consultation
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
