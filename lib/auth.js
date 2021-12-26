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

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const provider = new GithubAuthProvider();
  const router = useRouter();

  // sign in
  const signinWithGithub = () => {
    return signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);

        return res.user;
      })
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
        setUser(false);
      })
      .catch(console.error); // An error happened.
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout
  };
}
