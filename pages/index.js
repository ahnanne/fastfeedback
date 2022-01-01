import Head from 'next/head';
import Image from 'next/image';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <div>
        <main>
          <h1>Fast Feedback</h1>

          <p>
            <code>init</code>
          </p>

          {auth?.user ? (
            <>
              <div>
                {auth?.user?.name?.split(' ')[0] ? (
                  <>Welcome back, {auth?.user?.name?.split(' ')[0]}!</>
                ) : (
                  <>Welcome back!</>
                )}
              </div>
              <button onClick={(e) => auth.signout()}>Sign Out</button>
            </>
          ) : (
            <>
              <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
              {/* 인증 사용자 확인은 아래 링크에서. */}
              {/* https://console.firebase.google.com/u/0/project/fast-feedback-demo-b442c/authentication/users?hl=ko */}
            </>
          )}
        </main>
      </div>
    </>
  );
}
