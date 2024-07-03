import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAenuyGrPaIbmGMa6VEIu1QgQYopTxCiwc",
  authDomain: "gmfit-c1b33.firebaseapp.com",
  projectId: "gmfit-c1b33",
  storageBucket: "gmfit-c1b33.appspot.com",
  messagingSenderId: "1091260867150",
  appId: "1:1091260867150:web:b5e139f272a77f60a3991f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
