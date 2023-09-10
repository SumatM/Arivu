import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../Redux/UserReducer/action";

const AdminSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const userStore = useSelector((store) => store.UserReducer);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex
      as="nav"
      boxShadow="inner"
      p="6"
      rounded="md"
      justify="space-between"
      bg="white"
      color="teal"
      display={"column"}
      w={"wrap"}
      //  borderRight={{xl:'2px solid gray',base:'0px'}}
      // h='wrap'
      gap={20}
    >
      <Box mt={5} color={"brown"}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text fontWeight="500">
            {" "}
            Welcome {capitalizeFirstLetter(userStore.name)}!
          </Text>
        </motion.h1>
      </Box>
      <Box>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          size="md"
          variant="ghost"
          aria-label="Toggle menu"
          display={!isMobile ? "none" : "inherit"}
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>
      <Flex
        fontSize="lg"
        fontWeight="bold"
        display={!isMobile || isOpen ? "inherit" : "none"}
      >
        <Box mt={5}>
          <Link to="/admin/dashboard">
            <Box p={2}>Admin Dashboard</Box>
          </Link>
          <Link to="/arivu">
            <Box p={2}>User Dashboard</Box>
          </Link>
          <Link to="/admin/courses">
            <Box p={2}>Courses</Box>
          </Link>
          <Link to="/admin/users">
            <Box p={2}>Users</Box>
          </Link>
          <Link to="/admin/videos">
            <Box p={2}>AllVideos</Box>
          </Link>
          <Link to="/admin/discount">
            <Box p={2}>Discounts</Box>
          </Link>
          <Link to="/admin/giftcard">
            <Box p={2}>GiftCards</Box>
          </Link>
          <Link to="/admin/statistic">
            <Box p={2}>Statistics</Box>
          </Link>
          <Link to="/admin/setting">
            <Box p={2}>Settings</Box>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AdminSidebar;
