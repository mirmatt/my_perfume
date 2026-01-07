import { SignInAuthScreen } from '@firebase-oss/ui-react';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { Shield } from 'lucide-react';

import { firebaseAuth } from '@/config/firebase.config';

export const App = () => {
    return (
        <div className="mt-[10%]">
            <SignInAuthScreen onSignIn={(usr) => console.log(usr)}></SignInAuthScreen>
            <Shield
                className="mx-auto mt-3 cursor-pointer"
                onClick={async () => {
                    try {
                        const provider = new GoogleAuthProvider();

                        const result = await signInWithPopup(firebaseAuth, provider);

                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        if (!credential) {
                            console.error('Error in user Credential');
                            return;
                        }
                        const token = credential.accessToken;
                        const user = result.user;
                        console.log(user, token);
                    } catch (error: any) {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const email = error.customData.email;
                        const credential = GoogleAuthProvider.credentialFromError(error);
                    }
                }}
            />
        </div>
    );
};
