import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/assets/policy-violations/visual/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Policy Violations Visual (index.tsx)
    </div>
  )
}
