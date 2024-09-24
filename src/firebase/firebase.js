// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj0i6gTY7aahXzG85zk2i7e6Hm4RYaBIU",
  authDomain: "linkedin-clone-2256e.firebaseapp.com",
  projectId: "linkedin-clone-2256e",
  storageBucket: "linkedin-clone-2256e.appspot.com",
  messagingSenderId: "129912595684",
  appId: "1:129912595684:web:0bf21b0344f92a118838f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
