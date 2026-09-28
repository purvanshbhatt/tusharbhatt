// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MdPhone, 
  MdEmail, 
  MdLocationOn, 
  MdSchedule, 
  MdVerified, 
  MdDirections, 
  MdOpenInNew,
  MdAccountBalance,
  MdGavel
} from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language, t } = useLanguage();
  const [selectedChamberId, setSelectedChamberId] = useState('ujjain');

  const chambers = t.contact.chambers || [];
  const activeChamber = chambers.find(c => c.id === selectedChamberId) || chambers[0];

  return (
    <section 
      id="contact-info" 
      style={{ 
        padding: 'var(--spacing-xl) 0', 
        backgroundColor: 'var(--md-sys-color-primary)', 
        color: '#ffffff',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '860px', marginBottom: '3rem' }}>
          <div className="m3-badge-gold" style={{ marginBottom: '1.25rem' }}>
            <MdVerified />
            <span>{t.contact.badge}</span>
          </div>

          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', 
            marginBottom: '1rem', 
            color: '#ffffff',
            lineHeight: 1.2
          }}>
            {t.contact.titleLine1} <br />
            <span style={{ color: 'var(--md-sys-color-tertiary)' }}>
              {t.contact.titleLine2}
            </span>
          </h2>

          <p style={{ color: '#d1d8e6', fontSize: '1.05rem', lineHeight: 1.7 }}>
            {t.contact.desc}
          </p>
        </div>

        {/* Chamber Selection Pills */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          marginBottom: '2rem' 
        }}>
          {chambers.map(ch => {
            const isSelected = ch.id === selectedChamberId;
            return (
              <button
                key={ch.id}
                onClick={() => setSelectedChamberId(ch.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  border: isSelected ? '2px solid var(--md-sys-color-tertiary)' : '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: isSelected ? 'var(--md-sys-color-tertiary)' : 'rgba(255,255,255,0.06)',
                  color: isSelected ? '#000000' : '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-standard)'
                }}
              >
                {ch.id === 'ujjain' ? <MdAccountBalance /> : <MdGavel />}
                <span>{ch.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dual Grid: Chamber Details & Live Map */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 'var(--spacing-lg)',
          alignItems: 'start'
        }}>
          {/* Active Chamber Card */}
          <motion.div
            key={activeChamber?.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Detailed Chamber Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1.5px solid rgba(212, 175, 55, 0.35)',
              borderRadius: 'var(--md-sys-shape-corner-lg)',
              padding: '1.75rem',
              boxShadow: 'var(--md-sys-elevation-3)',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', fontFamily: 'var(--font-heading)', margin: 0 }}>
                    {activeChamber?.title}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--md-sys-color-tertiary)', fontWeight: 600, marginTop: '3px' }}>
                    {activeChamber?.type}
                  </div>
                </div>

                <span style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  color: 'var(--md-sys-color-tertiary)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  {activeChamber?.id === 'ujjain' ? 'Head Chamber' : 'eCourts Hub'}
                </span>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                <MdLocationOn style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--md-sys-color-tertiary)', fontWeight: 700, letterSpacing: '0.5px' }}>
                    {t.contact.officeLabel}
                  </div>
                  <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.6, margin: '0.25rem 0 0' }}>
                    {activeChamber?.address}
                  </p>
                </div>
              </div>

              {/* Jurisdiction */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                <MdGavel style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--md-sys-color-tertiary)', fontWeight: 700, letterSpacing: '0.5px' }}>
                    {language === 'hi' ? 'न्यायालयीन क्षेत्राधिकार' : 'Key Court Jurisdiction'}
                  </div>
                  <p style={{ color: '#d1d8e6', fontSize: '0.92rem', lineHeight: 1.5, margin: '0.25rem 0 0' }}>
                    {activeChamber?.jurisdiction}
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <MdSchedule style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.5rem', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--md-sys-color-tertiary)', fontWeight: 700, letterSpacing: '0.5px' }}>
                    {t.contact.hoursLabel}
                  </div>
                  <p style={{ color: '#ffffff', fontSize: '0.92rem', margin: '0.25rem 0 0' }}>
                    {activeChamber?.timings}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a
                  href={activeChamber?.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-filled"
                  style={{ fontSize: '0.88rem', minHeight: '42px', padding: '0.55rem 1.25rem' }}
                >
                  <MdDirections style={{ fontSize: '1.1rem' }} />
                  <span>{t.contact.getDirections}</span>
                </a>

                {activeChamber?.googleBusinessUrl && (
                  <a
                    href={activeChamber?.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m3-btn m3-btn-outlined-light"
                    style={{ fontSize: '0.88rem', minHeight: '42px', padding: '0.55rem 1.25rem' }}
                  >
                    <MdOpenInNew style={{ fontSize: '1rem' }} />
                    <span>{t.contact.viewOnGoogle}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Contact Links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1.15rem',
                borderRadius: 'var(--md-sys-shape-corner-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <MdPhone style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.4rem' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--md-sys-color-tertiary)', fontWeight: 700 }}>
                    {t.contact.phoneLabel}
                  </div>
                  <a href="tel:+919425486154" style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
                    +91 94254 86154
                  </a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.85rem 1.15rem',
                borderRadius: 'var(--md-sys-shape-corner-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <MdEmail style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.4rem' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--md-sys-color-tertiary)', fontWeight: 700 }}>
                    {t.contact.emailLabel}
                  </div>
                  <a href="mailto:adv.tusharbhatt@gmail.com" style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none' }}>
                    adv.tusharbhatt@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Google Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              height: '480px',
              borderRadius: 'var(--md-sys-shape-corner-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--md-sys-elevation-4)',
              border: '2px solid rgba(212, 175, 55, 0.35)',
              position: 'relative',
              backgroundColor: '#0a192f'
            }}
          >
            <iframe
              key={activeChamber?.id}
              src={activeChamber?.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${activeChamber?.title} Location Map`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
