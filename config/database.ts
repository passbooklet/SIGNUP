import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBETO8y9l9B7zQZ-jZB4TK8XJufZE45Y9Q",
  authDomain: "internsignup-38851.firebaseapp.com",
  projectId: "internsignup-38851",
  storageBucket: "internsignup-38851.appspot.com",
  messagingSenderId: "242441018023",
  appId: "1:242441018023:web:9c4ac31e1790c2b8c7d982",
  measurementId: "G-GHWHVMXB2Q"
};
// logintodo

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage= getStorage(app);


// Initialize Cloud Firestore and get a reference to the service

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,db,storage}