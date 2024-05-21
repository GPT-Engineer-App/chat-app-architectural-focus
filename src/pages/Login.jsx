import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Login</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" width="full">Login</Button>
        <Box>
          <Link to="/register">Register</Link> | <Link to="/forgot-password">Forgot Password?</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Login;