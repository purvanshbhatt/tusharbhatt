import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdGavel, MdShield, MdCheckCircle, MdError, MdPerson, MdEmail, MdPhone, MdCategory, MdEditNote, MdLocationCity } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        chamber: t.form.chambersList ? t.form.chambersList[0] : 'Ujjain Chamber',
        practiceArea: t.form.matters[0] || 'Civil Litigation & Writs',
        message: '',
        confidentialityConsent: true
    });
    const [status, setStatus] = useState({ type: '', text: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message || !formData.phone) {
            setStatus({ type: 'error', text: t.form.requiredError });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', text: '' });

        // Simulate secure submission
        setTimeout(() => {
            console.log('Confidential Consultation Request Submitted:', formData);
            setStatus({
                type: 'success',
                text: t.form.successMsg
            });
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                practiceArea: t.form.matters[0] || 'Civil Litigation & Writs',
                message: '',
                confidentialityConsent: true
            });

            setTimeout(() => setStatus({ type: '', text: '' }), 8000);
        }, 1000);
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.85rem',
        fontWeight: 600,
        color: 'var(--text-heading)',
        marginBottom: '0.5rem',
        letterSpacing: '0.3px'
    };

    const inputWrapperStyle = {
        position: 'relative',
        marginBottom: '1.4rem'
    };

    const inputFieldStyle = {
        width: '100%',
        padding: '0.85rem 1rem 0.85rem 2.8rem',
        border: '1.5px solid var(--md-sys-color-outline-variant)',
        borderRadius: 'var(--md-sys-shape-corner-md)',
        fontSize: '0.98rem',
        fontFamily: 'var(--font-body)',
        outline: 'none',
        transition: 'all 0.2s ease',
        backgroundColor: 'var(--md-sys-color-surface-container-lowest)',
        color: 'var(--md-sys-color-on-surface)'
    };

    const iconStyle = {
        position: 'absolute',
        left: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--md-sys-color-tertiary)',
        fontSize: '1.25rem',
        pointerEvents: 'none'
    };

    return (
        <section 
            id="contact" 
            style={{ 
                padding: 'var(--spacing-xl) 0', 
                backgroundColor: 'var(--bg-section-primary)', 
                transition: 'background-color 0.3s ease' 
            }}
        >
            <div className="container" style={{ maxWidth: '840px' }}>
                <div className="section-header">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">
                            {t.form.eyebrow}
                        </span>
                        <h2 className="section-title">
                            {t.form.title}
                        </h2>
                        <div className="legal-divider" />
                        <p className="section-subtitle">
                            {t.form.subtitle}
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="m3-card m3-card-elevated"
                    style={{ padding: '2.5rem 2rem' }}
                >
                    {/* Attorney-Client Privilege Notice Box */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--md-sys-shape-corner-md)',
                        backgroundColor: 'var(--md-sys-color-surface-container-low)',
                        border: '1px solid var(--md-sys-color-outline-variant)',
                        marginBottom: '2rem'
                    }}>
                        <MdShield style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.6rem', flexShrink: 0 }} />
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                            {t.form.privilegeNotice}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                            {/* Full Name */}
                            <div style={inputWrapperStyle}>
                                <label htmlFor="name" style={labelStyle}>{t.form.nameLabel}</label>
                                <div style={{ position: 'relative' }}>
                                    <MdPerson style={iconStyle} />
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder={t.form.namePlaceholder}
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={inputFieldStyle}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div style={inputWrapperStyle}>
                                <label htmlFor="email" style={labelStyle}>{t.form.emailLabel}</label>
                                <div style={{ position: 'relative' }}>
                                    <MdEmail style={iconStyle} />
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder={t.form.emailPlaceholder}
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={inputFieldStyle}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                            {/* Phone Number */}
                            <div style={inputWrapperStyle}>
                                <label htmlFor="phone" style={labelStyle}>{t.form.phoneLabel}</label>
                                <div style={{ position: 'relative' }}>
                                    <MdPhone style={iconStyle} />
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder={t.form.phonePlaceholder}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={inputFieldStyle}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Practice Area Dropdown */}
                            <div style={inputWrapperStyle}>
                                <label htmlFor="practiceArea" style={labelStyle}>{t.form.matterLabel}</label>
                                <div style={{ position: 'relative' }}>
                                    <MdCategory style={iconStyle} />
                                    <select
                                        id="practiceArea"
                                        name="practiceArea"
                                        value={formData.practiceArea}
                                        onChange={handleChange}
                                        style={{
                                            ...inputFieldStyle,
                                            appearance: 'auto',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {t.form.matters.map((m, idx) => (
                                            <option key={idx} value={m}>{m}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Preferred Chamber Dropdown */}
                        {t.form.chambersList && (
                            <div style={inputWrapperStyle}>
                                <label htmlFor="chamber" style={labelStyle}>{t.form.chamberLabel}</label>
                                <div style={{ position: 'relative' }}>
                                    <MdLocationCity style={iconStyle} />
                                    <select
                                        id="chamber"
                                        name="chamber"
                                        value={formData.chamber}
                                        onChange={handleChange}
                                        style={{
                                            ...inputFieldStyle,
                                            appearance: 'auto',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {t.form.chambersList.map((ch, idx) => (
                                            <option key={idx} value={ch}>{ch}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Case Overview */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="message" style={labelStyle}>{t.form.messageLabel}</label>
                            <div style={{ position: 'relative' }}>
                                <MdEditNote style={{ ...iconStyle, top: '1.2rem', transform: 'none' }} />
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={t.form.messagePlaceholder}
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{
                                        ...inputFieldStyle,
                                        padding: '0.85rem 1rem 0.85rem 2.8rem',
                                        resize: 'vertical'
                                    }}
                                    required
                                />
                            </div>
                        </div>

                        {/* Confidentiality consent */}
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.75rem', 
                            marginBottom: '2rem',
                            cursor: 'pointer' 
                        }}>
                            <input
                                type="checkbox"
                                id="confidentialityConsent"
                                name="confidentialityConsent"
                                checked={formData.confidentialityConsent}
                                onChange={handleChange}
                                style={{ width: '18px', height: '18px', accentColor: 'var(--md-sys-color-tertiary)', cursor: 'pointer' }}
                            />
                            <label htmlFor="confidentialityConsent" style={{ fontSize: '0.88rem', color: 'var(--text-body)', cursor: 'pointer' }}>
                                {t.form.consent}
                            </label>
                        </div>

                        {/* Feedback / Status Snackbar */}
                        <AnimatePresence>
                            {status.text && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '1rem 1.25rem',
                                        borderRadius: 'var(--md-sys-shape-corner-md)',
                                        marginBottom: '1.5rem',
                                        backgroundColor: status.type === 'success' ? 'var(--md-sys-color-success-container)' : 'var(--md-sys-color-error-container)',
                                        color: status.type === 'success' ? 'var(--md-sys-color-on-success-container)' : 'var(--md-sys-color-on-error-container)',
                                        border: `1px solid ${status.type === 'success' ? 'var(--md-sys-color-success)' : 'var(--md-sys-color-error)'}`
                                    }}
                                >
                                    {status.type === 'success' ? (
                                        <MdCheckCircle style={{ fontSize: '1.5rem', flexShrink: 0 }} />
                                    ) : (
                                        <MdError style={{ fontSize: '1.5rem', flexShrink: 0 }} />
                                    )}
                                    <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{status.text}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit Button */}
                        <div style={{ textAlign: 'center' }}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="m3-btn m3-btn-filled"
                                style={{
                                    padding: '0.9rem 2.8rem',
                                    fontSize: '1rem',
                                    opacity: isSubmitting ? 0.75 : 1
                                }}
                            >
                                <MdGavel style={{ fontSize: '1.2rem' }} />
                                <span>{isSubmitting ? t.form.submitting : t.form.submit}</span>
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
