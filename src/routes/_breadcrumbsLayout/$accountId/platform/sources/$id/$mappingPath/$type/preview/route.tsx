import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/platform/sources/$id/$mappingPath/$type/preview',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/platform/sources/$id/$mappingPath/$type/preview"!
    </div>
  )
}
