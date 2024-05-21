import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">ChatApp</Link>
        <Flex>
          <Link as={RouterLink} to="/chat" color="white" mx={2}>Chat</Link>
          <Link as={RouterLink} to="/profile" color="white" mx={2}>Profile</Link>
          <Link as={RouterLink} to="/settings" color="white" mx={2}>Settings</Link>
          <Link as={RouterLink} to="/login" color="white" mx={2}>Login</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;