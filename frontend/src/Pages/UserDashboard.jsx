import UserNavbar from "../components/UserComponents/UserNavbar";
import UserSlider from "../components/UserComponents/UserSlider";
import Footer from "./Footer";
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
        <Container mt="100px" maxW="container.xxl">
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default UserDashboard;
