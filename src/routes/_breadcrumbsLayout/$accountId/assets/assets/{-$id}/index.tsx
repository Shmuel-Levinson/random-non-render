import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/assets/assets/{-$id}/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_breadcrumbsLayout/$accountId/assets/assets/-$id/"!</div>
}
