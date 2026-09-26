'use client'

import React, { useState, useMemo } from 'react'
import {
  ShieldCheck,
  FileCheck2,
  Globe,
  Database,
  Smartphone,
  Bot,
  GitBranch,
  Gauge,
  Award,
  ChevronDown,
  ChevronUp,
  Clock,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Target,
  Wrench,
  Search,
  Filter
} from 'lucide-react'

// 9 Asosiy Bosqich Ma'lumotlari
const ROADMAP_STEPS = [
  {
    id: 1,
    phase: '01',
    category: 'manual',
    categoryName: 'Manual & Asoslar',
    title: "Dasturiy Ta'minot va Sinov Fundamental Asoslari",
    level: "Boshlang'ich (Trainee)",
    duration: "2-3 hafta",
    icon: ShieldCheck,
    iconColor: '#0284c7',
    iconBg: 'rgba(2, 132, 199, 0.12)',
    summary: "Dasturiy ta'minot nima, nima uchun xatoliklar yuzaga keladi va ularni topish qanday biznes qiymat berishini tushunish.",
    topics: [
      { type: 'must', text: "SDLC (Dasturiy ta'minot hayotiy sikli): Agile, Scrum, Kanban va Waterfall modellari." },
      { type: 'must', text: "STLC (Sinov hayotiy sikli): Talablarni tahlil qilishdan tortib, sinov xulosasigacha bo'lgan bosqichlar." },
      { type: 'must', text: "Sinovning 7 ta oltin tamoyili (ISTQB): Pestitsid paradoksi, erta sinov, xatoliklar klasteri." },
      { type: 'must', text: "Xatolar tabiati: Bug, Defect, Error va Failure orasidagi aniq farqlar." },
      { type: 'must', text: "Sinov darajalari: Unit, Integration, System va Acceptance (UAT) testing." },
      { type: 'recommended', text: "Statik va Dinamik sinov: Code Review, Walkthrough, Talablarni tekshirish (Inspection)." },
      { type: 'recommended', text: "Verifikatsiya va Validatsiya: V-Model asosida mahsulotni to'g'ri qurish va to'g'ri narsani qurish." }
    ],
    tools: ['Jira', 'Trello', 'Confluence', 'Miro / Draw.io'],
    project: "Haqiqiy veb-sayt talablarini o'rganib, undagi kamchiliklar va noaniqliklar bo'yicha savollar ro'yxatini (Clarification Checklist) tuzish.",
    links: [
      { title: "Software Testing Asoslari", url: "/docs/software-testing" },
      { title: "SDLC Modellari", url: "/docs/sdlc-models" },
      { title: "ISTQB Fundamental Tushunchalar", url: "/docs/istqb-foundation/fundamentals-of-testing" }
    ]
  },
  {
    id: 2,
    phase: '02',
    category: 'manual',
    categoryName: 'Manual & Asoslar',
    title: "Test Dizayn Texnikalari va Test Hujjatlari",
    level: "Junior QA",
    duration: "3-4 hafta",
    icon: FileCheck2,
    iconColor: '#059669',
    iconBg: 'rgba(5, 150, 105, 0.12)',
    summary: "Kam sonli testlar bilan maksimal xatolarni aniqlash metodikasi hamda xalqaro standartdagi test hujjatlarini yuritish.",
    topics: [
      { type: 'must', text: "Qora quti (Black-Box) texnikalari: Ekvivalentlik sinflari (EP) va Chegaraviy qiymatlar tahlili (BVA)." },
      { type: 'must', text: "Murakkab mantiqni sinash: Qarorlar jadvali (Decision Table) va Holatlar o'tishi (State Transition)." },
      { type: 'must', text: "Test artefaktlari: Test Plan (ko'lami va resurslar), Test Scenario, Test Case va Checklist tuzilishi." },
      { type: 'must', text: "Bug Report anatomiyasi: Qisqa sarlavha, qayta hosil qilish qadamlari, Kutilgan vs Haqiqiy natija, Severity va Priority." },
      { type: 'recommended', text: "Talablar kuzatuvchanlik matritsasi (RTM): Talablar va test keyslar orasidagi 100% bog'liqlik." },
      { type: 'recommended', text: "Tajribaga asoslangan texnikalar: Exploratory testing (Tadqiqotchi sinov) va Error Guessing." }
    ],
    tools: ['Jira', 'Qase.io', 'TestRail', 'Google Sheets / Excel'],
    project: "Haqiqiy e-commerce (internet do'kon) loyihasi uchun 30+ ta to'liq Test Case yozish, RTM matritsasini tuzish va kamida 5 ta sifatli Bug Report yaratish.",
    links: [
      { title: "Test Texnikalari Markazi", url: "/docs/test-techniques" },
      { title: "Test Hujjatlari (IEEE 829)", url: "/docs/test-documentation" },
      { title: "Nuqsonlarni Kuzatish (Bug Report)", url: "/docs/defect-tracking" }
    ]
  },
  {
    id: 3,
    phase: '03',
    category: 'web-api',
    categoryName: 'Web, API & SQL',
    title: "Web Texnologiyalari va Chrome DevTools Sinovlari",
    level: "Junior+ QA",
    duration: "2-3 hafta",
    icon: Globe,
    iconColor: '#0d9488',
    iconBg: 'rgba(13, 148, 136, 0.12)',
    summary: "Internet qanday ishlashi, mijoz-server arxitekturasi va brauzer orqali xatolarni ildizidan aniqlash (DevTools).",
    topics: [
      { type: 'must', text: "Web asoslari: Client-Server arxitekturasi, DNS, IP manzillar va domenlar tizimi." },
      { type: 'must', text: "HTTP / HTTPS protokollari: So'rov va javob strukturasi (Headers, Body, Payload, Status kodlari)." },
      { type: 'must', text: "HTTP Status kodlari: 2xx (Muvaffaqiyat), 3xx (Yo'naltirish), 4xx (Mijoz xatosi), 5xx (Server xatosi)." },
      { type: 'must', text: "Chrome DevTools tahlili: Elements (DOM/CSS), Console (JS xatoliklari), Network (So'rovlar, Response, Timing)." },
      { type: 'recommended', text: "Mijoz tomonida saqlash: Cookies, LocalStorage, SessionStorage va Cache mexanizmlari." },
      { type: 'advanced', text: "Real-time protokollar: WebSockets va SSE (Server-Sent Events) xabarlarini Network oynasida tutish." }
    ],
    tools: ['Chrome DevTools', 'Firefox Developer Tools', 'Lighthouse'],
    project: "Haqiqiy veb-saytda sekin yuklanayotgan so'rovlarni (Network Throttling) aniqlash, konsoldagi frontend xatolarni ajratish va cookie ma'lumotlarini manipulyatsiya qilish.",
    links: [
      { title: "Tarmoqlar va Web Asoslari", url: "/docs/networks" },
      { title: "HTTP va HTTPS Protokollari", url: "/docs/networks/http" },
      { title: "Cookies va Client Storage", url: "/docs/networks/client-side-storage" }
    ]
  },
  {
    id: 4,
    phase: '04',
    category: 'web-api',
    categoryName: 'Web, API & SQL',
    title: "Backend, REST API va Ma'lumotlar Bazasi (SQL)",
    level: "Middle QA",
    duration: "4-5 hafta",
    icon: Database,
    iconColor: '#2563eb',
    iconBg: 'rgba(37, 99, 235, 0.12)',
    summary: "Foydalanuvchi interfeysidan (UI) chuqurroq o'tib, backend biznes mantig'i va ma'lumotlar yaxlitligini sinash.",
    topics: [
      { type: 'must', text: "REST API tamoyillari: Endpoints, HTTP metodlari (GET, POST, PUT, PATCH, DELETE) va JSON formati." },
      { type: 'must', text: "Postman bilan ishlash: Kolleksiyalar (Collections), Muhit o'zgaruvchilari (Environment & Globals), Auth (Bearer token)." },
      { type: 'must', text: "Postman test skriptlari: Status kod, Response vaqtini va JSON sxemasini avtomatik tekshirish (pm.test, pm.expect)." },
      { type: 'must', text: "SQL so'rovlar: SELECT, WHERE, ORDER BY, GROUP BY, HAVING, LIKE, IN, BETWEEN." },
      { type: 'must', text: "Jadvallarni birlashtirish: INNER JOIN, LEFT JOIN va relatsion ma'lumotlar tahlili." },
      { type: 'recommended', text: "CRUD amallari: INSERT, UPDATE, DELETE va ma'lumotlar yaxlitligi (ACID tamoyillari)." },
      { type: 'advanced', text: "Postman Pre-request skriptlar orqali dinamik tokenlar generatsiya qilish va Newman bilan CLI orqali yurgizish." }
    ],
    tools: ['Postman', 'Newman', 'PostgreSQL / MySQL', 'DBeaver'],
    project: "15+ endpointdan iborat to'liq REST API test kolleksiyasini tuzish, avtomatlashgan assertlar yozish va SQL orqali ma'lumotlar to'g'ri yozilganini tasdiqlash.",
    links: [
      { title: "REST, SOAP va gRPC Farqlari", url: "/docs/networks/rest-soap-grpc" },
      { title: "Web Xizmatlar Arxitekturasi", url: "/docs/networks/web-service" },
      { title: "Sinov Vositalari (Postman, DBeaver)", url: "/docs/testing-tools" }
    ]
  },
  {
    id: 5,
    phase: '05',
    category: 'web-api',
    categoryName: 'Web, API & SQL',
    title: "Mobil Ilovalarni Sinash (Mobile QA)",
    level: "Middle QA",
    duration: "2-3 hafta",
    icon: Smartphone,
    iconColor: '#e11d48',
    iconBg: 'rgba(225, 29, 72, 0.12)',
    summary: "Android va iOS platformalarining o'ziga xosliklari, uzilishlar va mobil tarmoq trafigini tahlil qilish.",
    topics: [
      { type: 'must', text: "Mobil ilova turlari: Native (Kotlin/Swift), Hybrid / Cross-platform (Flutter, React Native) va PWA." },
      { type: 'must', text: "Mobilga xos sinovlar: Interrupt testing (qo'ng'iroq, SMS, quvvat tugashi), ekran orientatsiyasi, o'lchamlar parchalanishi." },
      { type: 'must', text: "Tarmoq xatti-harakati: Zaif internet (2G/3G), samolyot rejimi, offline rejimda keshdan ishlash va tarmoq almashinuvi." },
      { type: 'recommended', text: "Android Debug Bridge (ADB): Qurilmani boshqarish, APK o'rnatish va adb logcat orqali tizim loglarini o'qish." },
      { type: 'advanced', text: "Proxy sniffing: Charles Proxy yoki Proxyman orqali mobil qurilmaning HTTPS trafigini tutish va o'zgartirish." }
    ],
    tools: ['Android Studio (Emulator)', 'Xcode (Simulator)', 'Charles Proxy', 'Proxyman', 'ADB'],
    project: "Haqiqiy mobil ilovada Charles Proxy orqali HTTPS trafikni ushlash, ADB logcat orqali ilova nosozligi (Crash log) topib dasturchiga Bug Report yaratish.",
    links: [
      { title: "Mobil Ilovalarni Sinash Markazi", url: "/docs/mobile-testing" },
      { title: "Sinov Turlari Katalogi", url: "/docs/types-of-testing" }
    ]
  },
  {
    id: 6,
    phase: '06',
    category: 'automation',
    categoryName: 'Avtomatlashtirish & CI/CD',
    title: "Testlarni Avtomatlashtirish (QA Automation / SDET)",
    level: "Senior QA / SDET",
    duration: "6-8 hafta",
    icon: Bot,
    iconColor: '#6366f1',
    iconBg: 'rgba(99, 102, 241, 0.12)',
    summary: "Regressiya va zerikarli qo'lda sinovlarni dasturiy kod vositasida zamonaviy Playwright freymvorkida avtomatlashtirish.",
    topics: [
      { type: 'must', text: "Dasturlash tili asoslari: TypeScript / JavaScript (zamonaviy QA talablarida eng ommabop) yoki Python." },
      { type: 'must', text: "Zamonaviy E2E freymvorki: Playwright (Tezkor, avtomatik kutish — auto-waiting, parallel yurgizish, ko'p brauzerli sinov)." },
      { type: 'must', text: "Page Object Model (POM): Test kodini toza, modulli va oson kengaytiriladigan qilib tashkil etish arxitekturasi." },
      { type: 'must', text: "Selektorlar strategiyasi: User-facing lokatorlar (getByRole, getByText, getByTestId) bilan barqaror test yozish." },
      { type: 'recommended', text: "API sinovlarini avtomatlashtirish: Playwright API request orqali backendni test qilish va test ma'lumotlarini tayyorlash." },
      { type: 'advanced', text: "Mocking & Network Interception: Server javoblarini simulyatsiya qilish va beqaror (flaky) testlarni bartaraf etish." }
    ],
    tools: ['Playwright', 'TypeScript / JavaScript', 'VS Code', 'Node.js', 'Git'],
    project: "Haqiqiy veb-loyiha uchun to'liq Page Object Model (POM) arxitekturasida Playwright E2E avtotest to'plamini yozish va barqaror parallel ijroni ta'minlash.",
    links: [
      { title: "Sinov Vositalari (Playwright)", url: "/docs/testing-tools" },
      { title: "Avtomatlashtirilgan Sinov Asoslari", url: "/docs/types-of-testing/automated-testing" }
    ]
  },
  {
    id: 7,
    phase: '07',
    category: 'automation',
    categoryName: 'Avtomatlashtirish & CI/CD',
    title: "CI/CD, DevOps va Test Infratuzilmasi",
    level: "Senior QA / SDET",
    duration: "3-4 hafta",
    icon: GitBranch,
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139, 92, 246, 0.12)',
    summary: "Avtotestlarni umumiy dasturiy ta'minot yetkazib berish konveyeriga (Continuous Integration) avtomatik ulash.",
    topics: [
      { type: 'must', text: "Git versiyalar nazorati: clone, branch, commit, push, pull request va merge conflictlarni hal qilish." },
      { type: 'must', text: "GitHub Actions bilan CI/CD: Workflow fayllari (.github/workflows), pull_request va schedule triggerlari." },
      { type: 'must', text: "Avtotestlarni CI/CD ga ulash: Dasturchi kod qo'shgan zahoti testlarning avtomatik yugurishi va sifat darvozasi (Quality Gate)." },
      { type: 'recommended', text: "Docker konteynerlashtirish: Test muhitini izolyatsiyalash va har qanday serverda bir xil natija olish." },
      { type: 'recommended', text: "Test hisobotlari (Reporting): Allure Report yoki Playwright HTML hisobotlarini avtomatik generatsiya qilish." },
      { type: 'advanced', text: "Parallel & Sharded ijro: Ko'p sonli testlarni bir nechta virtual runnerlarda bo'lib yurgizib, vaqtni 10 barobar tejash." }
    ],
    tools: ['GitHub Actions', 'Docker', 'Docker Compose', 'Allure Framework', 'Git'],
    project: "GitHub'da Playwright testlarini Docker ichida har bir Pull Request uchun ishga tushiruvchi va Allure Report hisobotini nashr etuvchi CI/CD pipeline yaratish.",
    links: [
      { title: "Sinov Vositalari Sharhi", url: "/docs/testing-tools" },
      { title: "Test Boshqaruvi va Jarayonlar", url: "/docs/test-management" }
    ]
  },
  {
    id: 8,
    phase: '08',
    category: 'advanced',
    categoryName: 'Performance & Karyera',
    title: "No-funksional Sinovlar: Performance va Security",
    level: "Senior QA / Lead",
    duration: "3-4 hafta",
    icon: Gauge,
    iconColor: '#f59e0b',
    iconBg: 'rgba(245, 158, 11, 0.12)',
    summary: "Tizimning millionlab foydalanuvchilar oqimiga bardoshliligi va xavfsizlik zaifliklarini tekshirish.",
    topics: [
      { type: 'must', text: "Unumdorlik sinovlari turlari: Load Testing, Stress Testing, Spike Testing va Endurance (Soak) sinovlari." },
      { type: 'must', text: "Performance metrikalari: Response Time (p90, p95, p99), Throughput (RPS), Error Rate va Concurrency." },
      { type: 'recommended', text: "Zamonaviy yuklama vositasi: k6 (JavaScript kod asosida) yoki Apache JMeter bilan yuklama ssenariylarini yozish." },
      { type: 'recommended', text: "Xavfsizlik sinovlari asoslari: OWASP Top 10 (SQL Injection, XSS, Broken Authentication, Sensitive Data Exposure)." },
      { type: 'advanced', text: "DAST & Dinamik skanerlash: OWASP ZAP yoki Burp Suite orqali avtomatlashgan zaifliklarni aniqlash." }
    ],
    tools: ['k6', 'Apache JMeter', 'OWASP ZAP', 'Burp Suite', 'Lighthouse'],
    project: "k6 yordamida REST API uchun 500 ta virtual foydalanuvchili yuklama skriptini yozish, Response Time p95 me'yorlarini tekshirish va hisobot tayyorlash.",
    links: [
      { title: "Yuklama Sinovi (Load Testing)", url: "/docs/types-of-testing/load-testing" },
      { title: "Stress Sinovi (Stress Testing)", url: "/docs/types-of-testing/stress-testing" },
      { title: "Xavfsizlik Sinovlari (Security Testing)", url: "/docs/types-of-testing/security-testing" }
    ]
  },
  {
    id: 9,
    phase: '09',
    category: 'advanced',
    categoryName: 'Performance & Karyera',
    title: "ISTQB Sertifikati, Portfolio va Karyera Rivoji",
    level: "Professional / Lead",
    duration: "Doimiy",
    icon: Award,
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.12)',
    summary: "Xalqaro standartdagi sertifikat, kuchli ochiq kodli portfolio va texnik intervyulardan muvaffaqiyatli o'tish.",
    topics: [
      { type: 'must', text: "ISTQB CTFL v4.0 sertifikati: Xalqaro miqyosda tan olingan rasmiy sinovchi sertifikatiga tayyorgarlik." },
      { type: 'must', text: "GitHub Portfolio: Toza kodli, Playwright + CI/CD ga ega namunaviy loyihani ochiq repozitoriyada taqdim etish." },
      { type: 'must', text: "Rezyume va LinkedIn: Yutuqlarni metrikalar bilan ko'rsatish (masalan, 'test vaqtini 50% ga qisqartirdim', '150+ bug topildi')." },
      { type: 'recommended', text: "Texnik intervyu ko'nikmalari: Situatsion keyslar (STAR metodi), jonli kod yozish (Live Coding), test dizayn masalalari." },
      { type: 'advanced', text: "QA Lead va Sifat Madaniyati: Sifat metrikalari (DRE, DDP), QA jarayonlarini kompaniyada noldan yo'lga qo'yish." }
    ],
    tools: ['GitHub', 'LinkedIn', 'ISTQB CTFL v4', 'Notion', 'SonarQube'],
    project: "Xalqaro formatdagi rezyume, GitHub'da to'liq hujjatlashtirilgan avtotest portfolio loyihasi va ISTQB namunaviy testlaridan 80%+ natija olish.",
    links: [
      { title: "ISTQB Foundation To'liq Bo'limi", url: "/docs/istqb-foundation" },
      { title: "Test Menejment va Strategiya", url: "/docs/test-management" },
      { title: "Sinov Hujjatlari Va Shablonlar", url: "/docs/test-documentation" }
    ]
  }
]

