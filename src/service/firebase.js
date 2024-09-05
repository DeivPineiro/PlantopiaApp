import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_APP_API_KEY}`,
    authDomain: "plantopia-157e3.firebaseapp.com",
    projectId: "plantopia-157e3",
    storageBucket: "plantopia-157e3.appspot.com",
    messagingSenderId: "1079860584663",
    appId: `${import.meta.env.VITE_APP_APP_ID}`
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);



