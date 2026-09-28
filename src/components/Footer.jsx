import React from 'react';
import { MdPhone, MdEmail, MdLocationOn, MdShield } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import logoFull from '../assets/logo-full.png';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer 
            style={{ 
                backgroundColor: '#071228', 
                color: '#ccd6f6', 
                padding: '4.5rem 0 2rem',
                borderTop: '2px solid rgba(212, 175, 55, 0.3)'
            }}
        >
            <div className="container">
                {/* Brand Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{ 
                        display: 'inline-block',
                        background: '#ffffff',
                        padding: '12px 20px',
                        borderRadius: 'var(--md-sys-shape-corner-md)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        border: '1.5px solid var(--md-sys-color-tertiary)'
                    }}>
                        <img
                            src={logoFull}
                            alt="Advocate Tushar Y. Bhatt - Emblem of Justice"
                            style={{
                                height: '70px',
                                width: 'auto',
                                display: 'block',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    <div style={{ 
                        fontSize: '0.85rem', 
                        color: 'var(--md-sys-color-tertiary)', 
                        fontWeight: 700, 
                        letterSpacing: '2px', 
                        textTransform: 'uppercase',
                        marginTop: '1rem' 
                    }}>
                        {t.footer.subBadge}
                    </div>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                    gap: '2.5rem', 
                    marginBottom: '3rem' 
                }}>
                    {/* Column 1: Firm Overview */}
                    <div>
                        <h4 style={{ 
                            color: '#ffffff', 
                            fontSize: '1.15rem', 
                            marginBottom: '1.25rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            {t.footer.firmName}
                        </h4>
                        <p style={{ marginBottom: '1.25rem', lineHeight: '1.8', fontSize: '0.94rem', color: '#b0bfdb' }}>
                            {t.footer.firmDesc}
                        </p>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--md-sys-color-tertiary)', fontSize: '0.88rem', fontWeight: 600 }}>
                            <MdShield style={{ fontSize: '1.2rem' }} />
                            <span>{t.footer.privilegeBadge}</span>
                        </div>
                    </div>

                    {/* Column 2: Key Practice Areas */}
                    <div>
                        <h4 style={{ 
                            color: '#ffffff', 
                            fontSize: '1.15rem', 
                            marginBottom: '1.25rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            {t.footer.focusTitle}
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.92rem', color: '#b0bfdb' }}>
                            {t.footer.focusItems.map((item, i) => (
                                <li key={i} style={{ marginBottom: '0.65rem' }}>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Navigation */}
                    <div>
                        <h4 style={{ 
                            color: '#ffffff', 
                            fontSize: '1.15rem', 
                            marginBottom: '1.25rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            {t.footer.quickTitle}
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {t.footer.quickLinks.map((item, i) => (
                                <li key={i} style={{ marginBottom: '0.65rem' }}>
                                    <a 
                                        href={item.href} 
                                        style={{ color: '#b0bfdb', fontSize: '0.92rem', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--md-sys-color-tertiary)'}
                                        onMouseLeave={(e) => e.target.style.color = '#b0bfdb'}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Chamber Details */}
                    <div>
                        <h4 style={{ 
                            color: '#ffffff', 
                            fontSize: '1.15rem', 
                            marginBottom: '1.25rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            {t.footer.chamberTitle}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', color: '#b0bfdb' }}>
                            <div style={{ display: 'flex', gap: '0.6rem' }}>
                                <MdLocationOn style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.3rem', flexShrink: 0, marginTop: '2px' }} />
                                <span>17-B Arihant Vikram Nagar, Sethi Nagar, Ujjain, MP — 456010</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.6rem' }}>
                                <MdPhone style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.2rem', flexShrink: 0 }} />
                                <a href="tel:+919425486154" style={{ color: 'inherit' }}>+91 94254 86154</a>
                            </div>
                            <div style={{ display: 'flex', gap: '0.6rem' }}>
                                <MdEmail style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.2rem', flexShrink: 0 }} />
                                <a href="mailto:adv.tusharbhatt@gmail.com" style={{ color: 'inherit' }}>adv.tusharbhatt@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bar Council of India Statutory Disclaimer */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--md-sys-shape-corner-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: '2.5rem',
                    fontSize: '0.82rem',
                    lineHeight: '1.65',
                    color: '#93a1c2'
                }}>
                    <strong style={{ color: 'var(--md-sys-color-tertiary)' }}>{t.footer.disclaimerTitle}</strong> {t.footer.disclaimer}
                </div>

                {/* Bottom Copyright */}
                <div style={{ 
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                    paddingTop: '1.5rem', 
                    textAlign: 'center', 
                    fontSize: '0.88rem',
                    color: '#8494b7'
                }}>
                    <p>{t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
