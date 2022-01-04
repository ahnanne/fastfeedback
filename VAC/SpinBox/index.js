import { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const SpinBox = () => {
  const [value, setValue] = useState(0);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Button onClick={() => setValue(value - 1)}>-</Button>
      <Text m={4}>{value}</Text>
      <Button onClick={() => setValue(value + 1)}>+</Button>
    </Flex>
  );
};

export default SpinBox;
