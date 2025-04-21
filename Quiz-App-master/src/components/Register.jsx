// src/pages/Register.jsx

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

const Register = () => {
  return (
    <Box maxW="md" mx="auto" mt={10} p={6} bg="gray.700" borderRadius="md" boxShadow="lg">
      <Heading textAlign="center" mb={6} color="white">
        Register
      </Heading>
      <VStack spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel color="white">Full Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel color="white">Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel color="white">Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="green" width="full">
          Register
        </Button>
        <Text color="gray.300">
          Already have an account?{' '}
          <Link as={RouterLink} to="/login" color="teal.300">Login</Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Register;
