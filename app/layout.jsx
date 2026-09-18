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
        <span style={{ backgroundColor: '#2563eb', color: '#fff', padding: '2px 8px', borderRadius: '6px', fontSize: '14px' }}>QA</span>
        Journey
      </span>
    }
    projectLink="https://github.com"
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
