import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  index('routes/archive.tsx', { id: 'archive-home' }),
  route('*', 'routes/archive.tsx', { id: 'archive-page' }),
] satisfies RouteConfig
