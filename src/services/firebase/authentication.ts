import { app } from "./firebase";
import { toast } from "react-toastify";

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

const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

async function loginWithEmailAndPassword(email: string, password: string) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, res: res }
  } catch (error:any) {
    return { success: false, message: error.message}
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
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

async function recoverPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
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
    return { success: true, res: res };
  } catch (error:any) {
    return { success: false, message: error.message}
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
