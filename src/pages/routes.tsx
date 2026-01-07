import { Outlet, createRootRouteWithContext, createRoute, redirect } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type { Auth } from 'firebase/auth';

import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';

interface AuthContext {
    auth: Auth | undefined;
}

const rootRoute = createRootRouteWithContext<AuthContext>()({
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
    component: Login,
    context: undefined,
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/home',
    component: Home,
    context: undefined,
    beforeLoad: ({ context, location }) => {
        if (!context.auth) {
            throw redirect({
                to: '/',
                search: {
                    redirect: location.href,
                },
            });
        }
    },
});

export const routeTree = rootRoute.addChildren([indexRoute, homeRoute]);
