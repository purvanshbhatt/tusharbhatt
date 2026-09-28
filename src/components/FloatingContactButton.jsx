import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FloatingContactButton = () => {
    const { t, language } = useLanguage();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const size = isMobile ? '44px' : '48px';
    const iconSize = isMobile ? 22 : 24;

    const fabItemStyle = {
        background: 'var(--md-sys-color-tertiary)',
        color: 'var(--md-sys-color-on-tertiary)',
        borderRadius: 'var(--md-sys-shape-corner-full)',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--md-sys-elevation-3)',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
        textDecoration: 'none',
        border: '1.5px solid rgba(255, 255, 255, 0.4)'
    };

    const whatsappMessage = language === 'hi'
        ? encodeURIComponent("नमस्ते एडवोकेट तुषार भट्ट जी, मुझे कानूनी परामर्श के संबंध में जानकारी चाहिए।")
        : encodeURIComponent("Hello Advocate Tushar Bhatt, I would like to inquire about a legal consultation.");

    return (
        <motion.div
            style={{
                position: 'fixed',
                bottom: isMobile ? '1.25rem' : '2rem',
                right: isMobile ? '1.25rem' : '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '0.65rem' : '0.85rem',
                zIndex: 999,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
        >
            {/* WhatsApp Direct */}
            <motion.a
                href={`https://wa.me/919425486154?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...fabItemStyle, backgroundColor: '#25D366', color: '#ffffff' }}
                whileHover={{ scale: 1.08, boxShadow: 'var(--md-sys-elevation-4)' }}
                whileTap={{ scale: 0.94 }}
                aria-label={t.floating.whatsappAria}
                title={t.floating.whatsappTitle}
            >
                <FaWhatsapp size={iconSize} />
            </motion.a>

            {/* Direct Phone Call */}
            <motion.a
                href="tel:+919425486154"
                style={fabItemStyle}
                whileHover={{ scale: 1.08, boxShadow: 'var(--md-sys-elevation-4)' }}
                whileTap={{ scale: 0.94 }}
                aria-label={t.floating.callAria}
                title={t.floating.callTitle}
            >
                <FaPhoneAlt size={isMobile ? 18 : 19} />
            </motion.a>
        </motion.div>
    );
};

export default FloatingContactButton;
