import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  return (
    <Box maxW="md" mx="auto" mt={10} p={6} bg="gray.700" borderRadius="md" boxShadow="lg">
      <Heading textAlign="center" mb={6} color="white">
        Login
      </Heading>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel color="white">Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel color="white">Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" width="full">Login</Button>
        <Text color="gray.300">
          Don't have an account?{' '}
          <Link as={RouterLink} to="/register" color="teal.300">Register</Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;


