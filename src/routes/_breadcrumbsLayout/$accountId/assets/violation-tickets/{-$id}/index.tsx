import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/assets/violation-tickets/{-$id}/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        Violation Tickets
    </div>
  )
}
