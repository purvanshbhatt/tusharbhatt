// src/components/LegalGuides.jsx
// Legal Knowledge Hub, Practical Procedural Guides & MP Court Fee Schedule
// Designed with Material 3 cards, accordion drawers, dual-chamber tags & WhatsApp consultation hooks

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MdMenuBook, 
  MdCalculate, 
  MdSearch, 
  MdChevronRight, 
  MdExpandMore,
  MdCheckCircleOutline, 
  MdGavel, 
  MdShield, 
  MdAccountBalance,
  MdAccessTime,
  MdPlace,
  MdClose
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { legalGuidesData } from '../data/legalGuidesData';

const LegalGuides = () => {
  const { language } = useLanguage();
  const data = legalGuidesData[language] || legalGuidesData.en;

  const [activeTab, setActiveTab] = useState('articles'); // 'articles' | 'calculator'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  // Filtered articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return data.articles;
    const query = searchQuery.toLowerCase();
    return data.articles.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.tag.toLowerCase().includes(query) ||
      item.keySections.toLowerCase().includes(query)
    );
  }, [data.articles, searchQuery]);

  const activeArticle = useMemo(() => {
    return data.articles.find(a => a.id === selectedArticleId);
  }, [data.articles, selectedArticleId]);

  const createWhatsAppLink = (topic) => {
    const defaultText = language === 'hi'
      ? `नमस्ते एडवोकेट तुषार भट्ट जी, मैंने आपकी वेबसाइट पर "${topic}" से संबंधित विधिक मार्गदर्शिका पढ़ी। मुझे अपने मामले में विधिक परामर्श चाहिए।`
      : `Hello Advocate Tushar Bhatt, I reviewed your legal guide regarding "${topic}". I would like to seek legal consultation for my matter.`;
    return `https://wa.me/919425486154?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <section 
      id="legal-guides" 
      style={{
        padding: '5rem 0 6rem 0',
        backgroundColor: 'var(--md-sys-color-surface)',
        position: 'relative',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}
    >
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.25rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              color: '#d4af37',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: '1rem'
            }}
          >
            <MdMenuBook size={17} />
            <span>{data.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--md-sys-color-on-surface)',
              lineHeight: 1.25,
              marginBottom: '0.85rem'
            }}
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              maxWidth: '780px',
              margin: '0 auto',
              fontSize: '1.05rem',
              color: 'var(--md-sys-color-on-surface-variant)',
              lineHeight: 1.65
            }}
          >
            {data.subtitle}
          </motion.p>

          {/* Bar Council Compliance Disclaimer Notice */}
          <div
            style={{
              marginTop: '1rem',
              fontSize: '0.8rem',
              color: 'var(--md-sys-color-outline)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontStyle: 'italic',
              maxWidth: '820px'
            }}
          >
            <MdShield size={15} style={{ flexShrink: 0, color: '#d4af37' }} />
            <span>{data.bciDisclaimer}</span>
          </div>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2.25rem',
            padding: '0.75rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('articles')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.92rem',
                transition: 'all 0.2s',
                backgroundColor: activeTab === 'articles' ? '#d4af37' : 'transparent',
                color: activeTab === 'articles' ? '#0b1329' : 'var(--md-sys-color-on-surface)'
              }}
            >
              <MdMenuBook size={18} />
              {data.articlesTab}
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.92rem',
                transition: 'all 0.2s',
                backgroundColor: activeTab === 'calculator' ? '#d4af37' : 'transparent',
                color: activeTab === 'calculator' ? '#0b1329' : 'var(--md-sys-color-on-surface)'
              }}
            >
              <MdCalculate size={18} />
              {data.calculatorTab}
            </button>
          </div>

          {/* Search Box (Articles tab only) */}
          {activeTab === 'articles' && (
            <div 
              style={{ 
                position: 'relative', 
                minWidth: '260px', 
                flex: '1 1 300px',
                maxWidth: '420px' 
              }}
            >
              <MdSearch 
                size={20} 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: 'var(--md-sys-color-outline)' 
                }} 
              />
              <input
                type="text"
                placeholder={data.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 1rem 0.6rem 2.4rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(0, 0, 0, 0.2)',
                  color: 'var(--md-sys-color-on-surface)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          )}
        </div>

        {/* Tab 1: Practical Legal Guides Articles */}
        {activeTab === 'articles' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: 'var(--md-sys-color-surface-container-low, rgba(255, 255, 255, 0.03))',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                  cursor: 'pointer'
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(212, 175, 55, 0.6)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)'
                }}
                onClick={() => setSelectedArticleId(article.id)}
              >
                <div>
                  {/* Category and Read time */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span 
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(212, 175, 55, 0.15)',
                        color: '#d4af37',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {article.tag}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--md-sys-color-outline)' }}>
                      <MdAccessTime size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.22rem',
                      fontWeight: 700,
                      color: 'var(--md-sys-color-on-surface)',
                      lineHeight: 1.4,
                      marginBottom: '0.75rem'
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--md-sys-color-on-surface-variant)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {article.shortDesc}
                  </p>

                  {/* Highlights Bullet points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
                    {article.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '0.84rem', color: 'var(--md-sys-color-on-surface)' }}>
                        <MdCheckCircleOutline size={15} style={{ color: '#25D366', flexShrink: 0, marginTop: '2px' }} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card: Read Guide CTA + WhatsApp Consultation link */}
                <div 
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#d4af37',
                      fontWeight: 700,
                      fontSize: '0.88rem'
                    }}
                  >
                    {language === 'hi' ? 'संपूर्ण मार्गदर्शिका पढ़ें' : 'Read Full Guide'}
                    <MdChevronRight size={18} />
                  </span>

                  <a
                    href={createWhatsAppLink(article.whatsappTopic)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(37, 211, 102, 0.15)',
                      color: '#25D366',
                      border: '1px solid rgba(37, 211, 102, 0.3)',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      transition: 'all 0.2s'
                    }}
                    title={data.consultationAction}
                  >
                    <FaWhatsapp size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: MP Court Fee & Stamp Duty Reference Guide */}
        {activeTab === 'calculator' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div 
              style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#d4af37', marginBottom: '0.4rem' }}>
                {data.calculator.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.5 }}>
                {data.calculator.subtitle}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {data.calculator.sections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    background: 'var(--md-sys-color-surface-container-low, rgba(255, 255, 255, 0.03))',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '14px',
                    padding: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
                    <MdAccountBalance size={20} style={{ color: '#d4af37' }} />
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>
                      {section.category}
                    </h4>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#d4af37', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase' }}>
                    {section.feeType}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {section.details.map((detail, dIdx) => (
                      <div 
                        key={dIdx}
                        style={{
                          padding: '0.75rem',
                          background: 'rgba(0, 0, 0, 0.15)',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.04)'
                        }}
                      >
                        <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface)', marginBottom: '3px' }}>
                          {detail.item}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#88e0a8', fontWeight: 500 }}>
                          {detail.cost}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-outline)', fontStyle: 'italic', textAlign: 'center', marginTop: '0.5rem' }}>
              {data.calculator.disclaimerNote}
            </div>
          </div>
        )}

      </div>

      {/* Expanded Modal / Reading Drawer for Full Guide */}
      <AnimatePresence>
        {activeArticle && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem'
            }}
            onClick={() => setSelectedArticleId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '860px',
                maxHeight: '90vh',
                backgroundColor: 'var(--md-sys-color-surface, #0f172a)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '20px',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Modal Top Bar */}
              <div
                style={{
                  padding: '1.25rem 1.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(212, 175, 55, 0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span 
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(212, 175, 55, 0.2)',
                      color: '#d4af37',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}
                  >
                    {activeArticle.tag}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--md-sys-color-outline)' }}>
                    {activeArticle.readTime} {data.readTimeLabel}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedArticleId(null)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--md-sys-color-on-surface)',
                    cursor: 'pointer',
                    padding: '6px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Close"
                >
                  <MdClose size={24} />
                </button>
              </div>

              {/* Modal Content Scroll Area */}
              <div 
                style={{ 
                  padding: '1.75rem', 
                  overflowY: 'auto', 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem' 
                }}
              >
                <div>
                  <h2 
                    style={{ 
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', 
                      fontWeight: 800, 
                      color: 'var(--md-sys-color-on-surface)', 
                      lineHeight: 1.35, 
                      marginBottom: '0.75rem' 
                    }}
                  >
                    {activeArticle.title}
                  </h2>

                  {/* Metadata Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.84rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#d4af37' }}>
                      <MdGavel size={16} />
                      <span><strong>{language === 'hi' ? 'वैधानिक धाराएं:' : 'Statutory Sections:'}</strong> {activeArticle.keySections}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--md-sys-color-outline)' }}>
                      <MdPlace size={16} />
                      <span><strong>{language === 'hi' ? 'क्षेत्राधिकार:' : 'Jurisdiction:'}</strong> {activeArticle.jurisdiction}</span>
                    </div>
                  </div>
                </div>

                {/* Overview Box */}
                <div 
                  style={{ 
                    padding: '1rem 1.25rem', 
                    background: 'rgba(212, 175, 55, 0.08)', 
                    borderLeft: '4px solid #d4af37', 
                    borderRadius: '0 8px 8px 0', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.6, 
                    color: 'var(--md-sys-color-on-surface)' 
                  }}
                >
                  {activeArticle.overview}
                </div>

                {/* Detailed Sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {activeArticle.sections.map((sec, secIdx) => (
                    <div key={secIdx}>
                      <h4 
                        style={{ 
                          fontSize: '1.05rem', 
                          fontWeight: 700, 
                          color: '#d4af37', 
                          marginBottom: '0.4rem' 
                        }}
                      >
                        {sec.heading}
                      </h4>
                      <p 
                        style={{ 
                          fontSize: '0.93rem', 
                          lineHeight: 1.7, 
                          color: 'var(--md-sys-color-on-surface-variant)', 
                          whiteSpace: 'pre-line' 
                        }}
                      >
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Practical Document Checklist */}
                <div 
                  style={{ 
                    padding: '1.25rem', 
                    background: 'rgba(0, 0, 0, 0.25)', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', 
                    borderRadius: '12px' 
                  }}
                >
                  <h4 
                    style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 700, 
                      color: 'var(--md-sys-color-on-surface)', 
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <MdCheckCircleOutline size={18} style={{ color: '#25D366' }} />
                    {language === 'hi' ? 'आवश्यक विधिक दस्तावेज एवं चेकलिस्ट:' : 'Practical Document Checklist:'}
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeArticle.checklist.map((item, cIdx) => (
                      <li key={cIdx} style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.5 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Bottom Action Bar with 1-Click WhatsApp consultation */}
              <div
                style={{
                  padding: '1rem 1.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface)' }}>
                  {data.consultationPrompt}
                </div>

                <a
                  href={createWhatsAppLink(activeArticle.whatsappTopic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '10px',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.2s'
                  }}
                >
                  <FaWhatsapp size={18} />
                  <span>{data.consultationAction}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LegalGuides;
