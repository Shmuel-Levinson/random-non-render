import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/vulnerabilities/settings/ticket-lifecycle/automations/{-$id}/{-$ruleIndex}/audit/$automationId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/vulnerabilities/settings/ticket-lifecycle/automations/-$id/-$ruleIndex/audit/$automationId"!
    </div>
  )
}
