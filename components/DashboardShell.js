import React from 'react';

import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';

import { LogoIcon } from './icons/LogoIcon';

const DashboardShell = ({ user, children }) => (
  <Flex flexDirection="column">
    <Flex backgroundColor="white" justifyContent="space-between" p={4}>
      <Stack spacing={4} isInline alignItems="stretch">
        <LogoIcon />
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Flex>
        <Link mr={4} backgroundColor="white">
          Account
        </Link>
        <Avatar size="sm" src={user.photoUrl} />
      </Flex>
    </Flex>
    <Flex backgroundColor="gray.50" p={8}>
      <Flex
        justifyContent="center"
        alignItems="center"
        ml="auto"
        mr="auto"
        maxWidth="800px"
        width="100%"
      >
        <Flex flexDirection="column" width="100%">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default DashboardShell;
