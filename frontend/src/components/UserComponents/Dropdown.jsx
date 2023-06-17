import React from "react";
import {
  ChakraProvider,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dropdown = () => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    // Handle profile click logic
    console.log("Profile clicked");
    navigate('/profile')
  };

  const handleLogoutClick = () => {
    axios
      .get("http://localhost:8080/users/logout")
      .then((res) => {
        localStorage.setItem("token", "");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ChakraProvider>
      <Box p="4">
        <Menu>
          <MenuButton as={Button} variant="outline">
            options
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </ChakraProvider>
  );
};

export default Dropdown;
