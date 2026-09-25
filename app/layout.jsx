import { Tinos, JetBrains_Mono } from 'next/font/google'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-times',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s | QA COMPASS',
    default: "QA COMPASS — O'zbekcha QA Qo'llanmasi"
  },
  description: "Yangi o'rganuvchilar va tajribali QA muhandislari uchun to'liq bepul ochiq manbali bilimlar bazasi.",
  keywords: ['QA', 'Software Testing', 'Manual Testing', 'Automation Testing', 'Playwright', 'Postman', 'SDET', 'Uzbekistan QA']
}

const banner = (
  <Banner storageKey="qa-compass-v2-release">
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
      <span style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', fontSize: '0.7rem', fontWeight: 800 }}>YANGI</span>
      <span>
        <strong>QA Compass v2.0</strong> reliz qilindi! Yangilangan veb-soketlar va test metrikalari bilan tanishing →
      </span>
    </div>
  </Banner>
)

const TelegramIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="Telegram Hamjamiyati">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontWeight: 800 }}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2rem',
            height: '2rem',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            fontSize: '1.15rem'
          }}
        >
          🧭
        </span>
        <span
          style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            background: 'linear-gradient(to right, #10b981, #14b8a6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          QA Compass
        </span>
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            padding: '0.125rem 0.5rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            color: '#10b981',
            border: '1px solid rgba(16, 185, 129, 0.25)'
          }}
        >
          v2.0
        </span>
      </span>
    }
    projectLink="https://github.com/Ergashov15/qa-uzbekistan"
    chatLink="https://t.me"
    chatIcon={TelegramIcon}
    align="right"
  />
)

const footer = (
  <Footer>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: '0.85rem' }}>
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/Ergashov15/qa-uzbekistan" target="_blank" rel="noreferrer" style={{ color: '#10b981', fontWeight: 600 }}>
          QA Compass
        </a>
        . Ochiq manbali ta'lim platformasi.
      </span>
      <span>Sifat madaniyati bilan yaratilgan 💚</span>
    </div>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="uz" dir="ltr" className={`${tinos.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Ergashov15/qa-uzbekistan/tree/main"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
            toggleButton: true
          }}
          toc={{
            float: true,
            title: 'Ushbu sahifada',
            backToTop: 'Yuqoriga qaytish ↑'
          }}
          navigation={{
            prev: true,
            next: true
          }}
          editLink="Ushbu sahifani GitHub'da tahrirlash"
          feedback={{
            content: 'Xato yoki taklif bormi? Fikr bildiring'
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
