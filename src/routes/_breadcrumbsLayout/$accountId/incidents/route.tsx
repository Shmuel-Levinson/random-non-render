import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/incidents',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_breadcrumbsLayout/$accountId/incidents"!</div>
}
