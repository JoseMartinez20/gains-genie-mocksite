// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwtzFkQEwlzstVsdP9m_FB4Z75VMH7ok8",
  authDomain: "gym-genie-mocksite.firebaseapp.com",
  projectId: "gym-genie-mocksite",
  storageBucket: "gym-genie-mocksite.appspot.com",
  messagingSenderId: "1020510346460",
  appId: "1:1020510346460:web:30bf8bd580ddd935c1e819",
  measurementId: "G-KB4VYHDV0C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);

// const analytics = getAnalytics(app);
