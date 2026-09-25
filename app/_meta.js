export default {
  index: {
    title: 'Bosh Sahifa',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'full',
      sidebar: false,
      toc: false
    }
  },
  docs: {
    title: '📘 Fundamentals & Artifacts',
    type: 'page'
  },
  technical: {
    title: '⚙️ Technical & WebSockets',
    type: 'page',
    href: '/docs/networks/socket-websocket'
  },
  templates: {
    title: '📑 Templates & Metrics',
    type: 'page',
    href: '/docs/test-documentation/software-test-metrics'
  },
  roadmap: {
    title: '🗺️ Roadmap',
    type: 'page',
    theme: {
      sidebar: false,
      toc: true
    }
  }
}
