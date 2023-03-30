import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAP2SellgLvY4dEWU37NMPS91qGyv3-wyU",
  authDomain: "react-portfolio-padda.firebaseapp.com",
  projectId: "react-portfolio-padda",
  storageBucket: "react-portfolio-padda.appspot.com",
  messagingSenderId: "976402334252",
  appId: "1:976402334252:web:4058b78129f474f3b40789"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
