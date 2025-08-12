import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAkOyb-SNQeh06yx8dloB8qP7UrDmpc4F4",
  authDomain: "my-project-70667.firebaseapp.com",
  projectId: "my-project-70667",
  storageBucket: "my-project-70667.firebasestorage.app",
  messagingSenderId: "321762368111",
  appId: "1:321762368111:web:2e012aa425ce4e0da08b9a",
  measurementId: "G-5C8W81EKTM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export {auth, db, googleProvider}