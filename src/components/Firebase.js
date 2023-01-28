import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcyby-A1G6PZ_KoU-G0CW9yu3SHuPjRHw",
  authDomain: "react-portfolio-one-app.firebaseapp.com",
  projectId: "react-portfolio-one-app",
  storageBucket: "react-portfolio-one-app.appspot.com",
  messagingSenderId: "1882925210",
  appId: "1:1882925210:web:93051e3110291c93b51723",
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
