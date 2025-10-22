import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/assets/policy-violations/{-$id}/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        Policy Violations (index.tsx)
    </div>
  )
}
