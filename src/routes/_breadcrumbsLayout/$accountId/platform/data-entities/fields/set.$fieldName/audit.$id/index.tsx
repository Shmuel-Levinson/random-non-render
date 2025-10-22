import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/platform/data-entities/fields/set/$fieldName/audit/$id/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/platform/data-entities/fields/set/$fieldName/audit/$id/"!
    </div>
  )
}
