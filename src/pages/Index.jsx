import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="/images/chat-app-home.png" alt="Chat App Home" />
        <Text fontSize="2xl">Welcome to ChatApp</Text>
        <Text>Connect with your friends and family seamlessly.</Text>
      </VStack>
    </Container>
  );
};

export default Index;