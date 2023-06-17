import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
} from "@chakra-ui/react";

import { FaAngleRight } from "react-icons/fa";
// import theme from './Font';
import SingleAbsolute from "./SingleAbsolute";
import SingleList from "./SingleList";

export default function SinglePage() {
  return (
    <div className=" bg-white ">
      <div className="bg-neutral-800 max-h-[300px] px-[300px]">
        <div className="xl:flex  ">
          <Box className=" my-8  ">
            <Box
              className="outerBox"
              color="white"
              width="100%"
              fontFamily="sans-serif"
            >
              <Box className="space-y-2">
                <Box className="breadCrumb text-purple-300 font-bold text-sm ">
                  <Breadcrumb
                    spacing="8px"
                    separator={<FaAngleRight color="gray.500" />}
                  >
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Development</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Web Development</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                      <BreadcrumbLink href="#">JavaScript</BreadcrumbLink>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Box>

                <Box className="title " fontSize="2xl" fontWeight="bold">
                  JavaScript: The Advanced Concepts (2023 Update)
                </Box>

                <Box className="description text-[16px] font-thin ">
                  Learn modern advanced JavaScript practices and be in the top
                  10% of JavaScript developers
                </Box>

                <Box
                  className="rating space-x-2"
                  display="flex"
                  fontWeight="5px"
                >
                  <Box className="text-yellow-300 text-xs">4.8</Box>
                  <Box className="text-[11px]">⭐⭐⭐⭐</Box>
                  <Box className="flex text-[12px] space-x-2">
                    <Box color="#a435f0">(12866 ratings)</Box>
                    <Box>69107 students</Box>
                  </Box>
                </Box>

                <Box className="createdby space-x-2" display="flex">
                  <Box className="text-[12px]">
                    <p>Created by</p>
                  </Box>
                  <Box color="#a435f0" className="text-[12px] underline ">
                    Andrei Negoie
                  </Box>
                </Box>

                <Box className="text-[12px] space-x-4" display="flex">
                  <Box>🌗 Last updated 5/2023</Box>
                  <Box>🌐 English</Box>
                  <Box display="flex">
                    ⌨️ English [Auto], Arabic [Auto]{" , "}
                    <Box color="#a435f0">12 more</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <div className="mt-6">
            <SingleAbsolute />{" "}
          </div>
        </div>
      </div>
      <div className="px-[300px]">
        <SingleList />
      </div>
    </div>
  );
}
