import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/platform/relations/{-$relationId}',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_breadcrumbsLayout/$accountId/platform/relations/-$relationId"!
    </div>
  )
}
