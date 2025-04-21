// src/components/NavBar/NavBar.jsx

import React, { useEffect, useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';
import { auth } from '../firebase'; // Correct import from components/firebase
import logo from './../../Assets/logo.png';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Box
        bg={useColorModeValue('#212832', 'gray.900')}
        px={4}
        borderBottom="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems="center">
            <Avatar size="sm" src={logo} w={10} h={10} />

            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              <ReachLink to="/">
                <HStack>
                  <FaHome />
                  <Text fontWeight="bold">Home</Text>
                </HStack>
              </ReachLink>

              <ReachLink to="/about">
                <HStack>
                  <InfoIcon />
                  <Text fontWeight="bold">About</Text>
                </HStack>
              </ReachLink>

              {/* Login/Register */}
              {!user ? (
                <>
                  <ReachLink to="/login">
                    <Text fontWeight="bold">Login</Text>
                  </ReachLink>
                  <ReachLink to="/register">
                    <Text fontWeight="bold">Register</Text>
                  </ReachLink>
                </>
              ) : (
                <Text fontWeight="bold">{user.email}</Text>
              )}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <ReachLink to="/">
                <HStack>
                  <FaHome />
                  <Text fontWeight="bold">Home</Text>
                </HStack>
              </ReachLink>

              <ReachLink to="/about">
                <HStack>
                  <InfoIcon />
                  <Text fontWeight="bold">About</Text>
                </HStack>
              </ReachLink>

              {/* Mobile Login/Register */}
              {!user ? (
                <>
                  <ReachLink to="/login">
                    <Text fontWeight="bold">Login</Text>
                  </ReachLink>
                  <ReachLink to="/register">
                    <Text fontWeight="bold">Register</Text>
                  </ReachLink>
                </>
              ) : (
                <Text fontWeight="bold">{user.email}</Text>
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
