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
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    axios
      .get("https://arivu-sever-link.onrender.com/users/logout")
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
          <MenuButton
            as={Button}
            bgColor={"#0056d2"}
            color={"white"}
            variant="outline"
            _hover={{
              bg: "white",
              color: "#0056d2",
              border: "2px solid black",
              cursor: "pointer",
            }}
          >
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
