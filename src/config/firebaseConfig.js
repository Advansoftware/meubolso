import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAfuMFqiT_UAMfiyf3kV3TrY70TEhcvXYk",
  authDomain: "meubolso-6f4e7.firebaseapp.com",
  projectId: "meubolso-6f4e7",
  storageBucket: "meubolso-6f4e7.appspot.com",
  messagingSenderId: "360034051927",
  appId: "1:360034051927:web:7a3c208e67fef00b83c012",
  measurementId: "G-7WYC9CQ2GL"
};

const app = initializeApp(firebaseConfig);

//adicionar as funções do firebase (todas com export na frente).
export const database =  getFirestore(app);



// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
