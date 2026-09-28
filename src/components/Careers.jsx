import React from 'react';
import { motion } from 'framer-motion';
import { 
    MdWork, 
    MdSchool, 
    MdLocationOn, 
    MdCheckCircle, 
    MdEmail, 
    MdPhone, 
    MdOpenInNew, 
    MdHelpOutline,
    MdGavel,
    MdOutlineAssignment,
    MdStarOutline
} from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const Careers = () => {
    const { t } = useLanguage();
    const careersData = t.careers;

    if (!careersData) return null;

    return (
        <section 
            id="careers" 
            style={{ 
                padding: 'var(--spacing-xl) 0', 
                backgroundColor: 'var(--bg-section-primary)',
                transition: 'background-color 0.3s ease'
            }}
        >
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">
                            {careersData.eyebrow}
                        </span>
                        <h2 className="section-title">
                            {careersData.title}
                        </h2>
                        <div className="legal-divider" />
                        <p className="section-subtitle">
                            {careersData.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Mentorship & Chamber Culture Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="m3-card m3-card-elevated"
                    style={{
                        marginBottom: '3rem',
                        backgroundColor: 'var(--bg-card)',
                        borderLeft: '4px solid var(--md-sys-color-tertiary)'
                    }}
                >
                    <div style={{ marginBottom: '1.25rem' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.3rem 0.8rem',
                            borderRadius: 'var(--md-sys-shape-corner-full)',
                            backgroundColor: 'var(--md-sys-color-tertiary-container)',
                            color: 'var(--md-sys-color-on-tertiary-container)',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            marginBottom: '0.6rem'
                        }}>
                            <MdStarOutline /> {careersData.cultureBadge}
                        </span>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            color: 'var(--text-heading)',
                            marginBottom: '0.6rem'
                        }}>
                            {careersData.cultureTitle}
                        </h3>
                        <p style={{
                            color: 'var(--text-body)',
                            fontSize: '0.98rem',
                            lineHeight: 1.7,
                            maxWidth: '960px'
                        }}>
                            {careersData.cultureDesc}
                        </p>
                    </div>

                    {/* Mentorship Highlights Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                        gap: '1.25rem',
                        marginTop: '1.5rem',
                        borderTop: '1px solid var(--md-sys-color-outline-variant)',
                        paddingTop: '1.5rem'
                    }}>
                        {careersData.perks.map((perk, idx) => (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: 700,
                                    fontSize: '0.92rem',
                                    color: 'var(--text-heading)'
                                }}>
                                    <MdCheckCircle style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.1rem', flexShrink: 0 }} />
                                    <span>{perk.title}</span>
                                </div>
                                <p style={{
                                    fontSize: '0.84rem',
                                    lineHeight: 1.55,
                                    color: 'var(--text-body)',
                                    margin: 0
                                }}>
                                    {perk.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Chamber Openings Title */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.65rem',
                        color: 'var(--text-heading)',
                        marginBottom: '0.5rem'
                    }}>
                        {careersData.openingsTitle}
                    </h3>
                    <div className="legal-divider" style={{ margin: '0 auto' }} />
                </div>

                {/* Open Positions Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3.5rem'
                }}>
                    {careersData.openings.map((job, i) => (
                        <motion.div
                            key={job.id || i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="m3-card m3-card-elevated"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative'
                            }}
                        >
                            <div>
                                {/* Header / Badge */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '1rem',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                        padding: '0.3rem 0.75rem',
                                        borderRadius: 'var(--md-sys-shape-corner-full)',
                                        backgroundColor: 'var(--md-sys-color-surface-container-high)',
                                        color: 'var(--md-sys-color-tertiary)',
                                        border: '1px solid var(--md-sys-color-outline-variant)'
                                    }}>
                                        {job.badge}
                                    </span>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        fontSize: '0.78rem',
                                        color: 'var(--text-body)',
                                        fontWeight: 600
                                    }}>
                                        <MdLocationOn style={{ color: 'var(--md-sys-color-tertiary)' }} />
                                        <span>{job.location}</span>
                                    </div>
                                </div>

                                <h4 style={{
                                    fontSize: '1.3rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--text-heading)',
                                    marginBottom: '0.75rem',
                                    lineHeight: 1.3
                                }}>
                                    {job.title}
                                </h4>

                                {/* Eligibility Box */}
                                <div style={{
                                    padding: '0.85rem 1rem',
                                    borderRadius: 'var(--md-sys-shape-corner-sm)',
                                    backgroundColor: 'var(--md-sys-color-surface-container)',
                                    border: '1px solid var(--md-sys-color-outline-variant)',
                                    marginBottom: '1.25rem',
                                    fontSize: '0.86rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-body)'
                                }}>
                                    <strong style={{ color: 'var(--text-heading)', display: 'block', marginBottom: '0.2rem' }}>
                                        Eligibility / Qualifications:
                                    </strong>
                                    {job.eligibility}
                                </div>

                                {/* Responsibilities List */}
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        color: 'var(--text-heading)',
                                        marginBottom: '0.6rem'
                                    }}>
                                        Key Responsibilities:
                                    </div>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem'
                                    }}>
                                        {job.responsibilities.map((resp, rIdx) => (
                                            <li 
                                                key={rIdx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '0.5rem',
                                                    fontSize: '0.86rem',
                                                    lineHeight: 1.5,
                                                    color: 'var(--text-body)'
                                                }}
                                            >
                                                <span style={{ color: 'var(--md-sys-color-tertiary)', marginTop: '2px' }}>•</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Action CTA */}
                            <div style={{
                                borderTop: '1px solid var(--md-sys-color-outline-variant)',
                                paddingTop: '1.25rem',
                                marginTop: '1rem'
                            }}>
                                <a
                                    href={`mailto:adv.tusharbhatt@gmail.com?subject=${encodeURIComponent(`[Application] ${job.title} - Inquiry`)}&body=${encodeURIComponent(`Respected Advocate Tushar Bhatt,\n\nI am writing to express my keen interest in the ${job.title} opportunity at your chambers.\n\nName:\nContact Number:\nLaw School / Bar Council Enrollment:\nPreferred Chamber (Ujjain / Thandla):\nAvailability:\n\nPlease find attached my Curriculum Vitae (CV) and sample legal draft for your review.\n\nSincerely,\n`)}`}
                                    className="m3-btn m3-btn-filled"
                                    style={{
                                        width: '100%',
                                        fontSize: '0.88rem',
                                        padding: '0.65rem 1rem'
                                    }}
                                >
                                    <MdEmail /> {job.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Application Process Walkthrough */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        padding: '2.5rem',
                        borderRadius: 'var(--md-sys-shape-corner-lg)',
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--md-sys-color-outline-variant)',
                        marginBottom: '3rem'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            color: 'var(--text-heading)',
                            marginBottom: '0.4rem'
                        }}>
                            {careersData.howToApplyTitle}
                        </h3>
                        <p style={{
                            color: 'var(--text-body)',
                            fontSize: '0.94rem',
                            maxWidth: '720px',
                            margin: '0 auto'
                        }}>
                            {careersData.howToApplyDesc}
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.75rem',
                        marginBottom: '2rem'
                    }}>
                        {careersData.steps.map((st, sIdx) => (
                            <div key={sIdx} style={{
                                padding: '1.25rem',
                                borderRadius: 'var(--md-sys-shape-corner-md)',
                                backgroundColor: 'var(--md-sys-color-surface-container-low)',
                                border: '1px solid var(--md-sys-color-outline-variant)',
                                position: 'relative'
                            }}>
                                <div style={{
                                    fontSize: '1.8rem',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    color: 'var(--md-sys-color-tertiary)',
                                    lineHeight: 1,
                                    marginBottom: '0.6rem'
                                }}>
                                    {st.step}
                                </div>
                                <h4 style={{
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    color: 'var(--text-heading)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {st.title}
                                </h4>
                                <p style={{
                                    fontSize: '0.86rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-body)',
                                    margin: 0
                                }}>
                                    {st.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Quick Chamber Contact Box */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1.5rem',
                        padding: '1.25rem 1.5rem',
                        borderRadius: 'var(--md-sys-shape-corner-md)',
                        backgroundColor: 'var(--md-sys-color-surface-container-high)',
                        border: '1px solid var(--md-sys-color-tertiary)'
                    }}>
                        <div>
                            <div style={{ fontSize: '0.84rem', color: 'var(--text-body)', marginBottom: '0.2rem' }}>
                                {careersData.emailLabel}
                            </div>
                            <a 
                                href="mailto:adv.tusharbhatt@gmail.com"
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    color: 'var(--md-sys-color-tertiary)',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.4rem'
                                }}
                            >
                                <MdEmail /> adv.tusharbhatt@gmail.com
                            </a>
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-body)', marginTop: '0.3rem' }}>
                                ℹ️ {careersData.subjectNote}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            <a
                                href="mailto:adv.tusharbhatt@gmail.com?subject=Chamber%20Application%20Inquiry"
                                className="m3-btn m3-btn-filled"
                                style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}
                            >
                                <MdEmail /> {careersData.applyEmailBtn}
                            </a>
                            <a
                                href="tel:+919425486154"
                                className="m3-btn m3-btn-outlined"
                                style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}
                            >
                                <MdPhone /> {careersData.callChamberBtn}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Careers;
