import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logoFull from '../assets/logo-full.png';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#020c1b', color: 'var(--color-gray-light)', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <img
                        src={logoFull}
                        alt="Tushar Y. Bhatt"
                        style={{
                            height: '80px',
                            width: 'auto',
                            background: 'white',
                            padding: '10px',
                            borderRadius: '4px'
                        }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            Advocate & Legal Consultant.<br />
                            Providing trusted legal solutions with integrity and excellence.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />].map((icon, i) => (
                                <a key={i} href="#" style={{
                                    width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--color-gray-light)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-gray-light)'; e.currentTarget.style.color = 'var(--color-gray-light)'; }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--color-white)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none' }}>
                            {['Home', 'About Us', 'Practice Areas', 'Contact'].map((item, i) => (
                                <li key={i} style={{ marginBottom: '0.8rem' }}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} style={{ transition: 'color 0.3s' }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                                        onMouseLeave={(e) => e.target.style.color = 'inherit'}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 style={{ color: 'var(--color-white)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Visit Us</h4>
                        <p style={{ lineHeight: '1.8' }}>
                            17-B Arihant Vikram Nagar,<br />
                            Sethi Nagar, Ujjain,<br />
                            Madhya Pradesh, India, 456010
                        </p>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Tushar Y. Bhatt, Advocate. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
