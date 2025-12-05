// ScrollProgressBar.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
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
                height: '4px',
                background: 'var(--color-accent)',
                width: `${scroll}%`,
                zIndex: 9999,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${scroll}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
        />
    );
};

export default ScrollProgressBar;
