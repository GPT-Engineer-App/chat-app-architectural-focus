import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Settings</Heading>
        <FormControl id="password">
          <FormLabel>New Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" width="full">Change Password</Button>
      </VStack>
    </Container>
  );
};

export default Settings;