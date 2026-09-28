import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose, MdLightMode, MdDarkMode, MdGavel, MdPhone, MdTranslate } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import logoIcon from '../assets/logo-icon.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        if (nextDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    };

    const navLinks = [
        { name: t.nav.home, href: '#hero' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.practice, href: '#practice-areas' },
        { name: t.nav.cases, href: '#cases' },
        { name: t.nav.testimonials, href: '#testimonials' },
        { name: t.nav.faq, href: '#faq' },
        { name: t.nav.contact, href: '#contact-info' },
    ];

    return (
        <nav 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: scrolled 
                    ? (isDark ? 'rgba(12, 18, 28, 0.96)' : 'rgba(10, 28, 61, 0.96)') 
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                padding: scrolled ? '0.65rem 0' : '1.15rem 0',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid transparent',
                boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.25)' : 'none'
            }}
            aria-label="Main Navigation"
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Brand / Logo */}
                <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
                    <div style={{
                        background: '#ffffff',
                        padding: '5px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px solid var(--md-sys-color-tertiary)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}>
                        <img
                            src={logoIcon}
                            alt="Advocate Tushar Bhatt Emblem"
                            style={{
                                height: '36px',
                                width: '36px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    <div>
                        <div style={{
                            color: '#ffffff',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            letterSpacing: '0.8px',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: 1.15
                        }}>
                            {language === 'hi' ? 'तुषार वाई. भट्ट' : 'TUSHAR Y. BHATT'}
                        </div>
                        <div style={{
                            color: 'var(--md-sys-color-tertiary)',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            letterSpacing: '0.8px',
                            textTransform: 'uppercase'
                        }}>
                            {language === 'hi' ? 'अधिवक्ता • 25 वर्षों का अनुभव' : 'Advocate • 25 Years Experience'}
                        </div>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="nav-item-link"
                                style={{
                                    color: '#f0f4fc',
                                    fontSize: '0.88rem',
                                    fontWeight: 500,
                                    padding: '0.45rem 0.75rem',
                                    borderRadius: 'var(--md-sys-shape-corner-full)',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* M3 Language Switcher Pill */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 'var(--md-sys-shape-corner-full)',
                        padding: '3px',
                        gap: '2px'
                    }}>
                        <button
                            onClick={() => setLanguage('en')}
                            style={{
                                padding: '0.3rem 0.65rem',
                                borderRadius: 'var(--md-sys-shape-corner-full)',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                background: language === 'en' ? 'var(--md-sys-color-tertiary)' : 'transparent',
                                color: language === 'en' ? '#000000' : '#ffffff',
                                transition: 'all 0.2s ease'
                            }}
                            title="Switch to English"
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('hi')}
                            style={{
                                padding: '0.3rem 0.65rem',
                                borderRadius: 'var(--md-sys-shape-corner-full)',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                                background: language === 'hi' ? 'var(--md-sys-color-tertiary)' : 'transparent',
                                color: language === 'hi' ? '#000000' : '#ffffff',
                                transition: 'all 0.2s ease'
                            }}
                            title="हिन्दी में देखें"
                        >
                            हिन्दी
                        </button>
                    </div>

                    {/* M3 Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'var(--md-sys-color-tertiary)',
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.15rem',
                            transition: 'all 0.25s ease'
                        }}
                        aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
                        title={isDark ? "Light Mode" : "Dark Mode"}
                    >
                        {isDark ? <MdLightMode /> : <MdDarkMode />}
                    </button>

                    {/* Quick Call Pill */}
                    <a
                        href="tel:+919425486154"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            color: '#ffffff',
                            fontSize: '0.84rem',
                            fontWeight: 600,
                            padding: '0.45rem 0.85rem',
                            borderRadius: 'var(--md-sys-shape-corner-full)',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            textDecoration: 'none'
                        }}
                    >
                        <MdPhone style={{ color: 'var(--md-sys-color-tertiary)' }} />
                        <span>+91 94254 86154</span>
                    </a>

                    {/* Consultation CTA Button */}
                    <a
                        href="#contact"
                        className="m3-btn m3-btn-filled"
                        style={{
                            padding: '0.55rem 1.25rem',
                            fontSize: '0.86rem',
                            minHeight: '38px'
                        }}
                    >
                        <MdGavel />
                        <span>{t.nav.consultation}</span>
                    </a>
                </div>

                {/* Mobile Controls */}
                <div style={{ display: 'none', alignItems: 'center', gap: '0.6rem' }} className="mobile-toggle-group">
                    {/* Mobile Language Button */}
                    <button
                        onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
                        style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            border: '1px solid var(--md-sys-color-tertiary)',
                            color: 'var(--md-sys-color-tertiary)',
                            padding: '0.35rem 0.65rem',
                            borderRadius: 'var(--md-sys-shape-corner-full)',
                            fontSize: '0.8rem',
                            fontWeight: 700
                        }}
                    >
                        {language === 'hi' ? 'EN' : 'हिन्दी'}
                    </button>

                    <div 
                        className="mobile-toggle" 
                        style={{ 
                            color: '#ffffff', 
                            fontSize: '1.75rem', 
                            cursor: 'pointer',
                            padding: '0.4rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {isOpen ? <MdClose /> : <MdMenu />}
                    </div>
                </div>
            </div>

            {/* Mobile Sheet / Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            backgroundColor: isDark ? '#0c121c' : '#0a1c3d',
                            padding: '1.75rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                            borderBottom: '2px solid var(--md-sys-color-tertiary)'
                        }}
                    >
                        <div style={{ 
                            fontSize: '0.78rem', 
                            color: 'var(--md-sys-color-tertiary)', 
                            fontWeight: 700, 
                            letterSpacing: '1px', 
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }}>
                            {language === 'hi' 
                                ? 'एडवोकेट तुषार वाई. भट्ट • 25 वर्षों का अनुभव'
                                : 'Advocate Tushar Y. Bhatt • 25 Years Experience'}
                        </div>

                        {/* Mobile Language Switcher */}
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            gap: '0.5rem', 
                            padding: '0.35rem', 
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: 'var(--md-sys-shape-corner-full)'
                        }}>
                            <button
                                onClick={() => setLanguage('en')}
                                style={{
                                    flex: 1,
                                    padding: '0.5rem',
                                    borderRadius: 'var(--md-sys-shape-corner-full)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    background: language === 'en' ? 'var(--md-sys-color-tertiary)' : 'transparent',
                                    color: language === 'en' ? '#000000' : '#ffffff'
                                }}
                            >
                                English
                            </button>
                            <button
                                onClick={() => setLanguage('hi')}
                                style={{
                                    flex: 1,
                                    padding: '0.5rem',
                                    borderRadius: 'var(--md-sys-shape-corner-full)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    background: language === 'hi' ? 'var(--md-sys-color-tertiary)' : 'transparent',
                                    color: language === 'hi' ? '#000000' : '#ffffff'
                                }}
                            >
                                हिन्दी
                            </button>
                        </div>

                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{ 
                                    color: '#ffffff', 
                                    fontSize: '1.05rem', 
                                    fontWeight: 600,
                                    padding: '0.7rem 1rem',
                                    borderRadius: 'var(--md-sys-shape-corner-sm)',
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <span>{link.name}</span>
                                <span style={{ color: 'var(--md-sys-color-tertiary)' }}>→</span>
                            </a>
                        ))}

                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                            <a 
                                href="tel:+919425486154" 
                                className="m3-btn m3-btn-outlined-light" 
                                style={{ flex: 1, padding: '0.7rem' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <MdPhone />
                                <span>{t.nav.callOffice}</span>
                            </a>

                            <a 
                                href="#contact" 
                                className="m3-btn m3-btn-filled" 
                                style={{ flex: 1, padding: '0.7rem' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <MdGavel />
                                <span>{t.nav.consultation}</span>
                            </a>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
                            <button
                                onClick={toggleTheme}
                                style={{
                                    background: 'transparent',
                                    color: 'var(--md-sys-color-tertiary)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1rem'
                                }}
                            >
                                {isDark ? <MdLightMode /> : <MdDarkMode />}
                                <span>{isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 960px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle-group { display: flex !important; }
                }
                .nav-item-link:hover {
                    background-color: rgba(255, 255, 255, 0.12);
                    color: var(--md-sys-color-tertiary) !important;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
