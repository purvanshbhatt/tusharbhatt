import React from 'react';
import { motion } from 'framer-motion';
import { 
    MdGavel, 
    MdBalance, 
    MdSearch, 
    MdFolderShared, 
    MdVerified, 
    MdSchool, 
    MdLocationOn, 
    MdAccountCircle,
    MdShield,
    MdEmail,
    MdPhone,
    MdHistoryEdu
} from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import advocatePhoto from '../assets/tushar-bhatt.png';

const Team = () => {
    const { t } = useLanguage();
    const teamData = t.team;

    if (!teamData) return null;

    const iconMap = {
        balance: <MdBalance />,
        gavel: <MdGavel />,
        search: <MdSearch />,
        records: <MdFolderShared />
    };

    return (
        <section 
            id="team" 
            style={{ 
                padding: 'var(--spacing-xl) 0', 
                backgroundColor: 'var(--bg-section-secondary)',
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
                            {teamData.eyebrow}
                        </span>
                        <h2 className="section-title">
                            {teamData.title}
                        </h2>
                        <div className="legal-divider" />
                        <p className="section-subtitle">
                            {teamData.subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Lead Advocate Spotlight Card (Senior Counsel & Chamber Head) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="m3-card m3-card-elevated"
                    style={{
                        marginBottom: '3rem',
                        border: '1.5px solid var(--md-sys-color-tertiary)',
                        backgroundColor: 'var(--bg-card)',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2.5rem',
                        alignItems: 'center'
                    }}>
                        {/* Advocate Visual & Credentials */}
                        <div style={{ position: 'relative', textAlign: 'center' }}>
                            <div style={{
                                position: 'relative',
                                display: 'inline-block',
                                maxWidth: '340px',
                                width: '100%'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '-10px',
                                    right: '10px',
                                    bottom: '10px',
                                    border: '2px solid var(--md-sys-color-tertiary)',
                                    borderRadius: 'var(--md-sys-shape-corner-lg)',
                                    zIndex: 0
                                }} />
                                <img
                                    src={advocatePhoto}
                                    alt={teamData.leadAdvocate.name}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '380px',
                                        objectFit: 'cover',
                                        borderRadius: 'var(--md-sys-shape-corner-md)',
                                        position: 'relative',
                                        zIndex: 1,
                                        boxShadow: 'var(--md-sys-elevation-3)',
                                        display: 'block'
                                    }}
                                />
                            </div>

                            <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center' }}>
                                <span className="m3-badge-gold">
                                    <MdVerified /> {teamData.leadAdvocate.badge}
                                </span>
                            </div>
                        </div>

                        {/* Advocate Details */}
                        <div>
                            <div style={{
                                fontSize: '0.85rem',
                                color: 'var(--md-sys-color-tertiary)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '0.4rem'
                            }}>
                                {teamData.seniorCounselLabel}
                            </div>

                            <h3 style={{
                                fontSize: '2rem',
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--text-heading)',
                                marginBottom: '0.2rem',
                                lineHeight: 1.2
                            }}>
                                {teamData.leadAdvocate.name}
                            </h3>

                            <div style={{
                                fontSize: '1rem',
                                color: 'var(--md-sys-color-tertiary)',
                                fontWeight: 600,
                                marginBottom: '0.75rem'
                            }}>
                                {teamData.leadAdvocate.alias} • {teamData.leadAdvocate.role}
                            </div>

                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.35rem 0.85rem',
                                backgroundColor: 'var(--md-sys-color-surface-container-high)',
                                borderRadius: 'var(--md-sys-shape-corner-sm)',
                                fontSize: '0.84rem',
                                color: 'var(--text-heading)',
                                fontWeight: 600,
                                marginBottom: '1.25rem'
                            }}>
                                <MdSchool style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.1rem' }} />
                                <span>{teamData.leadAdvocate.barCouncil}</span>
                            </div>

                            <p style={{
                                color: 'var(--text-body)',
                                fontSize: '1rem',
                                lineHeight: 1.75,
                                marginBottom: '1.5rem'
                            }}>
                                {teamData.leadAdvocate.desc}
                            </p>

                            {/* Jurisdictions & Key Practice Areas */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.8px',
                                    color: 'var(--text-heading)',
                                    marginBottom: '0.6rem'
                                }}>
                                    Active Jurisdictions & Benches:
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {teamData.leadAdvocate.jurisdictions.map((bench, idx) => (
                                        <span 
                                            key={idx}
                                            style={{
                                                fontSize: '0.78rem',
                                                padding: '0.3rem 0.65rem',
                                                borderRadius: 'var(--md-sys-shape-corner-full)',
                                                backgroundColor: 'var(--md-sys-color-surface-container)',
                                                color: 'var(--text-body)',
                                                border: '1px solid var(--md-sys-color-outline-variant)'
                                            }}
                                        >
                                            🏛️ {bench}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <a 
                                    href="#contact-form" 
                                    className="m3-btn m3-btn-filled"
                                    style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
                                >
                                    <MdBalance /> Schedule Consultation
                                </a>
                                <a 
                                    href="#cases" 
                                    className="m3-btn m3-btn-outlined"
                                    style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
                                >
                                    <MdGavel /> View 350+ eCourts Records
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Associate Legal Team & Support Staff Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.75rem',
                    marginBottom: '3.5rem'
                }}>
                    {teamData.members.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="m3-card m3-card-elevated"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative'
                            }}
                        >
                            <div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: 'var(--md-sys-shape-corner-md)',
                                        backgroundColor: 'var(--md-sys-color-surface-container-high)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--md-sys-color-tertiary)',
                                        fontSize: '1.5rem',
                                        border: '1px solid var(--md-sys-color-outline-variant)'
                                    }}>
                                        {iconMap[member.icon] || <MdBalance />}
                                    </div>
                                    <span style={{
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                        padding: '0.25rem 0.6rem',
                                        borderRadius: 'var(--md-sys-shape-corner-full)',
                                        backgroundColor: 'var(--md-sys-color-surface-container)',
                                        color: 'var(--md-sys-color-tertiary)',
                                        border: '1px solid var(--md-sys-color-outline-variant)'
                                    }}>
                                        Chamber Wing
                                    </span>
                                </div>

                                <h4 style={{
                                    fontSize: '1.2rem',
                                    fontFamily: 'var(--font-heading)',
                                    color: 'var(--text-heading)',
                                    marginBottom: '0.25rem'
                                }}>
                                    {member.role}
                                </h4>

                                <div style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--md-sys-color-tertiary)',
                                    fontWeight: 600,
                                    marginBottom: '0.6rem'
                                }}>
                                    {member.area}
                                </div>

                                <div style={{
                                    fontSize: '0.78rem',
                                    color: 'var(--text-body)',
                                    fontStyle: 'italic',
                                    marginBottom: '1rem'
                                }}>
                                    {member.qualification}
                                </div>

                                <p style={{
                                    color: 'var(--text-body)',
                                    fontSize: '0.92rem',
                                    lineHeight: 1.65,
                                    marginBottom: '1.25rem'
                                }}>
                                    {member.focus}
                                </p>
                            </div>

                            <div style={{
                                borderTop: '1px solid var(--md-sys-color-outline-variant)',
                                paddingTop: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.8rem',
                                color: 'var(--text-heading)',
                                fontWeight: 600
                            }}>
                                <MdLocationOn style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1rem', flexShrink: 0 }} />
                                <span>{member.forums}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Chamber Pillars / Operational Strength */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        padding: '2rem 2.5rem',
                        borderRadius: 'var(--md-sys-shape-corner-lg)',
                        backgroundColor: 'var(--md-sys-color-surface-container-low)',
                        border: '1px solid var(--md-sys-color-outline-variant)'
                    }}
                >
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}>
                        <h3 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.45rem',
                            color: 'var(--text-heading)',
                            marginBottom: '0.5rem'
                        }}>
                            {teamData.pillarsTitle}
                        </h3>
                        <div className="legal-divider" style={{ margin: '0 auto' }} />
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.75rem'
                    }}>
                        {teamData.pillars.map((pillar, idx) => (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--md-sys-color-tertiary)',
                                    fontWeight: 700,
                                    fontSize: '0.95rem'
                                }}>
                                    <MdShield style={{ fontSize: '1.1rem' }} />
                                    <span>{pillar.title}</span>
                                </div>
                                <p style={{
                                    fontSize: '0.88rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-body)',
                                    margin: 0
                                }}>
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
