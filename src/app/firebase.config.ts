import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCq1JVomzQIGRV1twK0wmuXQ4qMelfS8lM",
  authDomain: "challenge-centre-b15d8.firebaseapp.com",
  projectId: "challenge-centre-b15d8",
  storageBucket: "challenge-centre-b15d8.firebasestorage.app",
  messagingSenderId: "941917435311",
  appId: "1:941917435311:web:0013baaaa728ef0775eb5a",
  measurementId: "G-KDZ6L2Q0DH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);