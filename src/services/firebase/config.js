import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBVXDb9IQjmPfjcarJNrVWq28g-QxjHnMY",
  authDomain: "pizzas-24ab7.firebaseapp.com",
  databaseURL: "https://pizzas-24ab7-default-rtdb.firebaseio.com",
  projectId: "pizzas-24ab7",
  storageBucket: "pizzas-24ab7.appspot.com",
  messagingSenderId: "64282433331",
  appId: "1:64282433331:web:1fe0f3e26b31de87f41046",
  measurementId: "G-024R2ZZ0FS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();