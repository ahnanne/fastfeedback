import React from 'react';

import { Heading, Box, Text, Button } from '@chakra-ui/react';

import DashboardShell from './DashboardShell';

const EmptyState = ({ user }) => {
  console.log(user);
  return (
    <DashboardShell user={user}>
      <Box width="100%" backgroundColor="white" borderRadius={4} p={8}>
        <Heading size="md">You haven&#39;t added any sites.</Heading>
        <Text>Welcome! 💜 Let&#39;s get started.</Text>
        <Button
          variant="solid"
          size="md"
          onClick={() =>
            alert('Hello, ' + user.name.split(' ')[0] + '...ヽ(*￣▽￣*)ノ')
          }
        >
          Add Your First Site
        </Button>
      </Box>
    </DashboardShell>
  );
};

export default EmptyState;
