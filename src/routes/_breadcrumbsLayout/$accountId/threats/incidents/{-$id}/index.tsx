import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/threats/incidents/{-$id}/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_breadcrumbsLayout/$accountId/threats/incidents/-$id/"!</div>
  )
}
