import { Box, Button, Container, Flex, FormControl, Input, VStack, Textarea } from "@chakra-ui/react";

const Chat = () => {
  return (
    <Container maxW="container.lg" mt={10}>
      <Flex>
        <Box w="30%" p={4} borderRight="1px solid #ccc">
          <VStack spacing={4}>
            <Button width="full">Chat Room 1</Button>
            <Button width="full">Chat Room 2</Button>
            <Button width="full">Chat Room 3</Button>
          </VStack>
        </Box>
        <Box w="70%" p={4}>
          <VStack spacing={4} align="stretch">
            <Box flex="1" border="1px solid #ccc" p={4} borderRadius="md">
              <Textarea placeholder="Type your message here..." />
              <Button mt={2} colorScheme="blue">Send</Button>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Chat;