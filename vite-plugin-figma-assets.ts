import type { Plugin } from 'vite'

export function figmaAssets(): Plugin {
  return {
    name: 'figma-assets',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        // Extract the filename from the Figma asset path
        const filename = id.replace('figma:asset/', '')
        // Return a virtual module ID
        return `\0figma-asset:${filename}`
      }
      return null
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        // Extract the filename
        const filename = id.replace('\0figma-asset:', '')
        // Return a module that exports the asset path
        // For now, we'll use a placeholder. In production, you'd want to
        // actually fetch or reference the real assets
        return `export default '/assets/${filename}'`
      }
      return null
    },
  }
}

