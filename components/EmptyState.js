import React from 'react';

import { Heading, Box, Text, Button } from '@chakra-ui/react';

import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';

const EmptyState = ({ user }) => {
  return (
    <DashboardShell user={user}>
      <Box width="100%" backgroundColor="white" borderRadius={4} p={8}>
        <Heading size="md" mb={2}>
          You haven&#39;t added any sites.
        </Heading>
        <Text>Welcome! 💜 Let&#39;s get started.</Text>
        <AddSiteModal />
      </Box>
    </DashboardShell>
  );
};

export default EmptyState;
