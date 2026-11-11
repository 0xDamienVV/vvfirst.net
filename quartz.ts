import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

componentRegistry.setOptionOverrides("folder-page", {
  sort: (a: any, b: any) => {
    const oa = a.frontmatter?.order ?? 9999
    const ob = b.frontmatter?.order ?? 9999
    if (oa !== ob) return oa - ob
    return (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "")
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
