"use client";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import React from "react";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export async function signInWithGoogle(){ await signInWithPopup(auth, provider); }
export async function signOutUser(){ await signOut(auth); }
export function useAuthUser(): User | null {
  const [user, setUser] = React.useState<User|null>(null);
  React.useEffect(() => onAuthStateChanged(auth, setUser), []);
  return user;
}
