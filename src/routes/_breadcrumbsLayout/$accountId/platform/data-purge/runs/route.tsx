import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/platform/data-purge/runs',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_breadcrumbsLayout/$accountId/platform/data-purge/runs"!</div>
  )
}
