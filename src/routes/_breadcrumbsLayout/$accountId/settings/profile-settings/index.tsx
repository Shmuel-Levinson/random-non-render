import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_breadcrumbsLayout/$accountId/settings/profile-settings/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_breadcrumbsLayout/$accountId/settings/profile-settings/"!
    </div>
  )
}
