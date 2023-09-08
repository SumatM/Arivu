import React from "react";
import {
  ChakraProvider,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionUserLogout } from "../../Redux/UserReducer/actionType";
import { BiUserCircle } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import {FiMoreVertical} from 'react-icons/fi'
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";
const Dropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.UserReducer);

  const handleProfileClick = () => {
    // Handle profile click logic
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    const token = userStore?.token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .post(
        "https://arivu-sever-link.onrender.com/users/logout",
        {},
        { headers }
      )
      .then((res) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email:"",
            name:"",
            "role":"",
            "token": "",
            isAuth:"",
            isError:"",
            loading:false,
            success: false,
            isUser: false,
            userId:"",
            place:"",
            age:"",
        } )
        );
        dispatch(actionUserLogout());
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ChakraProvider>
      <Box>
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
            <Flex alignItems='center'>
           <Text>
           Profile
           </Text>
            <Box ml='0.2rem'>
            <FiMoreVertical/>
            </Box>
            </Flex>
          </MenuButton>
          <MenuList p={5}>
            {/* user options  */}
            <Box>
              <Flex justify="space-between" alignItems="center">
                <Box p="1.5rem 0">
                  {userStore?.role == "admin" ? (
                    <Flex alignItems={"center"}>
                      <Box>
                        <FaUserShield size="2rem" color="#0056d2" />
                        <Text fontSize="0.6rem" fontWeight="bold">
                          {capitalizeFirstLetter(userStore?.role)}
                        </Text>
                      </Box>
                      <Heading size="sm" ml="1rem">
                        {capitalizeFirstLetter(userStore?.name)}
                      </Heading>
                    </Flex>
                  ) : userStore?.role == "user" ? (
                    <Flex alignItems={"center"}>
                      <BiUserCircle size="2rem" color="#0056d2" />
                      <Heading size="sm" ml="1rem">
                        {capitalizeFirstLetter(userStore?.name)}
                      </Heading>
                    </Flex>
                  ) : null}
                </Box>
                <Button
                  fontSize="0.8rem"
                  p="1rem"
                  colorScheme="blue"
                  fontWeight={"bold"}
                  onClick={handleLogoutClick}
                >
                  Logout
                </Button>
              </Flex>
            </Box>
            {/* users options  */}
            {userStore?.role == "user" && (
              <Box>
                <MenuItem p='0.7rem 0' onClick={handleProfileClick} fontWeight="500" >
                  Your Account
                </MenuItem>

                <Link to="/arivu">
                  <MenuItem p='0.7rem 0' fontWeight="500" borderTop="1px solid #D7DBDD">
                    DashBoard
                  </MenuItem>
                </Link>
              </Box>
            )}
            {/* admin options */}

            {userStore?.role == "admin" && (
              <Box>
                <Link to="/profile">
                  <MenuItem p='0.7rem 0' fontWeight="500" borderTop="1px solid #D7DBDD">
                    Your Account
                  </MenuItem>
                </Link>

                <Link to="/arivu">
                  <MenuItem p='0.7rem 0' fontWeight="500" borderTop="1px solid #D7DBDD">
                    User Dashboard
                  </MenuItem>
                </Link>
                <Link to="/admin/dashboard">
                  <MenuItem p='0.7rem 0' fontWeight="500" borderTop="1px solid #D7DBDD">
                    Admin Dashboard
                  </MenuItem>
                </Link>
                <Link to="/admin/setting">
                  <MenuItem p='0.7rem 0' fontWeight="500" borderTop="1px solid #D7DBDD">
                    Admin Setting
                  </MenuItem>
                </Link>
              </Box>
            )}
          </MenuList>
        </Menu>
      </Box>
    </ChakraProvider>
  );
};

export default Dropdown;
