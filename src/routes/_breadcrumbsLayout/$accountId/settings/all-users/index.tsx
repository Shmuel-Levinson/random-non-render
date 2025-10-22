import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/settings/all-users/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_breadcrumbsLayout/$accountId/settings/all-users/"!</div>
}
