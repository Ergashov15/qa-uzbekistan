import React from 'react'

const themeConfig = {
  // 🧭 Logotip
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', userSelect: 'none' }}>
      <img
        src="/logo.png"
        alt="QA Compass Logo"
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
        }}
      />
      <span
        style={{
          fontSize: '1.25rem',
          fontWeight: 900,
          letterSpacing: '-0.025em',
          background: 'linear-gradient(to right, #10b981, #14b8a6, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'var(--font-sans), system-ui, sans-serif'
        }}
      >
        QA Compass
      </span>
    </div>
  ),

  // Loyiha havolasi
  project: {
    link: 'https://github.com/Ergashov15/qa-uzbekistan',
  },

  // E'lon banneri
  banner: {
    key: 'qa-compass-v2-release',
    text: (
      <a href="/docs/networks/socket-websocket/testing-websockets-on-clients" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
        <span style={{ padding: '0.125rem 0.375rem', borderRadius: '0.25rem', backgroundColor: '#10b981', color: '#ffffff', fontSize: '0.75rem', fontWeight: 700 }}>YANGI</span>
        <span>QA Compass 2.0 reliz qilindi! WebSocket va Burp Suite qo'llanmasi bilan tanishing →</span>
      </a>
    ),
  },

  // Qidiruv paneli
  search: {
    placeholder: 'Tezkor qidiruv... (Cmd + K)',
  },

  // Mundarija (Table of Contents)
  toc: {
    float: true,
    title: 'Ushbu sahifada',
    backToTop: 'Yuqoriga qaytish ↑',
  },

  // Sidebar harakati
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true,
  },

  // Sahifani tahrirlash va fikr bildirish havolalari
  editLink: {
    text: "Ushbu sahifani GitHub'da tahrirlash →",
  },
  feedback: {
    content: "Xatolik yoki taklif bormi? Fikr bildiring →",
    labels: 'feedback',
  },

  // Brauzer tabidagi sarlavha va meta
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="QA Compass — Zamonaviy Dasturiy Ta'minot Sifat Kafolati (QA) Bilimlar Bazasi" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
    </>
  ),

  // Footer (Pastki qism)
  footer: {
    text: (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.8rem', color: '#6b7280' }}>
        <span>MIT {new Date().getFullYear()} © QA Compass. Ochiq manbali bilimlar platformasi.</span>
        <span>Sifat madaniyati bilan yaratilgan</span>
      </div>
    ),
  },
}

export default themeConfig
