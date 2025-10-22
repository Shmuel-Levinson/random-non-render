import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/threats/_externalProjectionsLayout/reports/runs/$id/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/threats/_externalProjectionsLayout/reports/runs/$id/"!
    </div>
  )
}
