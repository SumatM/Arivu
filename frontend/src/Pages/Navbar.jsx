import React from "react";
import {
  Flex,
  Box,
  Select,
  Input,
  Button,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const navigate = useNavigate()

  function signup(){
    navigate('/signup')
  }

  function home(){
    navigate('/')
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      bg="#f5f5f5"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      position="fixed"
      width="100%"
      zIndex={5}
    >
      <Flex align="center">
        <Box>
          {/* Logo */}
          {/* <img src={image} alt="Logo" width="30%" /> */}
          <Text fontSize={30} fontWeight="extrabold" color="#0056d2" onClick={home} _hover={{cursor:"pointer"}}>
          AṞIVU
          </Text>
        </Box>
      </Flex>

      {!isMobile ? (
        <Flex align="center">
          <Box>
            {/* Search Bar */}
            <Input
              type="text"
              variant="filled"
              border="1px solid black"
              color="black"
              placeholder="What do you want to learn?"
              borderRadius="10px 0 0px 10px"
              _placeholder={{ color: "#555454" }}
            />
          </Box>
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            bg="#0056d2"
            color="white"
            borderRadius="0px 10px 10px 0px"
            _hover={{background:'#0288D1'}}
          />
        </Flex>
      ) : (
        <Flex align="center">
          <IconButton
            aria-label="Menu"
            icon={<FaBars />}
            bg="transparent"
            color="#0056d2"
            fontSize="2xl"
            mr={2}
          />
        </Flex>
      )}

      {isMobile && (
        <IconButton
          aria-label="Search"
          icon={<FaSearch />}
          color="black"
          borderRadius="7px"
          _hover={{ backgroundColor: "#003e9c", color: "white" }}
        />
      )}

      {!isMobile && (
        <Flex align="center">
          {/* Links */}
          <Box mr={4}>
            <Link
              _hover={{ color: "#003e9c", textDecoration: "underline" }}
              href="#"
            >
              Find your New Career
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              _hover={{ color: "#003e9c", textDecoration: "underline" }}
              href="#"
            >
              For Enterprise
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              _hover={{ color: "#003e9c", textDecoration: "underline" }}
              href="#"
            >
              For Universities
            </Link>
          </Box>
          <Box mr={4}>
            <Link textDecoration="none" color="#0056d2" href="/login">
              Login
            </Link>
          </Box>

          {/* Join for Free Button */}
          <Button
            bg="#0056d2"
            color="white"
            borderRadius="5px"
            _hover={{ bg: "#003e9c" }}
            onClick={signup}
          >
            Join for free
          </Button>
          
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
