import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdExpandMore } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0); // Open first item by default
    const toggle = index => setOpenIndex(openIndex === index ? null : index);

    return (
        <section 
            id="faq" 
            style={{ 
                padding: 'var(--spacing-xl) 0', 
                backgroundColor: 'var(--bg-section-primary)',
                transition: 'background-color 0.3s ease'
            }}
        >
            <div className="container" style={{ maxWidth: '880px' }}>
                <div className="section-header">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-eyebrow">
                            {t.faq.eyebrow}
                        </span>
                        <h2 className="section-title">
                            {t.faq.title}
                        </h2>
                        <div className="legal-divider" />
                        <p className="section-subtitle">
                            {t.faq.subtitle}
                        </p>
                    </motion.div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {t.faq.items.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                style={{
                                    borderRadius: 'var(--md-sys-shape-corner-md)',
                                    backgroundColor: isOpen 
                                        ? 'var(--md-sys-color-surface-container-low)' 
                                        : 'var(--md-sys-color-surface-container-lowest)',
                                    border: `1.5px solid ${isOpen ? 'var(--md-sys-color-tertiary)' : 'var(--md-sys-color-outline-variant)'}`,
                                    overflow: 'hidden',
                                    transition: 'all 0.25s ease',
                                    boxShadow: isOpen ? 'var(--md-sys-elevation-2)' : 'none'
                                }}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '1.25rem 1.5rem',
                                        background: 'transparent',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        gap: '1rem'
                                    }}
                                >
                                    <span style={{ 
                                        fontSize: '1.05rem', 
                                        fontWeight: 700, 
                                        fontFamily: 'var(--font-heading)',
                                        color: isOpen ? 'var(--md-sys-color-tertiary)' : 'var(--text-heading)',
                                        lineHeight: 1.35
                                    }}>
                                        {item.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ 
                                            color: isOpen ? 'var(--md-sys-color-tertiary)' : 'var(--text-body)', 
                                            fontSize: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <MdExpandMore />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{
                                                padding: '0 1.5rem 1.5rem 1.5rem',
                                                borderTop: '1px solid var(--md-sys-color-outline-variant)',
                                                paddingTop: '1rem',
                                                color: 'var(--text-body)',
                                                fontSize: '0.96rem',
                                                lineHeight: 1.75
                                            }}>
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
