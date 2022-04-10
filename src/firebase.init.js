// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK_qtMFUW14-YaZUrX7s9l4n8Ar5Cq_eQ",
    authDomain: "ema-john-simple-6083a.firebaseapp.com",
    projectId: "ema-john-simple-6083a",
    storageBucket: "ema-john-simple-6083a.appspot.com",
    messagingSenderId: "215998922202",
    appId: "1:215998922202:web:806ce7f5d0a9aa3ca254e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;