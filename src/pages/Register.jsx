import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Register</Heading>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" width="full">Register</Button>
        <Box>
          <Link to="/login">Login</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Register;