// Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Rohit Sharma',
        location: 'Mumbai, India',
        text: 'Tushar handled my civil dispute with utmost professionalism. Highly recommended!'
    },
    {
        name: 'Anita Patel',
        location: 'Ahmedabad, India',
        text: 'The family law consultation was compassionate and effective. Thank you!'
    },
    {
        name: 'Vikram Singh',
        location: 'Delhi, India',
        text: 'Corporate legal advice saved my startup from costly mistakes.'
    },
    {
        name: 'Sneha Rao',
        location: 'Bengaluru, India',
        text: 'Quick and clear guidance on property dispute. Very satisfied.'
    }
];

const Testimonials = () => (
    <section id="testimonials" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-off-white)' }}>
        <div className="container">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent"
                style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}
            >
                Testimonials
            </motion.h3>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }}
            >
                What Our Clients Say
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: 'var(--spacing-lg)' }}>
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        style={{ backgroundColor: 'var(--color-bg-light)', padding: '2rem', borderRadius: '8px', position: 'relative' }}
                    >
                        <FaQuoteLeft style={{ position: 'absolute', top: '-10px', left: '-10px', color: 'var(--color-accent)', fontSize: '1.5rem' }} />
                        <p style={{ color: 'var(--color-text-dark)', fontStyle: 'italic', marginBottom: '1rem' }}>{t.text}</p>
                        <p style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{t.name}</p>
                        <p style={{ color: 'var(--color-text-dark)', fontSize: '0.9rem' }}>{t.location}</p>
                        <FaQuoteRight style={{ position: 'absolute', bottom: '-10px', right: '-10px', color: 'var(--color-accent)', fontSize: '1.5rem' }} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
