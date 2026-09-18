import fs from 'node:fs'
import path from 'node:path'

const schemaPath = path.resolve(process.cwd(), 'node_modules/nextra-theme-docs/dist/schemas.js')

if (fs.existsSync(schemaPath)) {
  let content = fs.readFileSync(schemaPath, 'utf8')
  if (content.includes('children: reactNode,')) {
    content = content.replace('children: reactNode,', 'children: reactNode.optional(),')
    fs.writeFileSync(schemaPath, content, 'utf8')
    console.log('[patch] Successfully patched nextra-theme-docs LayoutPropsSchema bug')
  }
}
