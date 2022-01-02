import React, { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/router';

import {
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth
} from 'firebase/auth';
import { auth } from './firebase';
import formatUser from '@/utils/formatUser';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const provider = new GithubAuthProvider();
  const router = useRouter();

  // sign in
  const signinWithGithub = () => {
    return signInWithPopup(auth, provider)
      .then(handleUser)
      .catch((err) => {
        // 유저가 로그인 과정을 거치지 않고 팝업창을 닫은 경우
        console.error(err);
        router.replace('/');
      });
  };

  // sign out
  // https://firebase.google.com/docs/auth/web/password-auth?hl=ko#next_steps
  const signout = () => {
    const auth = getAuth();

    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        handleUser(false);
      })
      .catch(console.error); // An error happened.
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout
  };
}
