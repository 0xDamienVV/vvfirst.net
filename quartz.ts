import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

// Doit être placé AVANT loadQuartzConfig()
ExternalPlugin.FolderPage({
  sort: (f1: any, f2: any) => {
    // Dossiers avant les pages (comportement par défaut conservé)
    const isFolder = (f: any) => f.slug?.endsWith("/index") ?? false
    if (isFolder(f1) !== isFolder(f2)) return isFolder(f1) ? -1 : 1

    const orderOf = (f: any) => {
      const value = f.frontmatter?.order
      return typeof value === "number" && Number.isFinite(value)
        ? value
        : Number.POSITIVE_INFINITY
    }

    const diff = orderOf(f1) - orderOf(f2)
    if (diff !== 0) return diff

    return (f1.frontmatter?.title ?? "").localeCompare(f2.frontmatter?.title ?? "", "fr", {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()