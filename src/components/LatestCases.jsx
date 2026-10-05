// src/components/LatestCases.jsx
// Dedicated Space for Live Court Docket & Latest Court Cases
// Automatically fetches and synchronizes active cases from eCourts feed

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MdSync, 
  MdGavel, 
  MdBalance, 
  MdSearch, 
  MdCheckCircle, 
  MdSchedule, 
  MdOpenInNew, 
  MdContentCopy,
  MdShield,
  MdArrowDownward,
  MdEvent,
  MdHistoryEdu,
  MdFilterList
} from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import { 
  fetchLatestCases, 
  syncCasesNow, 
  calculateDocketStats, 
  formatSyncTime 
} from '../services/casesService';

const LatestCases = () => {
  const { language, t } = useLanguage();
  const [cases, setCases] = useState([]);
  const [lastSynced, setLastSynced] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatusMsg, setSyncStatusMsg] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCnr, setCopiedCnr] = useState(null);

  // Initial automatic docket load on component mount
  useEffect(() => {
    let isMounted = true;
    const loadCases = async () => {
      try {
        const result = await fetchLatestCases();
        if (isMounted) {
          setCases(result.cases);
          setLastSynced(result.lastSynced);
        }
      } catch (err) {
        console.error('Failed to load docket cases:', err);
      }
    };
    loadCases();
    return () => { isMounted = false; };
  }, []);

  // Manual Trigger to re-sync docket
  const handleSyncNow = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncStatusMsg(t.latestDocket.syncingText);

    try {
      const result = await syncCasesNow();
      setCases(result.cases);
      setLastSynced(result.lastSynced);
      setSyncStatusMsg(`${t.latestDocket.syncedSuccess} (${result.cases.length} ${t.latestDocket.syncedCasesCount})`);
      setTimeout(() => setSyncStatusMsg(''), 4000);
    } catch (err) {
      console.error('Sync failed:', err);
      setSyncStatusMsg('Sync check complete');
      setTimeout(() => setSyncStatusMsg(''), 3000);
    } finally {
      setIsSyncing(false);
    }
  };

  // Copy CNR Number to clipboard
  const handleCopyCnr = (cnr, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(cnr).then(() => {
      setCopiedCnr(cnr);
      setTimeout(() => setCopiedCnr(null), 2500);
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  };

  // Docket summary statistics
  const stats = useMemo(() => calculateDocketStats(cases), [cases]);

  // Tab configuration
  const tabs = [
    { key: 'all', label: t.latestDocket.tabs.all, icon: <MdGavel /> },
    { key: 'active', label: t.latestDocket.tabs.active, icon: <MdSchedule /> },
    { key: 'disposed', label: t.latestDocket.tabs.disposed, icon: <MdCheckCircle /> },
    { key: 'criminal', label: t.latestDocket.tabs.criminal, icon: <MdShield /> },
    { key: 'civil', label: t.latestDocket.tabs.civil, icon: <MdBalance /> },
  ];

  // Filtered docket matters
  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      // Tab filter
      if (activeTab === 'active' && c.statusCode !== 'pending') return false;
      if (activeTab === 'disposed' && c.statusCode !== 'disposed') return false;
      if (activeTab === 'criminal' && c.category !== 'criminal') return false;
      if (activeTab === 'civil' && c.category !== 'civil') return false;

      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const titleEn = (c.title?.en || '').toLowerCase();
      const titleHi = (c.title?.hi || '').toLowerCase();
      const courtEn = (c.court?.en || '').toLowerCase();
      const courtHi = (c.court?.hi || '').toLowerCase();
      const cnr = (c.cnr || '').toLowerCase();
      const caseNo = (c.caseNumber || '').toLowerCase();
      const actEn = (c.actSection?.en || '').toLowerCase();
      const actHi = (c.actSection?.hi || '').toLowerCase();
      const stageEn = (c.stage?.en || '').toLowerCase();
      const stageHi = (c.stage?.hi || '').toLowerCase();

      return (
        titleEn.includes(q) ||
        titleHi.includes(q) ||
        courtEn.includes(q) ||
        courtHi.includes(q) ||
        cnr.includes(q) ||
        caseNo.includes(q) ||
        actEn.includes(q) ||
        actHi.includes(q) ||
        stageEn.includes(q) ||
        stageHi.includes(q)
      );
    });
  }, [cases, activeTab, searchQuery]);

  return (
    <section 
      id="latest-cases" 
      style={{ 
        padding: 'var(--spacing-xl) 0', 
        backgroundColor: 'var(--bg-section-primary)', 
        position: 'relative',
        borderBottom: '1px solid var(--md-sys-color-outline-variant)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Live Status Pill with Pulsing Beacon */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.55rem',
                backgroundColor: 'rgba(25, 111, 61, 0.12)',
                color: '#1e8449',
                padding: '0.45rem 1.15rem',
                borderRadius: 'var(--md-sys-shape-corner-full)',
                fontWeight: 700,
                fontSize: '0.86rem',
                letterSpacing: '0.4px',
                border: '1.5px solid rgba(25, 111, 61, 0.3)',
                marginBottom: '1.25rem'
              }}
            >
              <span 
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: '#27ae60',
                  boxShadow: '0 0 0 3px rgba(39, 174, 96, 0.3)',
                  display: 'inline-block',
                  animation: 'pulse 1.8s infinite'
                }} 
              />
              <span>{t.latestDocket.syncBadge}</span>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2.1rem, 3.5vw, 2.9rem)', 
              color: 'var(--text-heading)', 
              marginBottom: '1rem',
              lineHeight: 1.25
            }}>
              {t.latestDocket.title}
            </h2>

            <p style={{ 
              color: 'var(--text-body)', 
              fontSize: '1.05rem', 
              lineHeight: 1.7,
              maxWidth: '820px',
              margin: '0 auto'
            }}>
              {t.latestDocket.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Real-Time Sync & Status Command Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--md-sys-shape-corner-lg)',
            border: '1.5px solid var(--md-sys-color-tertiary)',
            padding: '1.25rem 1.75rem',
            marginBottom: '2.5rem',
            boxShadow: 'var(--md-sys-elevation-2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          {/* Left: Sync Meta Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(212, 175, 55, 0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--md-sys-color-tertiary)',
              fontSize: '1.4rem',
              flexShrink: 0
            }}>
              <MdHistoryEdu />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ 
                  fontWeight: 700, 
                  color: 'var(--text-heading)', 
                  fontSize: '0.98rem' 
                }}>
                  {t.latestDocket.lastSyncLabel}:
                </span>
                <span style={{ 
                  color: '#1e8449', 
                  fontWeight: 600, 
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <MdCheckCircle style={{ fontSize: '1.05rem' }} />
                  {formatSyncTime(lastSynced, language)}
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-body)', marginTop: '2px' }}>
                {t.latestDocket.autoSyncNote}
              </div>
            </div>
          </div>

          {/* Right: Sync Action Button & Feedback */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {syncStatusMsg && (
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 600, 
                color: 'var(--md-sys-color-tertiary)',
                animation: 'fadeIn 0.2s ease'
              }}>
                {syncStatusMsg}
              </span>
            )}

            <button
              onClick={handleSyncNow}
              disabled={isSyncing}
              className="m3-btn m3-btn-outlined"
              style={{
                borderColor: 'var(--md-sys-color-tertiary)',
                color: 'var(--text-heading)',
                fontWeight: 600,
                fontSize: '0.88rem',
                minHeight: '42px',
                padding: '0.5rem 1.25rem',
                gap: '0.5rem',
                opacity: isSyncing ? 0.7 : 1,
                cursor: isSyncing ? 'not-allowed' : 'pointer'
              }}
              title="Synchronize and fetch latest cases from eCourts"
            >
              <MdSync 
                style={{ 
                  fontSize: '1.25rem', 
                  color: 'var(--md-sys-color-tertiary)',
                  animation: isSyncing ? 'spin 1s linear infinite' : 'none'
                }} 
              />
              <span>{isSyncing ? t.latestDocket.syncingText : t.latestDocket.syncButton}</span>
            </button>
          </div>
        </motion.div>

        {/* 4 Summary Stat Metrics for Docket */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          {[
            { 
              val: `${stats.pendingCount}+`, 
              label: t.latestDocket.stats.activeTrials, 
              color: '#d35400', 
              icon: <MdSchedule /> 
            },
            { 
              val: stats.totalDocumented, 
              label: t.latestDocket.stats.documented, 
              color: 'var(--md-sys-color-tertiary)', 
              icon: <MdGavel /> 
            },
            { 
              val: `${stats.recentCount}+`, 
              label: t.latestDocket.stats.recentFilings, 
              color: '#1e8449', 
              icon: <MdEvent /> 
            },
            { 
              val: `${stats.disposedCount}+`, 
              label: t.latestDocket.stats.disposedDecrees, 
              color: '#2980b9', 
              icon: <MdCheckCircle /> 
            }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="m3-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '1.15rem 1rem',
                textAlign: 'center',
                borderRadius: 'var(--md-sys-shape-corner-md)',
                border: '1px solid var(--md-sys-color-outline-variant)'
              }}
            >
              <div style={{ color: stat.color, fontSize: '1.4rem', marginBottom: '0.25rem' }}>
                {stat.icon}
              </div>
              <div style={{ 
                fontSize: '1.8rem', 
                fontWeight: 800, 
                color: 'var(--text-heading)', 
                fontFamily: 'var(--font-heading)',
                lineHeight: 1
              }}>
                {stat.val}
              </div>
              <div style={{ 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                color: 'var(--text-body)', 
                marginTop: '0.4rem',
                textTransform: 'uppercase',
                letterSpacing: '0.4px',
                lineHeight: 1.3
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls: Search & Docket Filter Tabs */}
        <div style={{ 
          marginBottom: '2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.25rem' 
        }}>
          {/* Real-Time Docket Search */}
          <div style={{ position: 'relative', maxWidth: '720px', width: '100%', margin: '0 auto' }}>
            <MdSearch style={{ 
              position: 'absolute', 
              left: '1.2rem', 
              top: '50%', 
              transform: 'translateY(-50%)',
              fontSize: '1.35rem',
              color: 'var(--md-sys-color-tertiary)',
              pointerEvents: 'none'
            }} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.latestDocket.searchPlaceholder}
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem 0.9rem 3.2rem',
                borderRadius: 'var(--md-sys-shape-corner-full)',
                border: '1.5px solid var(--md-sys-color-outline-variant)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--md-sys-color-on-surface)',
                fontSize: '0.94rem',
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

          {/* Quick Filter Tabs */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '0.6rem' 
          }}>
            {tabs.map(tab => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`m3-chip ${active ? 'active' : ''}`}
                  style={{
                    backgroundColor: active ? 'var(--md-sys-color-primary)' : 'var(--bg-card)',
                    color: active ? '#ffffff' : 'var(--md-sys-color-on-surface)',
                    borderColor: active ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline-variant)',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    padding: '0.5rem 1.15rem'
                  }}
                >
                  <span style={{ fontSize: '1rem', color: active ? 'var(--md-sys-color-tertiary)' : 'inherit' }}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Docket Counter Line */}
          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.88rem', 
            color: 'var(--text-body)',
            fontWeight: 500
          }}>
            {t.latestDocket.showing} <strong style={{ color: 'var(--text-heading)' }}>{filteredCases.length}</strong> {t.latestDocket.ofTotal} {cases.length} {t.latestDocket.docketMatters}
          </div>
        </div>

        {/* Docket Cases Grid */}
        <AnimatePresence mode="popLayout">
          {filteredCases.length > 0 ? (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {filteredCases.map((c, index) => {
                const title = language === 'hi' ? (c.title?.hi || c.title?.en) : c.title?.en;
                const court = language === 'hi' ? (c.court?.hi || c.court?.en) : c.court?.en;
                const judge = language === 'hi' ? (c.judge?.hi || c.judge?.en) : c.judge?.en;
                const caseType = language === 'hi' ? (c.caseType?.hi || c.caseType?.en) : c.caseType?.en;
                const advocate = language === 'hi' ? (c.advocate?.hi || c.advocate?.en) : c.advocate?.en;
                const actSection = language === 'hi' ? (c.actSection?.hi || c.actSection?.en) : c.actSection?.en;
                const stage = language === 'hi' ? (c.stage?.hi || c.stage?.en || 'विचारण स्तर') : (c.stage?.en || 'Trial Proceedings');
                const isDisposed = c.statusCode === 'disposed';
                const isCopied = copiedCnr === c.cnr;

                return (
                  <motion.div
                    key={c.cnr}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.28, delay: index * 0.03 }}
                    className="m3-card-elevated"
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: 'var(--md-sys-shape-corner-lg)',
                      backgroundColor: 'var(--bg-card)',
                      borderTop: `4px solid ${isDisposed ? '#1e8449' : '#d35400'}`,
                      boxShadow: 'var(--md-sys-elevation-2)',
                      position: 'relative'
                    }}
                  >
                    <div>
                      {/* Top Header: CNR Tag with Copy Button & Live Status Badge */}
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        marginBottom: '0.85rem',
                        gap: '0.5rem',
                        flexWrap: 'wrap'
                      }}>
                        {/* CNR pill with Copy */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontFamily: 'monospace',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.55rem',
                          borderRadius: 'var(--md-sys-shape-corner-xs)',
                          backgroundColor: 'rgba(10, 28, 61, 0.06)',
                          color: 'var(--text-heading)',
                          border: '1px solid rgba(10, 28, 61, 0.12)'
                        }}>
                          <span>CNR: {c.cnr}</span>
                          <button
                            onClick={(e) => handleCopyCnr(c.cnr, e)}
                            title={t.latestDocket.card.copyCnr}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '2px',
                              display: 'flex',
                              alignItems: 'center',
                              color: isCopied ? '#1e8449' : 'var(--md-sys-color-tertiary)'
                            }}
                          >
                            {isCopied ? (
                              <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>✓</span>
                            ) : (
                              <MdContentCopy style={{ fontSize: '0.85rem' }} />
                            )}
                          </button>
                        </div>

                        {/* Live Status Pill */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--md-sys-shape-corner-full)',
                          backgroundColor: isDisposed ? 'rgba(25, 111, 61, 0.12)' : 'rgba(211, 84, 0, 0.12)',
                          color: isDisposed ? '#1e8449' : '#d35400'
                        }}>
                          {isDisposed ? (
                            <MdCheckCircle style={{ fontSize: '0.95rem' }} />
                          ) : (
                            <span 
                              style={{
                                width: '7px',
                                height: '7px',
                                borderRadius: '50%',
                                backgroundColor: '#d35400',
                                animation: 'pulse 1.6s infinite',
                                display: 'inline-block'
                              }}
                            />
                          )}
                          <span>
                            {isDisposed 
                              ? (language === 'hi' ? 'निस्तारित' : 'Disposed / Decreed') 
                              : (language === 'hi' ? 'प्रक्रियाधीन' : 'Pending Trial')}
                          </span>
                        </div>
                      </div>

                      {/* Case Number Badge (if available) */}
                      {c.caseNumber && (
                        <div style={{
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          color: 'var(--md-sys-color-tertiary)',
                          marginBottom: '0.45rem',
                          letterSpacing: '0.4px'
                        }}>
                          {t.latestDocket.card.caseNo}: {c.caseNumber} • {c.year}
                        </div>
                      )}

                      {/* Case Title */}
                      <h3 style={{ 
                        fontSize: '1.16rem', 
                        fontWeight: 700, 
                        color: 'var(--text-heading)', 
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '0.85rem',
                        lineHeight: 1.35
                      }}>
                        {title}
                      </h3>

                      {/* Procedural Stage Alert Box (Highlights Next Hearing / Current Stage) */}
                      <div style={{
                        backgroundColor: isDisposed ? 'rgba(25, 111, 61, 0.05)' : 'rgba(212, 175, 55, 0.1)',
                        borderLeft: `3px solid ${isDisposed ? '#1e8449' : 'var(--md-sys-color-tertiary)'}`,
                        padding: '0.55rem 0.75rem',
                        borderRadius: '0 4px 4px 0',
                        marginBottom: '1rem',
                        fontSize: '0.82rem'
                      }}>
                        <div style={{ fontWeight: 700, color: 'var(--text-heading)', marginBottom: '2px' }}>
                          {t.latestDocket.card.stage}:
                        </div>
                        <div style={{ color: 'var(--text-body)', fontWeight: 500 }}>
                          {stage}
                        </div>
                        {c.nextHearing && c.nextHearing !== 'Disposed' && c.nextHearing !== 'Judgment Delivered' && (
                          <div style={{ 
                            fontSize: '0.76rem', 
                            fontWeight: 700, 
                            color: '#d35400', 
                            marginTop: '3px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}>
                            <MdEvent />
                            <span>{t.latestDocket.card.nextHearing}: {c.nextHearing}</span>
                          </div>
                        )}
                      </div>

                      {/* Case Metadata Details */}
                      <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.5rem', 
                        fontSize: '0.87rem', 
                        color: 'var(--text-body)',
                        marginBottom: '1.25rem' 
                      }}>
                        <div>
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.latestDocket.card.courtBench}: </strong>
                          <span>{court}</span>
                        </div>

                        {judge && (
                          <div>
                            <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.latestDocket.card.presidingJudge}: </strong>
                            <span>{judge}</span>
                          </div>
                        )}

                        <div>
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.latestDocket.card.category}: </strong>
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
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.latestDocket.card.statutoryActs}: </strong>
                          <span style={{ color: 'var(--md-sys-color-tertiary)', fontWeight: 600 }}>{actSection}</span>
                        </div>

                        <div>
                          <strong style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{t.latestDocket.card.counselRole}: </strong>
                          <span style={{ fontWeight: 600 }}>{advocate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action: Direct eCourts Verification Link */}
                    <div style={{ 
                      borderTop: '1px solid rgba(0,0,0,0.06)', 
                      paddingTop: '0.9rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-body)' }}>
                        {c.filingDate ? `${t.latestDocket.card.filingDate}: ${c.filingDate}` : `Year: ${c.year}`}
                      </span>

                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m3-btn m3-btn-filled"
                        style={{
                          fontSize: '0.82rem',
                          minHeight: '36px',
                          padding: '0.4rem 0.95rem',
                          gap: '0.35rem'
                        }}
                      >
                        <span>{t.latestDocket.card.verifyLive}</span>
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
                {t.latestDocket.noResults}
              </p>
              <button 
                onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
                className="m3-btn m3-btn-filled"
              >
                {t.latestDocket.resetFilters}
              </button>
            </div>
          )}
        </AnimatePresence>

        {/* Official NJDG Transparency Bar & Link to 350+ Archive */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--md-sys-shape-corner-lg)',
          border: '1px solid var(--md-sys-color-outline-variant)',
          padding: '1.5rem 1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
          boxShadow: 'var(--md-sys-elevation-1)'
        }}>
          <div style={{ maxWidth: '680px' }}>
            <h4 style={{ 
              fontSize: '1.05rem', 
              fontWeight: 700, 
              color: 'var(--text-heading)',
              marginBottom: '0.35rem'
            }}>
              {t.latestDocket.njdgTitle}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {t.latestDocket.njdgDesc}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://services.ecourts.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="m3-btn m3-btn-outlined"
              style={{ fontSize: '0.84rem', minHeight: '38px', padding: '0.45rem 1rem', gap: '0.35rem' }}
            >
              <span>{t.latestDocket.njdgButton}</span>
              <MdOpenInNew />
            </a>

            <a
              href="#cases"
              className="m3-btn m3-btn-filled"
              style={{ fontSize: '0.84rem', minHeight: '38px', padding: '0.45rem 1rem', gap: '0.35rem' }}
            >
              <span>{t.latestDocket.viewFullArchiveBtn}</span>
              <MdArrowDownward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCases;
