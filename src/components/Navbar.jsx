import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import logoIcon from '../assets/logo-icon.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', !isDark ? 'dark' : 'light');
    };

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Practice Areas', href: '#practice-areas' },
        { name: 'Contact', href: '#contact-info' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            padding: scrolled ? '0.5rem 0' : '1rem 0',
            transition: 'all 0.3s ease',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                        src={logoIcon}
                        alt="Logo"
                        style={{
                            height: '40px',
                            width: 'auto',
                            background: 'rgba(255,255,255,0.9)',
                            padding: '4px',
                            borderRadius: '50%'
                        }}
                    />
                    <span style={{
                        color: 'var(--color-white)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        TUSHAR Y. BHATT
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            style={{
                                color: 'var(--color-white)',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                position: 'relative'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'transparent',
                            color: 'var(--color-accent)',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? <FaSun /> : <FaMoon />}
                    </button>

                    <a
                        href="#contact"
                        style={{
                            padding: '0.6rem 1.5rem',
                            backgroundColor: 'transparent',
                            border: '1px solid var(--color-accent)',
                            color: 'var(--color-accent)',
                            borderRadius: '2px',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--color-accent)'; e.target.style.color = 'var(--color-primary)'; }}
                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--color-accent)'; }}
                    >
                        Consultation
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', color: 'var(--color-white)', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            backgroundColor: 'var(--color-navy)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{ color: 'var(--color-white)', fontSize: '1.1rem', textAlign: 'center' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => { toggleTheme(); setIsOpen(false); }}
                            style={{
                                background: 'transparent',
                                color: 'var(--color-accent)',
                                fontSize: '1.2rem',
                                margin: '0 auto'
                            }}
                        >
                            {isDark ? "Light Mode" : "Dark Mode"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-accent);
          transition: width 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
