import Head from 'next/head';
import { useAuth } from '@/lib/auth';

import { Button, Heading, Text, Code } from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <div>
        <main>
          <Heading>Fast Feedback</Heading>

          {auth?.user ? (
            <>
              {auth?.user?.name?.split(' ')[0] ? (
                <Text>
                  Welcome back, {auth?.user?.name?.split(' ')[0]}!
                  <br />
                  (current user: <Code>{auth?.user?.email}</Code>)
                </Text>
              ) : (
                <>Welcome back!</>
              )}
              <Button onClick={(e) => auth.signout()}>Sign Out</Button>
            </>
          ) : (
            <>
              <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
              {/* 인증 사용자 확인은 아래 링크에서. */}
              {/* https://console.firebase.google.com/u/0/project/fast-feedback-demo-b442c/authentication/users?hl=ko */}
            </>
          )}
        </main>
      </div>
    </>
  );
}
