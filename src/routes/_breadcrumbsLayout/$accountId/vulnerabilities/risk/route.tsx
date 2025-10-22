import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/vulnerabilities/risk',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_breadcrumbsLayout/$accountId/vulnerabilities/risk"!</div>
}
