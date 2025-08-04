// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsFzO-5RjiUAU-vfirtRc8WgNYr-hEHO0",
  authDomain: "ai-learning-hub-c6d11.firebaseapp.com",
  projectId: "ai-learning-hub-c6d11",
  storageBucket: "ai-learning-hub-c6d11.firebasestorage.app",
  messagingSenderId: "519050041073",
  appId: "1:519050041073:web:c41d46e8c45a8b0e21fb50",
  measurementId: "G-M2FD7G8N86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
