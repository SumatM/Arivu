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
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

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
    >
      <Flex align="center">
        <Box>
          {/* Logo */}
          {/* <img src={image} alt="Logo" width="30%" /> */}
          <Text fontSize={30} fontWeight="extrabold" color="#0056d2">
            ARIVU
          </Text>
        </Box>
        {!isMobile && (
          <Box ml={4}>
            {/* Explore Select */}
            <Select
              variant="filled"
              bg="#0056d2"
              color="white"
              borderRadius={8}
              _hover={{
                bg: "white",
                color: "#0056d2",
                border: "2px solid black",
                cursor: "pointer",
              }}
            >
              <option value="explore">Explore</option>
              {/* Add options here */}
            </Select>
          </Box>
        )}
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
              _placeholder={{ color: "#555454" }}
            />
          </Box>
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            bg="#0056d2"
            color="white"
            borderRightRadius="7px"
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
          >
            Join for free
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
