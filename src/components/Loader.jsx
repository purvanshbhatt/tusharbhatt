import React from 'react';
import { motion } from 'framer-motion';
import logoIcon from '../assets/logo-icon.png'; // Assuming icon is available

const Loader = () => {
    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: 'var(--color-primary)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{ duration: 1.5, ease: "anticipate", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
            >
                {/* Use the logo icon or a stylized text if image fails */}
                <img src={logoIcon} alt="Loading..." style={{ width: '80px', height: 'auto' }} />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '2px',
                    fontSize: '1.2rem'
                }}
            >
                TUSHAR Y. BHATT
            </motion.h2>
        </motion.div>
    );
};

export default Loader;
