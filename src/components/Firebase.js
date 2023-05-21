import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services

const db = getFirestore();

// collection ref

const colRef = collection(db, "portfolio");
const blogRef = collection(db, "blogs");

// onSnapshot(colRef, (snapshot) => {
//   snapshot.docs.map((doc) => {
//     console.log(doc);
//   });
// });

export { colRef, blogRef };
