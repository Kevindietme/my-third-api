import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { creds } from "./credentials.js";

initializeApp({
    credential: cert(creds)
});

export const dataBase = getFirestore();
        