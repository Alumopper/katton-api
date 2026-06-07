import type { DefaultTheme } from 'vitepress'
import apiSidebar from './api-sidebar'

const sectionText: Record<string, string> = {
  API: 'API',
  Common: '通用',
  Fabric: 'Fabric',
  NeoForge: 'NeoForge',
  Paper: 'Paper',
}

function localizeApiItem(item: DefaultTheme.SidebarItem): DefaultTheme.SidebarItem {
  return {
    ...item,
    text: sectionText[item.text ?? ''] ?? item.text,
    link: item.link?.replace(/^\/api\//, '/zh/api/'),
    items: item.items?.map(localizeApiItem),
  }
}

const rootApiSidebar = apiSidebar['/api/'] ?? []

const zhApiSidebar: DefaultTheme.SidebarMulti = {
  '/zh/api/': rootApiSidebar.map(localizeApiItem),
}

export default zhApiSidebar
