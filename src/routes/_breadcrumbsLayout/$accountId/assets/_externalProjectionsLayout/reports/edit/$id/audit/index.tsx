import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/assets/_externalProjectionsLayout/reports/edit/$id/audit/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/assets/_externalProjectionsLayout/reports/edit/$id/audit/"!
    </div>
  )
}