// 4 Ta Karyera Pog'onasi (Career Matrix)
const CAREER_LEVELS = [
  {
    role: "Junior QA Engineer",
    exp: "0 - 1 yil",
    badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400",
    summary: "Talablarni tahlil qilish, qo'lda sinovlarni sifatli o'tkazish, test-keyslar yozish va aniq xatolik hisobotlarini yaratish.",
    skills: ["ISTQB Asoslari", "EP & BVA Dizayn", "Test Case & Checklist", "Bug Report (Jira)", "Chrome DevTools"],
    tools: ["Jira", "Qase / TestRail", "DevTools", "Postman (Basic)"],
    deliverable: "To'liq qamrovli test-keyslar to'plami va xatosiz qayta hosil qilinadigan Bug Reportlar."
  },
  {
    role: "Middle QA Engineer",
    exp: "1 - 3 yil",
    badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
    summary: "REST API'ni avtomatlashtirilgan holda sinash, SQL orqali ma'lumotlar bazasini tekshirish, mobil ilovalar va tarmoq proksilari bilan ishlash.",
    skills: ["REST API & Postman Scripts", "SQL (JOIN, CRUD)", "Mobile QA & ADB", "Charles Proxy", "Git Asoslari"],
    tools: ["Postman", "PostgreSQL / DBeaver", "ADB", "Charles Proxy", "Git"],
    deliverable: "API test kolleksiyalari, backend integratsion sinovlari va Test Plan hujjatlari."
  },
  {
    role: "Senior QA / SDET",
    exp: "3 - 5 yil",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    summary: "E2E va API test avtomatlashtirish tizimlarini noldan qurish, CI/CD ga integratsiya qilish, beqaror testlarni kamaytirish.",
    skills: ["TypeScript / Python", "Playwright / Cypress", "Page Object Model", "CI/CD (GitHub Actions)", "Docker & Allure"],
    tools: ["Playwright", "TypeScript", "Docker", "GitHub Actions", "Allure Report"],
    deliverable: "Mustaqil va barqaror ishlaydigan E2E avtotest ekotizimi, har bir PR uchun avtomatik sinov."
  },
  {
    role: "QA Lead / Architect",
    exp: "5+ yil",
    badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400",
    summary: "Kompaniya sifat strategiyasini belgilash, sifat metrikalarini monitoring qilish, test jarayonlarini optimallashtirish va jamoani boshqarish.",
    skills: ["Sifat Strategiyasi (QA Strategy)", "Sifat Metrikalari (DRE, DDP)", "Test Arxiv & Jarayon Audit", "Jamoa Mentorligi", "Risk Menejment"],
    tools: ["Confluence", "Jira Dashboards", "SonarQube", "Grafana", "Metrika Tizimlari"],
    deliverable: "Kompaniya darajasidagi Sifat Siyosati, avtotest arxitekturasi va yuqori unumdor QA jamoasi."
  }
]

