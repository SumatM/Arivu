import UserNavbar from "../components/UserComponents/UserNavbar";
import UserSlider from "../components/UserComponents/UserSlider";
import Footer from "./Footer";
import CourseComponent from "../components/UserComponents/CourseComponent";

import { Box, Container, Flex } from "@chakra-ui/react";
const UserDashboard = () => {
  return (
    <>
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          py={2}
          position="fixed"
          top={7}
          left={0}
          right={0}
          zIndex={1}
        >
          <UserNavbar />
        </Flex>
        <UserSlider />
        <CourseComponent />
        <Box
          border="4px solid"
          borderColor="gray.300"
          borderRadius="md"
          padding="4"
          textAlign="center"
          width="95%"
          height="90px"
          margin="auto"
          bgColor="blue"
        >
          <span
            style={{
              fontStyle: "bold",
              fontFamily: "Heading Font Name",
              fontWeight: "900",
              fontSize: "30px",
              color: "white",
            }}
          >
            " Education is the most powerful weapon which you can use to change
            the world."
          </span>
        </Box>
        <Container mt="100px" maxW="container.xxl">
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default UserDashboard;
