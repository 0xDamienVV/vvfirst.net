import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const orderOf = (f: any): number => {
  const raw = f.frontmatter?.order
  const n = typeof raw === "string" ? Number(raw) : raw
  return typeof n === "number" && Number.isFinite(n) ? n : Number.POSITIVE_INFINITY
}

ExternalPlugin.FolderPage({
  sort: (f1: any, f2: any) => {
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