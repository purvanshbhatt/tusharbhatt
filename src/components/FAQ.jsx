// FAQ.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    {
        question: 'What are your consultation fees?',
        answer: 'Initial consultation is free. Subsequent sessions are billed at INR 2,500 per hour.'
    },
    {
        question: 'Do you handle cases outside India?',
        answer: 'Yes, we provide legal advice for international matters via video conference.'
    },
    {
        question: 'How quickly can you take a case?',
        answer: 'We aim to start working on a new case within 3 business days after the initial meeting.'
    },
    {
        question: 'What areas of law do you specialize in?',
        answer: 'Civil Litigation, Family Law, Corporate Law, Property Disputes, Criminal Defense, Legal Consultation.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = index => setOpenIndex(openIndex === index ? null : index);

    return (
        <section id="faq" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--bg-section-secondary)' }}>
            <div className="container">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-accent"
                    style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}
                >
                    Frequently Asked Questions
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ color: 'var(--text-heading)', fontSize: '2.5rem' }}
                >
                    FAQs
                </motion.h2>
                <div style={{ marginTop: 'var(--spacing-lg)' }}>
                    {faqs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{ marginBottom: '1rem', backgroundColor: 'var(--bg-card)', padding: '1rem', borderRadius: '6px' }}
                        >
                            <div
                                onClick={() => toggle(i)}
                                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                            >
                                <h4 style={{ margin: 0, color: 'var(--text-heading)' }}>{item.question}</h4>
                                {openIndex === i ? <FaChevronUp style={{ color: 'var(--text-heading)' }} /> : <FaChevronDown style={{ color: 'var(--text-heading)' }} />}
                            </div>
                            {openIndex === i && (
                                <p style={{ marginTop: '0.5rem', color: 'var(--text-body)' }}>{item.answer}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
