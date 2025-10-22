import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/detections/settings/rule-set/create/$ruleIndex/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/detections/settings/rule-set/create/$ruleIndex/"!
    </div>
  )
}
