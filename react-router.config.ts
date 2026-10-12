import type { Config } from '@react-router/dev/config'
import { inventory } from './app/Custom/Archive/inventory'

export default {
  ssr: true,
  // /index.html обслуживается SSR: его каталог конфликтует с файлом главной.
  prerender: inventory
    .filter(
      (entry) => entry.status === 'restored' && entry.path !== '/index.html',
    )
    .map((entry) => entry.path),
  routeDiscovery: { mode: 'initial' },
} satisfies Config
