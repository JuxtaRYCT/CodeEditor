
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyComiU8LaSjUEZCQGhNkMOHzH5UvsOQwP0",
    authDomain: "code-craft-ca3cc.firebaseapp.com",
    projectId: "code-craft-ca3cc",
    storageBucket: "code-craft-ca3cc.appspot.com",
    messagingSenderId: "426917735541",
    appId: "1:426917735541:web:fa7eb0a4f11eb963bedc3c",
    measurementId: "G-4GMRXM8RLT"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };