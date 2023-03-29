import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_-oJdcMbM2bhTj2KwaQsf9R-hhOIFcR8",
  authDomain: "myportfolio-7f373.firebaseapp.com",
  projectId: "myportfolio-7f373",
  storageBucket: "myportfolio-7f373.appspot.com",
  messagingSenderId: "424522069061",
  appId: "1:424522069061:web:b7dd65fac50473f12f5f2c",
  measurementId: "G-QDRPDQ4G6Y"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