export function RoadmapViewer() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSteps, setExpandedSteps] = useState(() => {
    // Default holatda birinchi 3 ta bosqich ochiq bo'ladi
    return { 1: true, 2: true, 3: true }
  })

  // Filtrlangan bosqichlar
  const filteredSteps = useMemo(() => {
    return ROADMAP_STEPS.filter(step => {
      const matchesCategory = activeCategory === 'all' || step.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch = !query || 
        step.title.toLowerCase().includes(query) ||
        step.level.toLowerCase().includes(query) ||
        step.tools.some(t => t.toLowerCase().includes(query)) ||
        step.topics.some(t => t.text.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const toggleStep = (id) => {
    setExpandedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const expandAll = () => {
    const all = {}
    ROADMAP_STEPS.forEach(s => { all[s.id] = true })
    setExpandedSteps(all)
  }

  const collapseAll = () => {
    setExpandedSteps({})
  }

  return (
    <div className="roadmap-container">
      {/* 1. Header & Lead */}
      <div className="roadmap-hero-card">
        <div className="roadmap-badge-top">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Professional QA Yo'l Xaritasi • 2025/2026</span>
        </div>
        <h2 className="roadmap-hero-title">
          Noldan Senior QA va SDET Darajasigacha Bo'lgan Yo'l
        </h2>
        <p className="roadmap-hero-desc">
          Ushbu yo'l xaritasi xalqaro <strong>ISTQB CTFL v4.0</strong>, zamonaviy <strong>Software Quality Engineering</strong> amaliyoti va global IT-bozor talablari asosida tuzilgan. Nazariy quruq qoidalardan xoli, har bir bosqichda amaliy loyiha va real ko'nikmalarga e'tibor qaratilgan.
        </p>

        {/* Legend / Status belgilari */}
        <div className="roadmap-legend-bar">
          <div className="legend-item">
            <span className="legend-dot dot-must"></span>
            <span className="legend-text"><strong>Majburiy:</strong> Poydevor va har bir sinovchiga shart bo'lgan mavzular</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot dot-recommended"></span>
            <span className="legend-text"><strong>Tavsiya:</strong> Bozor qiymatini keskin oshiruvchi texnologiyalar</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot dot-advanced"></span>
            <span className="legend-text"><strong>Ixtisoslashuv:</strong> SDET va Lead darajasidagi chuqur amaliyot</span>
          </div>
        </div>
      </div>

      {/* 2. Karyera Pog'onalari (Career Matrix) */}
      <div className="roadmap-section-header">
        <div className="section-title-wrap">
          <Briefcase className="w-5 h-5 text-emerald-500" />
          <h3 className="section-title">Karyera Pog'onalari va Malaka Matritsasi</h3>
        </div>
        <p className="section-desc">
          QA sohasida o'sish qanday kechadi va har bir darajadan nima kutiladi:
        </p>
      </div>

      <div className="career-grid">
        {CAREER_LEVELS.map((career, idx) => (
          <div key={idx} className="career-card">
            <div className="career-card-top">
              <span className={`career-role-badge ${career.badgeColor}`}>
                {career.role}
              </span>
              <span className="career-exp">{career.exp}</span>
            </div>
            <p className="career-summary">{career.summary}</p>
            
            <div className="career-block">
              <div className="career-block-label">Asosiy Bilimlar:</div>
              <div className="career-tags">
                {career.skills.map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="career-block">
              <div className="career-block-label">Asboblar (Tools):</div>
              <div className="career-tools">
                {career.tools.join(' • ')}
              </div>
            </div>

            <div className="career-deliverable">
              <strong>Kutilayotgan Natija:</strong> {career.deliverable}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bosqichma-bosqich Yo'l Xaritasi */}
      <div className="roadmap-section-header" style={{ marginTop: '3.5rem' }}>
        <div className="section-title-wrap">
          <Target className="w-5 h-5 text-emerald-500" />
          <h3 className="section-title">9 Bosqichli Amaliy O'rganish Rejasi</h3>
        </div>
        <p className="section-desc">
          Boshlang'ich nazariyadan boshlab test avtomatlashtirish, CI/CD va xalqaro sertifikatlashgacha:
        </p>
      </div>

      {/* Filter va Boshqaruv Paneli */}
      <div className="roadmap-controls-bar">
        <div className="filter-buttons">
          <button
            onClick={() => setActiveCategory('all')}
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          >
            Barchasi (9)
          </button>
          <button
            onClick={() => setActiveCategory('manual')}
            className={`filter-btn ${activeCategory === 'manual' ? 'active' : ''}`}
          >
            Manual & Asoslar (1-2)
          </button>
          <button
            onClick={() => setActiveCategory('web-api')}
            className={`filter-btn ${activeCategory === 'web-api' ? 'active' : ''}`}
          >
            Web, API & SQL (3-5)
          </button>
          <button
            onClick={() => setActiveCategory('automation')}
            className={`filter-btn ${activeCategory === 'automation' ? 'active' : ''}`}
          >
            Avtomatlashtirish & CI/CD (6-7)
          </button>
          <button
            onClick={() => setActiveCategory('advanced')}
            className={`filter-btn ${activeCategory === 'advanced' ? 'active' : ''}`}
          >
            Performance & Karyera (8-9)
          </button>
        </div>

        <div className="controls-right">
          {/* Qidiruv */}
          <div className="search-wrap">
            <Search className="w-3.5 h-3.5 text-muted-foreground search-icon" />
            <input
              type="text"
              placeholder="Mavzu yoki vosita qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="roadmap-search-input"
            />
          </div>

          {/* Hammasini ochish / yopish */}
          <div className="expand-buttons">
            <button onClick={expandAll} className="action-link-btn" title="Barchasini ochish">
              Ochish
            </button>
            <span className="divider-slash">/</span>
            <button onClick={collapseAll} className="action-link-btn" title="Barchasini yopish">
              Yopish
            </button>
          </div>
        </div>
      </div>

      {/* 4. Bosqichlar Ro'yxati (Timeline Cards) */}
      <div className="roadmap-steps-list">
        {filteredSteps.length === 0 ? (
          <div className="empty-search-state">
            <p>"{searchQuery}" bo'yicha hech qanday bosqich topilmadi.</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="reset-btn">
              Filtrlarni tozalash
            </button>
          </div>
        ) : (
          filteredSteps.map((step) => {
            const isExpanded = !!expandedSteps[step.id]
            const Icon = step.icon

            return (
              <div key={step.id} className={`step-card ${isExpanded ? 'expanded' : 'collapsed'}`}>
                {/* Bosqich Sarlavhasi (Header Bar) */}
                <div className="step-card-header" onClick={() => toggleStep(step.id)}>
                  <div className="step-header-left">
                    {/* Bosqich Raqami */}
                    <div className="step-number-badge">
                      <span>{step.phase}</span>
                    </div>

                    {/* Ikonka */}
                    <div
                      className="step-icon-badge"
                      style={{ backgroundColor: step.iconBg, color: step.iconColor }}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>

                    {/* Sarlavha & Metalar */}
                    <div className="step-title-wrap">
                      <div className="step-meta-row">
                        <span className="step-category-pill">{step.categoryName}</span>
                        <span className="step-level-pill">{step.level}</span>
                        <span className="step-duration-pill">
                          <Clock className="w-3 h-3 inline-block mr-1" />
                          {step.duration}
                        </span>
                      </div>
                      <h4 className="step-title">{step.title}</h4>
                    </div>
                  </div>

                  {/* Ochish/Yopish Chevron */}
                  <div className="step-header-right">
                    <button
                      className="chevron-btn"
                      aria-label={isExpanded ? "Yopish" : "Ochish"}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Bosqich Mazmuni (Body) */}
                {isExpanded && (
                  <div className="step-card-body">
                    {/* Qisqacha ta'rif */}
                    <p className="step-summary-text">{step.summary}</p>

                    {/* Mavzular ro'yxati */}
                    <div className="step-topics-section">
                      <h5 className="sub-section-title">O'rganilishi kerak bo'lgan asosiy mavzular:</h5>
                      <ul className="topics-list">
                        {step.topics.map((topic, tIdx) => (
                          <li key={tIdx} className={`topic-item topic-${topic.type}`}>
                            <span className={`topic-badge badge-${topic.type}`}>
                              {topic.type === 'must' && 'Majburiy'}
                              {topic.type === 'recommended' && 'Tavsiya'}
                              {topic.type === 'advanced' && 'Ixtisoslashuv'}
                            </span>
                            <span className="topic-text">{topic.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Vositalar (Tech Stack) */}
                    <div className="step-tools-section">
                      <div className="tools-label">
                        <Wrench className="w-4 h-4 text-emerald-500 inline-block mr-1.5" />
                        <strong>Asboblar va Vositalar:</strong>
                      </div>
                      <div className="tools-chips-wrap">
                        {step.tools.map((tool, toolIdx) => (
                          <span key={toolIdx} className="tool-chip">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Amaliy Loyiha / Milestone */}
                    <div className="step-project-card">
                      <div className="project-badge">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Amaliy topshiriq / Portfolioga natija:</span>
                      </div>
                      <p className="project-desc">{step.project}</p>
                    </div>

                    {/* Saytdagi darslar (Quick Links) */}
                    {step.links && step.links.length > 0 && (
                      <div className="step-links-section">
                        <span className="links-label">QA Compass platformasidagi o'quv materiallari:</span>
                        <div className="links-wrap">
                          {step.links.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.url}
                              className="step-doc-link"
                            >
                              <span>{link.title}</span>
                              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>

      {/* 5. Xulosa va Oltin Maslahat */}
      <div className="roadmap-footer-advice">
        <div className="advice-header">
          <Sparkles className="w-5 h-5 text-emerald-500 shrink-0" />
          <h4>O'rganish Bo'yicha Oltin Qoidalar</h4>
        </div>
        <p>
          1. <strong>Bosqichlarni ketma-ket bajaring:</strong> Sinov asoslarini (EP, BVA, Bug Report) bilmasdan turib avtomatlashtirishga shoshilish xato testlarni yozishga olib keladi.<br />
          2. <strong>Har kuni amaliyot:</strong> Nazariyani o'qib, o'sha kuniyoq Postman yoki Chrome DevTools'da amalda sinab ko'ring.<br />
          3. <strong>Sifat fikrlash tarzidir:</strong> Test muhandisining eng kuchli vositasi — bu tizimli mantiqiy fikrlash, savollar berish va biznes ehtiyojlarini tushunishdir.
        </p>
      </div>
    </div>
  )
}
