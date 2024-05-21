import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Profile</Heading>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <Button colorScheme="blue" width="full">Update Profile</Button>
      </VStack>
    </Container>
  );
};

export default Profile;