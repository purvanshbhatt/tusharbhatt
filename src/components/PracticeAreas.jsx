import React from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaBalanceScale, FaLandmark, FaBriefcase, FaHandshake, FaUsers } from 'react-icons/fa';

const practices = [
    { icon: <FaGavel />, title: 'Civil Litigation', desc: 'Expert representation in civil disputes, property matters, and contract enforcement.' },
    { icon: <FaUsers />, title: 'Family Law', desc: 'Compassionate handling of divorce, child custody, and inheritance issues.' },
    { icon: <FaBriefcase />, title: 'Corporate Law', desc: 'Strategic legal solutions for businesses, startups, and corporate entities.' },
    { icon: <FaLandmark />, title: 'Property Disputes', desc: 'Resolving complex real estate and land ownership conflicts effectively.' },
    { icon: <FaBalanceScale />, title: 'Criminal Defense', desc: 'Strong defense strategies for individuals facing criminal charges.' },
    { icon: <FaHandshake />, title: 'Legal Consultation', desc: 'Professional advisory services for preventative legal care.' },
    { icon: <FaLandmark />, title: 'Revenue Cases', desc: 'Expertise in matters related to land revenue, agricultural land disputes, and related administrative proceedings.' },
];

const PracticeAreas = () => {
    return (
        <section id="practice-areas" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--bg-section-secondary)', transition: 'background-color 0.3s ease' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent"
                        style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}
                    >
                        Our Expertise
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ color: 'var(--text-heading)', fontSize: '2.5rem' }}
                    >
                        Practice Areas
                    </motion.h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {practices.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                padding: '2.5rem',
                                borderRadius: '4px',
                                borderBottom: '3px solid transparent',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderBottom = '3px solid var(--color-accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderBottom = '3px solid transparent'}
                        >
                            <div style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                                {item.icon}
                            </div>
                            <h4 style={{ color: 'var(--text-heading)', fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h4>
                            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
