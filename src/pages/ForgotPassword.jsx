import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Forgot Password</Heading>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <Button colorScheme="blue" width="full">Reset Password</Button>
        <Box>
          <Link to="/login">Login</Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default ForgotPassword;