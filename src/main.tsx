import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { FirebaseUIProvider } from '@firebase-oss/ui-react';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { firebaseAuth, firebaseUi } from '@/config/firebase.config';
import { routeTree } from '@/pages/routes';
import '@/styles.css';

const router = createRouter({
    routeTree,
    context: {
        auth: undefined,
    },
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <FirebaseUIProvider ui={firebaseUi}>
                <RouterProvider
                    router={router}
                    context={{
                        auth: firebaseAuth,
                    }}
                />
            </FirebaseUIProvider>
        </StrictMode>,
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
