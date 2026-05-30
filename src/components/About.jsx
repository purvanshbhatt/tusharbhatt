import React from 'react';
import { motion } from 'framer-motion';
import aboutVisual from '../assets/tushar-bhatt.png';

const About = () => {
    return (
        <section id="about" style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--bg-section-primary)', transition: 'background-color 0.3s ease' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-accent" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 600 }}>About The Firm</h3>
                    <h2 style={{ color: 'var(--text-heading)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Experience. Dedication. Results.</h2>
                    <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        With over two decades of experience in the Indian legal system, <strong>Tushar Y. Bhatt</strong> has established a reputation for providing robust legal representation and strategic counsel.
                    </p>
                    <p style={{ color: 'var(--text-body)', marginBottom: '2rem' }}>
                        Our mission is to deliver justice through a client-centric approach, ensuring that every case is handled with the utmost integrity and diligence. Whether navigating complex corporate litigation or resolving sensitive family disputes, we stand by our clients at every step.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>20+</h4>
                            <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-body)' }}>Years Experience</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>1500+</h4>
                            <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-body)' }}>Cases Solved</p>
                        </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100%',
                        height: '100%',
                        border: '2px solid var(--color-accent)',
                        zIndex: 0
                    }} />
                    <img
                        src={aboutVisual}
                        alt="Tushar Y. Bhatt"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '4px',
                            display: 'block',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
