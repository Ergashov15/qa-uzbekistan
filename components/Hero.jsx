import React from 'react'

export function Hero() {
  return (
    <div className="hero-wrapper">
      {/* Status indikatori */}
      <div className="status-pill">
        <span className="status-dot-wrapper">
          <span className="status-dot-ping" />
          <span className="status-dot" />
        </span>
        <span>✨ QA Compass 2.0 • Sifat kafolati bo‘yicha ochiq bilimlar bazasi</span>
      </div>

      {/* Katta Gradient Sarlavha */}
      <h1 className="hero-main-title">
        Dasturiy Ta'minot Sifatini <br />
        Kafolatlash Uchun <span className="hero-gradient-text">Yagona Kompas</span>
      </h1>

      {/* Qisqacha ta'rif */}
      <p className="hero-lead">
        Software testing asoslari, xalqaro ISTQB standartlari, real-time tarmoq protokollari (WebSockets), test hujjatlari va amaliy metodologiyalar bo‘yicha to‘liq o‘zbek tilidagi professional portal.
      </p>

      {/* Boshqaruv tugmalari */}
      <div className="hero-actions">
        <a
          href="/docs/software-testing"
          className="btn-primary-action"
        >
          Qo‘llanmaga O‘tish →
        </a>
        <a
          href="/roadmap"
          className="btn-secondary-action"
        >
          🗺️ Yo‘l Xaritasi (Roadmap)
        </a>
      </div>

      {/* Micro-stats Bar */}
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">130+</span>
          <span className="stat-label">Amaliy Mavzular</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">11</span>
          <span className="stat-label">Asosiy Bo‘lim</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">O‘zbek Tilida</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">CTFL 4.0</span>
          <span className="stat-label">ISTQB Standart</span>
        </div>
      </div>
    </div>
  )
}
