// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlSSZ3F8B_tvcJfaHX-YWQX1EdElbq7Cw",
  authDomain: "yaya-dub.firebaseapp.com",
  projectId: "yaya-dub",
  storageBucket: "yaya-dub.appspot.com",
  messagingSenderId: "770085437259",
  appId: "1:770085437259:web:3d36373048a3222170f2ce",
  measurementId: "G-LGM2V8K17V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const yayaCollection = collection (db,"yaya")