import React from 'react';
import { motion } from 'framer-motion';
import { 
    MdGavel, 
    MdBalance, 
    MdHomeWork, 
    MdFamilyRestroom, 
    MdCorporateFare, 
    MdShield, 
    MdOutlineAccountBalance, 
    MdDescription,
    MdArrowForward
} from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const practiceIcons = [
    <MdGavel />, 
    <MdHomeWork />, 
    <MdBalance />, 
    <MdFamilyRestroom />, 
    <MdCorporateFare />, 
    <MdShield />, 
    <MdOutlineAccountBalance />, 
    <MdDescription />
];

const PracticeAreas = () => {
    const { t } = useLanguage();

    return (
        <section 
            id="practice-areas" 
            style={{ 
                padding: 'var(--spacing-xl) 0', 
                backgroundColor: 'var(--bg-section-secondary)', 
                transition: 'background-color 0.3s ease' 
            }}
        >
            <div className="container">
                <div className="section-header">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">
                            {t.practice.eyebrow}
                        </span>
                        <h2 className="section-title">
                            {t.practice.title}
                        </h2>
                        <div className="legal-divider" />
                        <p className="section-subtitle">
                            {t.practice.subtitle}
                        </p>
                    </motion.div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.75rem'
                }}>
                    {t.practice.areas.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.5 }}
                            className="m3-card m3-card-elevated"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                {/* Top Icon & Tag */}
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'flex-start',
                                    marginBottom: '1.25rem' 
                                }}>
                                    <div style={{
                                        width: '54px',
                                        height: '54px',
                                        borderRadius: 'var(--md-sys-shape-corner-md)',
                                        backgroundColor: 'var(--md-sys-color-surface-container)',
                                        color: 'var(--md-sys-color-tertiary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.8rem',
                                        boxShadow: 'var(--md-sys-elevation-1)'
                                    }}>
                                        {practiceIcons[index] || <MdBalance />}
                                    </div>

                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                        padding: '0.25rem 0.65rem',
                                        borderRadius: 'var(--md-sys-shape-corner-full)',
                                        backgroundColor: 'var(--md-sys-color-surface-container-high)',
                                        color: 'var(--md-sys-color-on-surface-variant)'
                                    }}>
                                        {item.tag}
                                    </span>
                                </div>

                                <h3 style={{ 
                                    color: 'var(--text-heading)', 
                                    fontSize: '1.25rem', 
                                    fontWeight: 700,
                                    marginBottom: '0.75rem',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{ 
                                    color: 'var(--text-body)', 
                                    fontSize: '0.92rem', 
                                    lineHeight: 1.65,
                                    marginBottom: '1.5rem' 
                                }}>
                                    {item.desc}
                                </p>
                            </div>

                            <div>
                                <a 
                                    href="#contact" 
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        fontSize: '0.88rem',
                                        fontWeight: 700,
                                        color: 'var(--md-sys-color-tertiary)',
                                        letterSpacing: '0.3px'
                                    }}
                                >
                                    <span>{t.practice.requestAdvisory}</span>
                                    <MdArrowForward style={{ fontSize: '1rem' }} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
