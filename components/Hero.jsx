import React from 'react'
import { ArrowRight, Map } from 'lucide-react'

export function Hero() {
  return (
    <div className="hero-wrapper">
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
          className="btn-primary-action group"
        >
          <span>Qo‘llanmaga O‘tish</span>
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
        </a>
        <a
          href="/roadmap"
          className="btn-secondary-action group"
        >
          <Map className="w-4 h-4 shrink-0" strokeWidth={2} />
          <span>Yo‘l Xaritasi</span>
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
