import { Button, Flex, Text } from '@chakra-ui/react';

// VAC
const SpinBoxView = ({ value, onIncrease, onDecrease }) => (
  <Flex w="100vw" h="100vh" align="center" justify="center">
    <Button onClick={onDecrease}>-</Button>
    <Text m={4}>{value}</Text>
    <Button onClick={onIncrease}>+</Button>
  </Flex>
);

export default SpinBoxView;
