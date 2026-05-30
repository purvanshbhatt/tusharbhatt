// FloatingContactButton.jsx
import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const buttonStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    zIndex: 1000,
};

const iconStyle = {
    background: 'var(--color-accent)',
    color: 'var(--color-primary)',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
};

const FloatingContactButton = () => (
    <motion.div
        style={buttonStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
    >
        <a href="https://wa.me/91" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <FaWhatsapp size={24} />
        </a>
        <a href="tel:+91-99999-99999" style={iconStyle} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <FaPhoneAlt size={24} />
        </a>
    </motion.div>
);

export default FloatingContactButton;
