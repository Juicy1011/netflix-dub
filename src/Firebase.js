// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDp91GSwNyMundn1s9W_dxzCT_geCB3By0",
  authDomain: "netflic-clone-b6893.firebaseapp.com",
  projectId: "netflic-clone-b6893",
  storageBucket: "netflic-clone-b6893.appspot.com",
  messagingSenderId: "993506957009",
  appId: "1:993506957009:web:bd1fe4a80a630c481f17f0",
  measurementId: "G-Q9PWM2RDTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);

// Get an Auth instance
const auth = getAuth(app);

export { auth };
export default db;
