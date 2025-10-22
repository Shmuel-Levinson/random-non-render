import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/identities/issues/$id/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_breadcrumbsLayout/$accountId/identities/issues/$id/"!</div>
  )
}
