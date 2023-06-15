import React from "react";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <br />
      <br />
      <br />
      <Footer />
    </Flex>
  );
};

export default LandingPage;
