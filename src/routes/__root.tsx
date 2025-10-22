import {
    createRootRoute,
    Link,
    Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    // @ts-ignore
    return (
        <div style={{ background: 'white' }}>
            <div style={{ fontSize: '14px', color: 'black', marginBottom:"20px" }}> Open up the matches tab<br /> Go to the working link<br /> Observe there are 2 matches (one for the route.tsx file and the other for index.tsx)<br /> Go to the not-working link and see the path for index.tsx is NOT matched and hence nothing is displayed.<br /> Renaming the non-working page's folder can fix the problem without any other changes introduced.<br /> The minimal setup for this is to have a route.tsx file that renders nothing (or outlet) and an index.tsx file that renders the component we want to see. </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15, marginBottom:"20px" }}>
                <Link to="/" style={{ color: 'blue' }}>
                    Home
                </Link>
                <Link to="/1234/assets/policy-violations/" style={{ color: 'blue' }}>
                    working: Policy Violation Tickets (assets/policy-violations/)
                </Link>
                <Link to="/1234/assets/violation-tickets/" style={{ color: 'orange' }}>
                    doesn't work: Violation Tickets (assets/violation-tickets/)
                </Link>
            </div>
            <div style={{border: "1px solid gray", width: 300, height: 80}}><Outlet /></div>

            <TanStackRouterDevtools position="bottom-right" initialIsOpen />
        </div>
    );
}
