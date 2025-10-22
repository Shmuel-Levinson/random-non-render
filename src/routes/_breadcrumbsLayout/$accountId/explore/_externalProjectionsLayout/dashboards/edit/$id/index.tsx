import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/explore/_externalProjectionsLayout/dashboards/edit/$id/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/explore/_externalProjectionsLayout/dashboards/edit/$id/"!
    </div>
  )
}
