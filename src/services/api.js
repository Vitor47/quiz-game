import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBfvkCtVKpJKSXmiOFfuQ4eEuX5uVae-ac",
  authDomain: "quiz-game-d9cd8.firebaseapp.com",
  projectId: "quiz-game-d9cd8",
  storageBucket: "quiz-game-d9cd8.appspot.com",
  messagingSenderId: "797627501378",
  appId: "1:797627501378:web:e5b4121f11c8f1d727d6db",
  measurementId: "G-HW51VVD455"
};


const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, app };