import React from "react";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Section1 from "./LandingPageComponents/Section1";
import Section2 from "./LandingPageComponents/Section2";
import Section5 from "./LandingPageComponents/Section5";

const LandingPage = () => {
  return (
    <Flex direction={"column"}>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section5 />
      <Footer />
    </Flex>
  );
};

export default LandingPage;
