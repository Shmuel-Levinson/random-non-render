import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/threats/settings/alert-score/audit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_breadcrumbsLayout/$accountId/threats/settings/alert-score/audit"!
    </div>
  )
}
