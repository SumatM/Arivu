import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import { capitalizeFirstLetter } from "../Redux/UserReducer/action";
import { FaUserShield } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { actionUserLogout } from "../Redux/UserReducer/actionType";

export function NavBarDrawer({ isOpen, onClose }) {
  const userStore = useSelector((store) => store.UserReducer);
  const drawerItems = {
    "": [
      "For Businesses",
      "For Universities",
      "For Governments",
      "Online Degrees",
      "Find your new career",
    ],
    Goals: ["Take a free course", "Earn a Degree", "Earn a Certificate"],
    Subjects: [
      "Date Science",
      "React",
      "Computer Science",
      "Information Technology",
      "Language Learning",
      "Health",
      "Math and Logic",
      "Arts and Humanites",
    ],
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
            email: "",
            name: "",
            role: "",
            token: "",
            isAuth: "",
            isError: "",
            loading: false,
            success: false,
            isUser: false,
          })
        );
        dispatch(actionUserLogout());
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            bg="#f5f5f5"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            display="flex"
            justifyContent="space-between"
          >
            <Link to="/">
              <Text
                textAlign="center"
                fontSize={30}
                fontWeight="extrabold"
                color="#0056d2"
                _hover={{ cursor: "pointer" }}
              >
                AṞIVU
              </Text>
            </Link>
            <Box>
              <RxCross2 size="1.5rem" onClick={onClose} />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            {userStore?.isAuth ? (
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
            ) :  (
              <Box
                borderTop="1px solid #3A3F3F"
                pt="25px"
                display="flex"
                justifyContent="space-between"
              >
                <Link to="/login">
                  <Button
                    bg="#0056d2"
                    color="white"
                    borderRadius="5px"
                    _hover={{ bg: "#003e9c" }}
                  >
                    LogIn
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    bg="#0056d2"
                    color="white"
                    borderRadius="5px"
                    _hover={{ bg: "#003e9c" }}
                  >
                    Join for free
                  </Button>
                </Link>
              </Box>
            ) }
            {/* personlized settings  */}
            {/* ADMIND options  */}
            {userStore?.role == "admin" && (
              <Box p="0.5rem 0" borderTop="1px solid #3A3F3F">
                <Link to="/profile">
                  <Flex alignItems={"center"} justify="space-between">
                    <Text fontSize="0.8rem" p="1rem 0">
                      Your Account
                    </Text>
                    <IoIosArrowForward />
                  </Flex>
                </Link>

                <Link to="/arivu">
                  <Flex alignItems={"center"} justify="space-between">
                    <Text fontSize="0.8rem" p="1rem 0">
                      User Dashboard
                    </Text>
                    <IoIosArrowForward />
                  </Flex>
                </Link>

                <Link to="/admin/dashboard">
                  <Flex alignItems={"center"} justify="space-between">
                    <Text fontSize="0.8rem" p="1rem 0">
                      Admin Dashboard
                    </Text>
                    <IoIosArrowForward />
                  </Flex>
                </Link>
                <Link to="/admin/setting">
                  <Flex alignItems={"center"} justify="space-between">
                    <Text fontSize="0.8rem" p="1rem 0">
                      Admin Setting
                    </Text>
                    <IoIosArrowForward />
                  </Flex>
                </Link>
              </Box>
            )}

            {/* users options  */}
            {userStore?.role == "user" && (
              <Box p="0.5rem 0" borderTop="1px solid #3A3F3F">
                <Link to="/profile">
                  <Flex alignItems={"center"} justify="space-between">
                    <Text fontSize="0.8rem" p="1rem 0">
                      Your Account
                    </Text>
                    <IoIosArrowForward />
                  </Flex>
                </Link>

                <Link to="/arivu">
                  <Flex alignItems={"center"} justify="space-between">
                    <Text fontSize="0.8rem" p="1rem 0">
                      Dashboard
                    </Text>
                    <IoIosArrowForward />
                  </Flex>
                </Link>
              </Box>
            )}

            {
              <Box>
                <ul>
                  {Object.entries(drawerItems).map(([category, items]) => (
                    <li key={category}>
                      <Box borderTop="1px solid #D7DBDD"></Box>
                      <Heading m="15px 0" size="sm">
                        {category}
                      </Heading>
                      <ul>
                        {items.map((item) => (
                          <Text
                            fontSize="0.8rem"
                            p="1rem 0"
                            key={item}
                            _hover={{ cursor: "pointer" }}
                          >
                            {item}
                          </Text>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </Box>
            }
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
