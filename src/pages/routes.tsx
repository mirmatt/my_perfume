import { Outlet, createRootRoute, createRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { App } from '@/pages/App';
import { Home } from '@/pages/Home';

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: App,
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/home',
    component: Home,
});

export const routeTree = rootRoute.addChildren([indexRoute, homeRoute]);
