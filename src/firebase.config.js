import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpdvPpem3Ei3DpuqfabR5Z8X79OmJl7MA",
    authDomain: "house-app-94d4c.firebaseapp.com",
    projectId: "house-app-94d4c",
    storageBucket: "house-app-94d4c.appspot.com",
    messagingSenderId: "956453595792",
    appId: "1:956453595792:web:739ab39c7839b95cba4615"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()