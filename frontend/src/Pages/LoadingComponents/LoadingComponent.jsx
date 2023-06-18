import React from "react";
import "./loading.css";
import "./loadingSkeleton.css";
import { Box, Flex } from "@chakra-ui/react";
const LoadingComponent = () => {
  return (
    <Flex
      direction={"column"}
      boxShadow="xl"
      p={4}
      m={2}
      _hover={{ boxShadow: "2xl", cursor: "pointer" }}
    >
      <span className="loaderSkeleton"></span>

      <Box>
        <span className="loader">L &nbsp; ading</span>
      </Box>
    </Flex>
  );
};

export default LoadingComponent;
