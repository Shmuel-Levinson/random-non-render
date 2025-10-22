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
            <div style={{ fontSize: '12px', color: 'orange' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <Link to="/" style={{ color: 'blue' }}>
                    Home
                </Link>
                <Link to="/1234/assets/violation-tickets/" style={{ color: 'blue' }}>
                    Violation Tickets (doesn't work!)
                </Link>
                <Link to="/1234/assets/policy-violations/" style={{ color: 'blue' }}>
                    Policy Violation Tickets (works...)
                </Link>
            </div>

            <hr />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" initialIsOpen />
        </div>
    );
}
