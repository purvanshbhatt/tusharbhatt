// src/components/VerifiedCases.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MdGavel, 
  MdBalance, 
  MdSearch, 
  MdCheckCircle, 
  MdSchedule, 
  MdOpenInNew, 
  MdVerified, 
  MdFilterList,
  MdShield,
  MdAccountBalance,
  MdLocationCity
} from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import { ecourtsOverview, verifiedCases } from '../data/casesData';

const VerifiedCases = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterKeys = [
    { key: 'all', label: t.cases.filters.all },
    { key: 'criminal', label: t.cases.filters.criminal },
    { key: 'civil', label: t.cases.filters.civil },
    { key: 'family', label: t.cases.filters.family },
    { key: 'execution', label: t.cases.filters.execution },
  ];

  const filteredCases = useMemo(() => {
    return verifiedCases.filter(c => {
      const matchesCategory = activeCategory === 'all' || c.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const titleEn = (c.title?.en || '').toLowerCase();
      const titleHi = (c.title?.hi || '').toLowerCase();
      const courtEn = (c.court?.en || '').toLowerCase();
      const cnr = (c.cnr || '').toLowerCase();
      const actEn = (c.actSection?.en || '').toLowerCase();
      const actHi = (c.actSection?.hi || '').toLowerCase();
      const typeEn = (c.caseType?.en || '').toLowerCase();
      const judgeEn = (c.judge?.en || '').toLowerCase();

      return (
        titleEn.includes(query) ||
        titleHi.includes(query) ||
        courtEn.includes(query) ||
        cnr.includes(query) ||
        actEn.includes(query) ||
        actHi.includes(query) ||
        typeEn.includes(query) ||
        judgeEn.includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <section 
      id="cases" 
      style={{ 
        padding: 'var(--spacing-xl) 0', 
        backgroundColor: 'var(--bg-section-secondary)', 
        transition: 'background-color 0.3s ease',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="m3-badge-gold" style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
              <MdVerified style={{ fontSize: '1.1rem' }} />
              <span>{t.cases.eyebrow}</span>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2.2rem, 3.5vw, 3rem)', 
              color: 'var(--text-heading)', 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              {t.cases.title}
            </h2>

            <p style={{ 
              color: 'var(--text-body)', 
              fontSize: '1.05rem', 
              lineHeight: 1.75 
            }}>
              {t.cases.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Official eCourts & Google Verification Credentials Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: 'var(--bg-card)',
            padding: '1.5rem',
            borderRadius: 'var(--md-sys-shape-corner-lg)',
            border: '1.5px solid rgba(212, 175, 55, 0.35)',
            boxShadow: 'var(--md-sys-elevation-2)',
            marginBottom: '3rem'
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            paddingBottom: '1rem',
            marginBottom: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MdAccountBalance style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.4rem' }} />
              <span style={{ 
                fontWeight: 700, 
                fontSize: '0.95rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px',
                color: 'var(--text-heading)' 
              }}>
                {t.cases.profilesHeading}
              </span>
            </div>
            <span style={{ 
              fontSize: '0.85rem', 
              color: 'var(--md-sys-color-tertiary)', 
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <MdShield />
              {language === 'hi' ? '350+ सत्यापित न्यायालयीन वाद' : '350+ Publicly Documented Matters'}
            </span>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1rem' 
          }}>
            <a 
              href="https://ecourtsindia.com/lawyer/tushar-rao-bhatt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="m3-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                backgroundColor: 'var(--md-sys-color-surface-container-low)',
                border: '1px solid rgba(10, 28, 61, 0.1)',
                borderRadius: 'var(--md-sys-shape-corner-md)',
                transition: 'var(--transition-standard)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--md-sys-color-tertiary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 28, 61, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.95rem' }}>
                  {t.cases.profileTusharRao}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-tertiary)', fontWeight: 600, marginTop: '2px' }}>
                  {language === 'hi' ? 'थांदला, झाबुआ, पेटलावद एवं कुटुंब न्यायालय' : 'Thandla, Jhabua, Petlawad & Family Court'}
                </div>
              </div>
              <MdOpenInNew style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.2rem', flexShrink: 0 }} />
            </a>

            <a 
              href="https://ecourtsindia.com/lawyer/shri-tushar-bhatt-advocate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="m3-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                backgroundColor: 'var(--md-sys-color-surface-container-low)',
                border: '1px solid rgba(10, 28, 61, 0.1)',
                borderRadius: 'var(--md-sys-shape-corner-md)',
                transition: 'var(--transition-standard)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--md-sys-color-tertiary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 28, 61, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.95rem' }}>
                  {t.cases.profileShriTushar}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-tertiary)', fontWeight: 600, marginTop: '2px' }}>
                  {language === 'hi' ? 'सिविल कोर्ट थांदla (सिविल एवं विविध वाद)' : 'Civil Court Thandla (Civil & Misc Suits)'}
                </div>
              </div>
              <MdOpenInNew style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.2rem', flexShrink: 0 }} />
            </a>

            <a 
              href="https://share.google/MRr526qpjPLtuISDq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="m3-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                backgroundColor: 'var(--md-sys-color-surface-container-low)',
                border: '1px solid rgba(10, 28, 61, 0.1)',
                borderRadius: 'var(--md-sys-shape-corner-md)',
                transition: 'var(--transition-standard)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--md-sys-color-tertiary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 28, 61, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.95rem' }}>
                  {t.cases.profileGoogle}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-tertiary)', fontWeight: 600, marginTop: '2px' }}>
                  {language === 'hi' ? 'आधिकारिक गूगल मानचित्र एवं समीक्षाएं' : 'Official Google Business & Maps Profile'}
                </div>
              </div>
              <MdOpenInNew style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.2rem', flexShrink: 0 }} />
            </a>
          </div>
        </motion.div>

        {/* 6 Metric Stat Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {[
            { value: ecourtsOverview.totalDocumentedMatters, label: t.cases.statTotal, icon: <MdGavel /> },
            { value: ecourtsOverview.criminalComplaints, label: t.cases.statCriminal, icon: <MdBalance /> },
            { value: ecourtsOverview.civilSuits, label: t.cases.statCivil, icon: <MdAccountBalance /> },
            { value: ecourtsOverview.sessionsCases, label: t.cases.statSessions, icon: <MdShield /> },
            { value: ecourtsOverview.disposedDecisions, label: t.cases.statDisposed, icon: <MdCheckCircle /> },
            { value: "6", label: t.cases.statCourts, icon: <MdLocationCity /> }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="m3-card-elevated"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{ padding: '1.35rem 1rem', textAlign: 'center' }}
            >
              <div style={{ color: 'var(--md-sys-color-tertiary)', fontSize: '1.5rem', marginBottom: '0.4rem' }}>
                {item.icon}
              </div>
              <div style={{ 
                fontSize: '1.9rem', 
                fontWeight: 800, 
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-heading)',
                lineHeight: 1
              }}>
                {item.value}
              </div>
              <div style={{ 
                fontSize: '0.78rem', 
                fontWeight: 700, 
                color: 'var(--text-body)',
                marginTop: '0.5rem',
                lineHeight: 1.35,
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls: Search and Filter Chips */}
        <div style={{ 
          marginBottom: '2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.25rem' 
        }}>
          {/* Live Search Bar */}
          <div style={{ position: 'relative', maxWidth: '720px', width: '100%', margin: '0 auto' }}>
            <MdSearch style={{ 
              position: 'absolute', 
              left: '1.2rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              fontSize: '1.4rem',
              color: 'var(--md-sys-color-tertiary)',
              pointerEvents: 'none'
            }} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.cases.searchPlaceholder}
              style={{
                width: '100%',
                padding: '0.95rem 1.25rem 0.95rem 3.25rem',
                borderRadius: 'var(--md-sys-shape-corner-full)',
                border: '1.5px solid var(--md-sys-color-outline-variant)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--md-sys-color-on-surface)',
                fontSize: '0.96rem',
                outline: 'none',
                boxShadow: 'var(--md-sys-elevation-1)',
                transition: 'var(--transition-standard)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--md-sys-color-tertiary)';
                e.target.style.boxShadow = '0 0 0 3px rgba(179, 134, 34, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--md-sys-color-outline-variant)';
                e.target.style.boxShadow = 'var(--md-sys-elevation-1)';
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1.2rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-body)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Chips */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '0.6rem' 
          }}>
            {filterKeys.map(f => {
              const active = activeCategory === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveCategory(f.key)}
                  className={`m3-chip ${active ? 'active' : ''}`}
                  style={{
                    backgroundColor: active ? 'var(--md-sys-color-primary)' : 'var(--bg-card)',
                    color: active ? '#ffffff' : 'var(--md-sys-color-on-surface)',
                    borderColor: active ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline-variant)',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    padding: '0.55rem 1.15rem'
                  }}
                >
                  <MdFilterList style={{ fontSize: '1rem', color: active ? 'var(--md-sys-color-tertiary)' : 'inherit' }} />
                  <span>{f.label}</span>
                </button>
              );
            })}
          </div>

          {/* Results Count Line */}
          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.88rem', 
            color: 'var(--text-body)',
            fontWeight: 500
          }}>
            {t.cases.showingCount} <strong style={{ color: 'var(--text-heading)' }}>{filteredCases.length}</strong> {t.cases.ofTotal} {verifiedCases.length} {t.cases.verifiedCasesLabel}
          </div>
        </div>

        {/* Case Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredCases.length > 0 ? (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {filteredCases.map((c, index) => {
                const title = language === 'hi' ? c.title.hi : c.title.en;
                const court = language === 'hi' ? c.court.hi : c.court.en;
                const judge = language === 'hi' ? c.judge.hi : c.judge.en;
                const caseType = language === 'hi' ? c.caseType.hi : c.caseType.en;
                const advocate = language === 'hi' ? c.advocate.hi : c.advocate.en;
                const actSection = language === 'hi' ? c.actSection.hi : c.actSection.en;
                const status = language === 'hi' ? c.status.hi : c.status.en;
                const isDisposed = c.statusCode === 'disposed';

                return (
                  <motion.div
                    key={c.cnr}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="m3-card-elevated"
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: 'var(--md-sys-shape-corner-lg)',
                      borderTop: `4px solid ${isDisposed ? 'var(--md-sys-color-tertiary)' : '#196f3d'}`,
                      position: 'relative'
                    }}
                  >
                    <div>
                      {/* Top Row: CNR & Status Badge */}
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        marginBottom: '1rem',
                        gap: '0.5rem',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{
                          fontFamily: 'monospace',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--md-sys-shape-corner-xs)',
                          backgroundColor: 'rgba(10, 28, 61, 0.06)',
                          color: 'var(--text-heading)',
                          border: '1px solid rgba(10, 28, 61, 0.12)'
                        }}>
                          CNR: {c.cnr}
                        </div>

                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--md-sys-shape-corner-full)',
                          backgroundColor: isDisposed ? 'rgba(25, 111, 61, 0.12)' : 'rgba(179, 134, 34, 0.15)',
                          color: isDisposed ? '#196f3d' : '#8c650e'
                        }}>
                          {isDisposed ? <MdCheckCircle /> : <MdSchedule />}
                          <span>{status}</span>
                        </div>
                      </div>

                      {/* Case Title */}
                      <h3 style={{ 
                        fontSize: '1.18rem', 
                        fontWeight: 700, 
                        color: 'var(--text-heading)', 
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '0.85rem',
                        lineHeight: 1.35
                      }}>
                        {title}
                      </h3>

                      {/* Metadata Table-like List */}
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.55rem', 
                        fontSize: '0.88rem', 
                        color: 'var(--text-body)',
                        marginBottom: '1.25rem' 
                      }}>
                        <div>
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.cases.card.court}: </strong>
                          <span>{court}</span>
                        </div>

                        <div>
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.cases.card.judge}: </strong>
                          <span>{judge}</span>
                        </div>

                        <div>
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.cases.card.caseType}: </strong>
                          <span style={{ 
                            background: 'rgba(179, 134, 34, 0.08)', 
                            padding: '0.15rem 0.5rem', 
                            borderRadius: '4px',
                            color: 'var(--text-heading)',
                            fontWeight: 500
                          }}>
                            {caseType}
                          </span>
                        </div>

                        <div>
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.cases.card.actSection}: </strong>
                          <span style={{ color: 'var(--md-sys-color-tertiary)', fontWeight: 600 }}>{actSection}</span>
                        </div>

                        <div>
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.cases.card.advocate}: </strong>
                          <span style={{ fontWeight: 600 }}>{advocate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action: Verify Link */}
                    <div style={{ 
                      borderTop: '1px solid rgba(0,0,0,0.06)', 
                      paddingTop: '0.85rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-body)' }}>
                        Year: {c.year}
                      </span>
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m3-btn m3-btn-outlined"
                        style={{
                          fontSize: '0.82rem',
                          minHeight: '36px',
                          padding: '0.4rem 0.95rem',
                          gap: '0.35rem'
                        }}
                      >
                        <span>{t.cases.card.verifyBtn}</span>
                        <MdOpenInNew style={{ fontSize: '0.95rem' }} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem 1.5rem', 
              background: 'var(--bg-card)', 
              borderRadius: 'var(--md-sys-shape-corner-lg)',
              marginBottom: '3rem'
            }}>
              <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', marginBottom: '1rem' }}>
                {t.cases.noResults}
              </p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="m3-btn m3-btn-filled"
              >
                {t.cases.resetSearch}
              </button>
            </div>
          )}
        </AnimatePresence>

        {/* Statutory Legal Disclaimer */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderRadius: 'var(--md-sys-shape-corner-md)',
          backgroundColor: 'rgba(10, 28, 61, 0.04)',
          border: '1px solid rgba(10, 28, 61, 0.08)',
          fontSize: '0.82rem',
          color: 'var(--text-body)',
          lineHeight: '1.65',
          textAlign: 'center',
          maxWidth: '920px',
          margin: '0 auto'
        }}>
          {t.cases.disclaimer}
        </div>
      </div>
    </section>
  );
};

export default VerifiedCases;
