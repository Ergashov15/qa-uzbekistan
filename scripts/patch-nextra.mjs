import fs from 'node:fs'
import path from 'node:path'

// 1. Patch LayoutPropsSchema bug in nextra-theme-docs
const schemaPath = path.resolve(process.cwd(), 'node_modules/nextra-theme-docs/dist/schemas.js')

if (fs.existsSync(schemaPath)) {
  let content = fs.readFileSync(schemaPath, 'utf8')
  if (content.includes('children: reactNode,')) {
    content = content.replace('children: reactNode,', 'children: reactNode.optional(),')
    fs.writeFileSync(schemaPath, content, 'utf8')
    console.log('[patch] Successfully patched nextra-theme-docs LayoutPropsSchema bug')
  }
}

// 2. Patch Sidebar and MobileNav in nextra-theme-docs
const sidebarPath = path.resolve(process.cwd(), 'node_modules/nextra-theme-docs/dist/components/sidebar.js')

if (fs.existsSync(sidebarPath)) {
  let content = fs.readFileSync(sidebarPath, 'utf8')

  // Add null check for sidebarRef.current before querySelector in MobileNav and Sidebar
  if (!content.includes('if (!sidebar) return;')) {
    content = content.replaceAll(
      'const sidebar = sidebarRef.current;',
      'const sidebar = sidebarRef.current;\n      if (!sidebar) return;'
    )
    console.log('[patch] Successfully patched sidebarRef null safety')
  }

  // Patch Sidebar and MobileNav conditional rendering on home page
  if (!content.includes('/* [patch] conditional sidebar */')) {
    content = content.replace(
      'return t13;\n};',
      '/* [patch] conditional sidebar */\n  const pathname = usePathname();\n  if (pathname === \'/\' || hideSidebar) {\n    return null;\n  }\n  return t13;\n};'
    )

    content = content.replace(
      'return t9;\n};',
      '/* [patch] conditional mobile nav */\n  const { hideSidebar } = useConfig();\n  if (pathname === \'/\' || hideSidebar) {\n    return null;\n  }\n  return t9;\n};'
    )
    console.log('[patch] Successfully patched nextra-theme-docs Sidebar conditional rendering')
  }

  fs.writeFileSync(sidebarPath, content, 'utf8')
}

// 3. Disable footer switchers (ThemeSwitch / LocaleSwitch in footer)
const switchersPath = path.resolve(process.cwd(), 'node_modules/nextra-theme-docs/dist/components/footer/switchers.js')

if (fs.existsSync(switchersPath)) {
  let content = fs.readFileSync(switchersPath, 'utf8')
  if (!content.includes('/* [patch] disable footer switchers */')) {
    content = '/* [patch] disable footer switchers */\nexport const Switchers = () => null;\n'
    fs.writeFileSync(switchersPath, content, 'utf8')
    console.log('[patch] Successfully disabled footer switchers')
  }
}

// 4. Localize LastUpdated component default strings to Uzbek
const lastUpdatedPath = path.resolve(process.cwd(), 'node_modules/nextra-theme-docs/dist/components/last-updated.js')

if (fs.existsSync(lastUpdatedPath)) {
  let content = fs.readFileSync(lastUpdatedPath, 'utf8')
  if (content.includes('"Last updated on"')) {
    content = content.replace('"Last updated on"', '"Oxirgi yangilanish:"')
    content = content.replace('locale = t2 === void 0 ? "en" : t2', 'locale = t2 === void 0 ? "uz" : t2')
    fs.writeFileSync(lastUpdatedPath, content, 'utf8')
    console.log('[patch] Successfully localized LastUpdated component to Uzbek')
  }
}

