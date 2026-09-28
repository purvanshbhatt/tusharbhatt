import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import logoIcon from '../assets/logo-icon.png';

const Loader = () => {
    const { language } = useLanguage();

    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#0a1c3d',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: [0.95, 1.05, 0.95], opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                style={{
                    padding: '16px',
                    background: '#ffffff',
                    borderRadius: '50%',
                    border: '2px solid var(--md-sys-color-tertiary)',
                    boxShadow: '0 0 35px rgba(212, 175, 55, 0.4)',
                    marginBottom: '1.75rem'
                }}
            >
                <img 
                    src={logoIcon} 
                    alt="Scales of Justice" 
                    style={{ width: '70px', height: '70px', objectFit: 'contain', display: 'block' }} 
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                style={{ textAlign: 'center' }}
            >
                <h1 style={{
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '1px',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    marginBottom: '0.4rem'
                }}>
                    {language === 'hi' ? 'तुषार वाई. भट्ट' : 'TUSHAR Y. BHATT'}
                </h1>
                <div style={{
                    color: 'var(--md-sys-color-tertiary)',
                    fontSize: '0.85rem',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontWeight: 600
                }}>
                    {language === 'hi' ? 'अधिवक्ता • 25 वर्षों का विधिक अनुभव' : 'Advocate • 25 Years Experience'}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
