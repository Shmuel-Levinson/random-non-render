import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/risk360/_externalProjectionsLayout/dashboards/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/risk360/_externalProjectionsLayout/dashboards/"!
    </div>
  )
}
