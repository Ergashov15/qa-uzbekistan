import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s | QA Journey',
    default: "QA Journey — O'zbekcha QA Qo'llanmasi"
  },
  description: "Yangi o'rganuvchilar va tajribali QA muhandislari uchun to'liq bepul ochiq manbali qo'llanma.",
  keywords: ['QA', 'Software Testing', 'Manual Testing', 'Automation Testing', 'Playwright', 'Postman', 'SDET', 'Uzbekistan QA']
}

const banner = (
  <Banner storageKey="qa-journey-welcome">
    🌟 QA Journey — O'zbek tilidagi ilk ochiq manbali QA platformasi!
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '18px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#2563eb' }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <span style={{ backgroundColor: '#2563eb', color: '#fff', padding: '2px 8px', borderRadius: '6px', fontSize: '14px' }}>QA</span>
        Journey
      </span>
    }
    projectLink="https://github.com"
    chatLink="https://t.me"
    chatIcon={
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
      </svg>
    }
    align="right"
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} ©{' '}
    <a href="https://github.com" target="_blank" rel="noreferrer">
      QA Journey
    </a>
    . Ochiq manbali ta'lim platformasi.
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="uz" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
            toggleButton: true
          }}
          toc={{
            float: true,
            title: 'Ushbu sahifada',
            backToTop: 'Yuqoriga qaytish'
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
