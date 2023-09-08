import React from "react";
import {
  Flex,
  Box,
  Select,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { NavBarDrawer } from "../NavBarDrawer";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  function home() {
    navigate("/arivu");
  }

  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        p={4}
        bg="#f5f5f5"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        position="fixed"
        width="100%"
        zIndex={12}
        top={0}
      >
        <Flex align="center">
          <Box>
            {/* Logo */}
            {/* <img src={image} alt="Logo" width="30%" /> */}
            <Text
              fontSize={30}
              fontWeight="extrabold"
              color="#0056d2"
              _hover={{ cursor: "pointer" }}
              onClick={home}
            >
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
                fontSize="0.7rem"
                m="0 2rem"
                color="black"
                placeholder="What do you want to learn?"
                borderRadius="10px 0 0px 10px"
                _placeholder={{ color: "#555454", letterSpacing: "1px" }}
              />
            </Box>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              bg="#0056d2"
              color="white"
              borderRightRadius="7px"
              borderRadius="0px 10px 10px 0px"
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
              onClick={onOpen}
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
                href="/new-career"
              >
                Find your New Career
              </Link>
            </Box>
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="/enterprise"
              >
                For Enterprise
              </Link>
            </Box>
            <Box mr={4}>
              <Link
                _hover={{ color: "#003e9c", textDecoration: "underline" }}
                href="/universities"
              >
                For Universities
              </Link>
            </Box>
            {/* <Box mr={4}>
            <Button colorScheme="red" size="md" onClick={handleLogout}>
              Logout
            </Button>
          </Box> */}
            <Box>
              <Dropdown />
            </Box>
          </Flex>
        )}
      </Flex>
      <NavBarDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;
