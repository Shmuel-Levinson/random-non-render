import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/assets/asset-inventory/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_breadcrumbsLayout/$accountId/assets/asset-inventory/"!</div>
  )
}
