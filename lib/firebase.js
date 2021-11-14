import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';

// initialize app
firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
});

export default firebase;

export const auth = getAuth();
