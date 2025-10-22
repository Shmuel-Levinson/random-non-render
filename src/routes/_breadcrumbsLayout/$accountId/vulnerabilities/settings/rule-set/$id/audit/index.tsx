import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/vulnerabilities/settings/rule-set/$id/audit/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/vulnerabilities/settings/rule-set/$id/audit/"!
    </div>
  )
}
