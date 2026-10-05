import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    MdMenu, 
    MdClose, 
    MdLightMode, 
    MdDarkMode, 
    MdGavel, 
    MdExpandMore,
    MdFormatQuote,
    MdHelpOutline,
    MdBalance,
    MdPeople,
    MdWork,
    MdLocationOn,
    MdInfoOutline,
    MdSchedule
} from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import logoIcon from '../assets/logo-icon.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const moreRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close "More" dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (moreRef.current && !moreRef.current.contains(e.target)) {
                setMoreOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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

    // Primary top-level desktop links (clean and uncluttered)
    const primaryNavLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.practice, href: '#practice-areas' },
        { name: t.nav.docket, href: '#latest-cases' },
        { name: t.nav.cases, href: '#cases' },
        { name: t.nav.team, href: '#team' },
        { name: t.nav.contact, href: '#contact-info' },
    ];

    // Secondary items inside the "More" dropdown
    const secondaryNavLinks = [
        { name: t.nav.careersFull, href: '#careers', icon: <MdWork /> },
        { name: t.nav.testimonials, href: '#testimonials', icon: <MdFormatQuote /> },
        { name: t.nav.faq, href: '#faq', icon: <MdHelpOutline /> },
    ];

    // Complete list for mobile drawer with icons and sections
    const mobileNavLinks = [
        { name: t.nav.about, href: '#about', icon: <MdInfoOutline /> },
        { name: t.nav.practice, href: '#practice-areas', icon: <MdBalance /> },
        { name: t.nav.docket, href: '#latest-cases', icon: <MdSchedule /> },
        { name: t.nav.cases, href: '#cases', icon: <MdGavel /> },
        { name: t.nav.team, href: '#team', icon: <MdPeople /> },
        { name: t.nav.careersFull, href: '#careers', icon: <MdWork /> },
        { name: t.nav.testimonials, href: '#testimonials', icon: <MdFormatQuote /> },
        { name: t.nav.faq, href: '#faq', icon: <MdHelpOutline /> },
        { name: t.nav.contact, href: '#contact-info', icon: <MdLocationOn /> },
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
                    ? (isDark ? 'rgba(10, 16, 26, 0.97)' : 'rgba(8, 22, 48, 0.97)') 
                    : (isDark ? 'rgba(10, 16, 26, 0.75)' : 'rgba(8, 22, 48, 0.75)'),
                backdropFilter: 'blur(16px)',
                padding: scrolled ? '0.55rem 0' : '0.85rem 0',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: scrolled ? '0 4px 24px rgba(0, 0, 0, 0.35)' : 'none'
            }}
            aria-label="Main Navigation"
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Brand / Logo */}
                <a 
                    href="#hero" 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px', 
                        textDecoration: 'none',
                        flexShrink: 0
                    }}
                >
                    <div style={{
                        background: '#ffffff',
                        padding: '4px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px solid var(--md-sys-color-tertiary)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}>
                        <img
                            src={logoIcon}
                            alt="Advocate Tushar Bhatt Emblem"
                            style={{
                                height: '34px',
                                width: '34px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    <div>
                        <div style={{
                            color: '#ffffff',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            letterSpacing: '0.6px',
                            fontFamily: 'var(--font-heading)',
                            lineHeight: 1.15
                        }}>
                            {language === 'hi' ? 'तुषार वाई. भट्ट' : 'TUSHAR Y. BHATT'}
                        </div>
                        <div style={{
                            color: 'var(--md-sys-color-tertiary)',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            letterSpacing: '1.2px',
                            textTransform: 'uppercase'
                        }}>
                            {language === 'hi' ? 'अधिवक्ता' : 'ADVOCATE'}
                        </div>
                    </div>
                </a>

                {/* Desktop Menu (Uncluttered, with More dropdown) */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        {primaryNavLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="nav-item-link"
                                style={{
                                    color: '#e8edf8',
                                    fontSize: '0.86rem',
                                    fontWeight: 500,
                                    padding: '0.45rem 0.75rem',
                                    borderRadius: 'var(--md-sys-shape-corner-full)',
                                    transition: 'all 0.2s ease',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* More Dropdown (for Testimonials & FAQ) */}
                        <div ref={moreRef} style={{ position: 'relative' }}>
                            <button
                                onClick={() => setMoreOpen(!moreOpen)}
                                onMouseEnter={() => setMoreOpen(true)}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    background: moreOpen ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                                    color: moreOpen ? 'var(--md-sys-color-tertiary)' : '#e8edf8',
                                    fontSize: '0.86rem',
                                    fontWeight: 500,
                                    padding: '0.45rem 0.75rem',
                                    borderRadius: 'var(--md-sys-shape-corner-full)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                                aria-expanded={moreOpen}
                            >
                                <span>{t.nav.more}</span>
                                <MdExpandMore style={{ 
                                    transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease',
                                    fontSize: '1.1rem' 
                                }} />
                            </button>

                            <AnimatePresence>
                                {moreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                        transition={{ duration: 0.18 }}
                                        onMouseLeave={() => setMoreOpen(false)}
                                        style={{
                                            position: 'absolute',
                                            top: 'calc(100% + 6px)',
                                            right: 0,
                                            minWidth: '200px',
                                            backgroundColor: isDark ? '#111722' : '#0d1f3f',
                                            borderRadius: 'var(--md-sys-shape-corner-md)',
                                            border: '1.5px solid rgba(212, 175, 55, 0.35)',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                                            padding: '0.4rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.2rem',
                                            zIndex: 1100
                                        }}
                                    >
                                        {secondaryNavLinks.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href={item.href}
                                                onClick={() => setMoreOpen(false)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.65rem',
                                                    padding: '0.6rem 0.85rem',
                                                    borderRadius: 'var(--md-sys-shape-corner-sm)',
                                                    color: '#f0f4fc',
                                                    fontSize: '0.86rem',
                                                    fontWeight: 500,
                                                    textDecoration: 'none',
                                                    transition: 'all 0.15s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.15)';
                                                    e.currentTarget.style.color = 'var(--md-sys-color-tertiary)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                    e.currentTarget.style.color = '#f0f4fc';
                                                }}
                                            >
                                                <span style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.1rem' }}>
                                                    {item.icon}
                                                </span>
                                                <span>{item.name}</span>
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* M3 Language Switcher Pill */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        borderRadius: 'var(--md-sys-shape-corner-full)',
                        padding: '2px',
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
                                border: 'none',
                                cursor: 'pointer',
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
                                border: 'none',
                                cursor: 'pointer',
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
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            color: isDark ? 'var(--md-sys-color-tertiary)' : '#ffffff',
                            cursor: 'pointer',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.1rem',
                            transition: 'all 0.25s ease'
                        }}
                        aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
                        title={isDark ? "Light Mode" : "Dark Mode"}
                    >
                        {isDark ? <MdLightMode /> : <MdDarkMode />}
                    </button>

                    {/* Consultation CTA Button (Single, Clean CTA - No duplicate phone pill!) */}
                    <a
                        href="#contact-form"
                        className="m3-btn m3-btn-filled"
                        style={{
                            padding: '0.5rem 1.15rem',
                            fontSize: '0.85rem',
                            minHeight: '36px',
                            borderRadius: 'var(--md-sys-shape-corner-full)'
                        }}
                    >
                        <MdGavel />
                        <span>{t.nav.consultation}</span>
                    </a>
                </div>

                {/* Mobile Controls (Top Bar) */}
                <div style={{ display: 'none', alignItems: 'center', gap: '0.6rem' }} className="mobile-toggle-group">
                    {/* Mobile Language Button */}
                    <button
                        onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid var(--md-sys-color-tertiary)',
                            color: 'var(--md-sys-color-tertiary)',
                            padding: '0.35rem 0.65rem',
                            borderRadius: 'var(--md-sys-shape-corner-full)',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}
                    >
                        {language === 'hi' ? 'EN' : 'हिन्दी'}
                    </button>

                    {/* Mobile Hamburger Toggle */}
                    <button 
                        className="mobile-toggle-btn"
                        style={{ 
                            background: 'transparent',
                            border: 'none',
                            color: '#ffffff', 
                            fontSize: '1.75rem', 
                            cursor: 'pointer',
                            padding: '0.3rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {isOpen ? <MdClose /> : <MdMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Sheet / Drawer (Clean, Uncluttered, Spaced) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.22 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            backgroundColor: isDark ? '#0c1322' : '#081734',
                            padding: '1.25rem 1.25rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem',
                            boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
                            borderBottom: '2px solid var(--md-sys-color-tertiary)',
                            maxHeight: 'calc(100vh - 70px)',
                            overflowY: 'auto'
                        }}
                    >
                        {/* Drawer Header Brand */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem',
                            paddingBottom: '0.75rem',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            marginBottom: '0.25rem'
                        }}>
                            <img
                                src={logoIcon}
                                alt="Advocate Emblem"
                                style={{
                                    height: '28px',
                                    width: '28px',
                                    background: '#ffffff',
                                    borderRadius: '50%',
                                    padding: '3px'
                                }}
                            />
                            <div>
                                <div style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                                    {language === 'hi' ? 'एडवोकेट तुषार वाई. भट्ट' : 'Advocate Tushar Y. Bhatt'}
                                </div>
                                <div style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                                    {language === 'hi' ? 'उच्च न्यायालय एवं जिला न्यायालय' : 'High Court & District Judiciary'}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links Grid (Clean 2-column or list) */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                            {mobileNavLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{ 
                                        color: '#f0f4fc', 
                                        fontSize: '0.92rem', 
                                        fontWeight: 600,
                                        padding: '0.65rem 0.85rem',
                                        borderRadius: 'var(--md-sys-shape-corner-sm)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <span style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.1rem', display: 'flex' }}>
                                        {link.icon}
                                    </span>
                                    <span>{link.name}</span>
                                </a>
                            ))}
                        </div>

                        {/* Consultation Primary CTA */}
                        <div style={{ marginTop: '0.5rem' }}>
                            <a 
                                href="#contact-form" 
                                className="m3-btn m3-btn-filled" 
                                style={{ width: '100%', padding: '0.75rem', fontSize: '0.92rem' }}
                                onClick={() => setIsOpen(false)}
                            >
                                <MdGavel />
                                <span>{t.nav.consultation}</span>
                            </a>
                        </div>

                        {/* Mobile Theme Toggle */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.25rem' }}>
                            <button
                                onClick={toggleTheme}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'var(--md-sys-color-tertiary)',
                                    fontSize: '0.84rem',
                                    fontWeight: 600,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    padding: '0.35rem 0.75rem',
                                    cursor: 'pointer'
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
                @media (max-width: 1080px) {
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
