import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1qqhDWs5Vfwt7kidDufvlJVospfDdvxA",
  authDomain: "devsync-carrent.firebaseapp.com",
  projectId: "devsync-carrent",
  storageBucket: "devsync-carrent.appspot.com",
  messagingSenderId: "1002931211329",
  appId: "1:1002931211329:web:f6679e11bdcd0bcdec4ac0",
};

const app = initializeApp(firebaseConfig);

export { app };
