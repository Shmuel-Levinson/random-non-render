import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/settings/permissions/content-permissions/{-$mode}/{-$id}/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
      "/_breadcrumbsLayout/$accountId/settings/permissions/content-permissions/-$mode/-$id/"!
    </div>
  )
}
