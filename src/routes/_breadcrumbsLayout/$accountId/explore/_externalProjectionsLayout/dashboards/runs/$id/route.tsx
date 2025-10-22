import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/explore/_externalProjectionsLayout/dashboards/runs/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/explore/_externalProjectionsLayout/dashboards/runs/$id"!
    </div>
  )
}
