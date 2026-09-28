import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (docHeight > 0) ? (scrollTop / docHeight) * 100 : 0;
            setScroll(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--md-sys-color-tertiary) 0%, #f4d068 100%)',
                width: `${scroll}%`,
                zIndex: 1001,
                boxShadow: '0 0 8px rgba(212, 175, 55, 0.6)'
            }}
            initial={{ width: 0 }}
            animate={{ width: `${scroll}%` }}
            transition={{ ease: 'linear', duration: 0.05 }}
        />
    );
};

export default ScrollProgressBar;
