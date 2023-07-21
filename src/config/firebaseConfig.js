// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMYU_piGPiWHjArWpJ2Wk9jUYT9ibJ0eI",
  authDomain: "simklinik-55f95.firebaseapp.com",
  databaseURL: "https://simklinik-55f95-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "simklinik-55f95",
  storageBucket: "simklinik-55f95.appspot.com",
  messagingSenderId: "1052329734331",
  appId: "1:1052329734331:web:d3d768241936bf49dc399e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const timestamp= serverTimestamp();
export {db,timestamp};
