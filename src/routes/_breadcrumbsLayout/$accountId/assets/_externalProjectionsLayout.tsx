import { createFileRoute , Outlet} from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/assets/_externalProjectionsLayout',
)({
  component: Outlet,
})