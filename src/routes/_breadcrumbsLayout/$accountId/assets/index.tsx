import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_breadcrumbsLayout/$accountId/assets/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>assets</div>
}
