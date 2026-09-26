import Image from 'next/image'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Layout, Navbar, ThemeSwitch, LastUpdated } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
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
    default: "QA COMPASS — Sifat Kafolati (QA) Bo'yicha Zamonaviy Bilimlar Bazasi"
  },
  description: "Dasturiy ta'minot sifati (QA), ISTQB standartlari, test hujjatlari, tarmoq protokollari va zamonaviy sinov vositalari bo'yicha to'liq o'zbek tilidagi ochiq platforma.",
  keywords: ['QA', 'Software Testing', 'Manual Testing', 'Automation Testing', 'ISTQB', 'WebSockets', 'Bug Report', 'Test Plan', 'QA Uzbekistan']
}

const banner = (
  <Banner key="qa-compass-banner" storageKey="qa-compass-v2-banner">
    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
      <span className="bg-emerald-500 text-white font-bold px-1.5 py-0.5 rounded text-[11px]">v2.0</span>
      <span>
        <strong>QA Compass 2.0</strong> reliz qilindi! Yangilangan Veb-soketlar va Test Metrikalari bilan tanishing →
      </span>
    </div>
  </Banner>
)

const TelegramIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="Telegram Hamjamiyati">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
)

const CompassLogo = () => (
  <span
    className="inline-flex flex-row items-center gap-5 select-none whitespace-nowrap"
    style={{
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1.25rem',
      whiteSpace: 'nowrap'
    }}
  >
    <Image
      src="/logo.png"
      alt=""
      aria-hidden="true"
      width={46}
      height={46}
      className="w-[46px] h-[46px] rounded-full object-cover shrink-0 shadow-md ring-2 ring-emerald-500/40 transition-transform duration-200 hover:scale-105"
      style={{
        width: '46px',
        height: '46px',
        minWidth: '46px',
        minHeight: '46px',
        borderRadius: '50%',
        flexShrink: 0
      }}
      priority
    />
    <span
      className="text-2xl sm:text-3xl font-black tracking-normal leading-none whitespace-nowrap bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-sans"
      style={{
        fontWeight: 900,
        fontSize: '1.75rem',
        letterSpacing: '0.02em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        display: 'inline-block'
      }}
    >
      QA&nbsp;Compass
    </span>
  </span>
)

const navbar = (
  <Navbar
    key="qa-compass-navbar"
    logo={<CompassLogo />}
    projectLink="https://github.com/Ergashov15/qa-uzbekistan"
    chatLink="https://t.me"
    chatIcon={TelegramIcon}
    align="right"
  >
    <ThemeSwitch className="header-theme-switch" />
  </Navbar>
)

const footer = (
  <footer
    key="qa-compass-footer"
    className="w-full bg-gray-100 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-400"
    style={{
      paddingTop: '1.75rem',
      paddingBottom: 'calc(1.75rem + env(safe-area-inset-bottom, 0px))',
      minHeight: '5rem'
    }}
  >
    <div
      className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400"
      style={{
        paddingLeft: 'max(env(safe-area-inset-left), 1.5rem)',
        paddingRight: 'max(env(safe-area-inset-right), 1.5rem)'
      }}
    >
      <span className="text-center sm:text-left leading-relaxed">
        MIT {new Date().getFullYear()} ©{' '}
        <a
          href="https://github.com/Ergashov15/qa-uzbekistan"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
        >
          QA Compass
        </a>
        . Ochiq manbali bilimlar bazasi.
      </span>
      <span className="text-center sm:text-right leading-relaxed">
        Xalqaro standartlar va sifat madaniyati bilan yaratilgan
      </span>
    </div>
  </footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="uz" dir="ltr" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="font-sans antialiased">
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
          lastUpdated={<LastUpdated locale="uz">Oxirgi yangilanish:</LastUpdated>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
