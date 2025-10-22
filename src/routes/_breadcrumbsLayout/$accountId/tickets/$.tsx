import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/tickets/$',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_breadcrumbsLayout/$accountId/tickets/$"!</div>
}
