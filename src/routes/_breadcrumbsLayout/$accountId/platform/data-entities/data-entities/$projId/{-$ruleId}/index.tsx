import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/platform/data-entities/data-entities/$projId/{-$ruleId}/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/platform/data-entities/data-entities/$projId/-$ruleId/"!
    </div>
  )
}
