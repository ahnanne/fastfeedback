import Head from 'next/head';
import { useAuth } from '@/lib/auth';

import { Button, Heading, Text, Code, Flex } from '@chakra-ui/react';
import { LogoIcon } from '@/components/icons/LogoIcon';

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <div>
        <Flex
          as="main"
          direction="column"
          align="center"
          justify="center"
          w="100vw"
          height="100vh"
        >
          <Heading>Fast Feedback</Heading>
          <LogoIcon w={101} h={20} />
          {auth?.user ? (
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          ) : (
            <>
              <Button
                variant="link"
                size="sm"
                mt={4}
                onClick={(e) => auth.signinWithGithub()}
              >
                Sign In
              </Button>
              {/* 인증 사용자 확인은 아래 링크에서. */}
              {/* https://console.firebase.google.com/u/0/project/fast-feedback-demo-b442c/authentication/users?hl=ko */}
            </>
          )}
        </Flex>
      </div>
    </>
  );
}
