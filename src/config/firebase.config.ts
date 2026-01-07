import {
    initializeUI,
    oneTapSignIn,
    providerPopupStrategy,
    providerRedirectStrategy,
    signInWithProvider,
} from '@firebase-oss/ui-core';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);

export const firebaseDb = getFirestore(app);
export const firebaseAuth = getAuth(app);
export const firebaseAnalytics = getAnalytics(app);

export const firebaseUi = initializeUI({
    app,
    behaviors: [
        // providerRedirectStrategy(),
        providerPopupStrategy(),
        oneTapSignIn({
            clientId: '679746221846-sep17ohmuikrqqg4hbpnmgt6tk6hapjf.apps.googleusercontent.com',
            autoSelect: false,
            cancelOnTapOutside: false,
        }),
    ],
});

firebaseAuth.useDeviceLanguage();
