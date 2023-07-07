import { app } from "./firebase";

import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {
  addDoc,
  collection,
  getFirestore,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";

const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

async function loginWithEmailAndPassword(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    //
  }
}

async function registerWithEmailAndPassword(
  name: string,
  email: string,
  password: string
) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    //
  }
}

async function recoverPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.info("Email para recuperação de senha enviado!");
  } catch (error) {
    //
  }
}

async function logout() {
  signOut(auth);
}

async function loginWithGoogle() {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    //
  }
}

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  recoverPassword,
  logout,
  loginWithGoogle,
};
