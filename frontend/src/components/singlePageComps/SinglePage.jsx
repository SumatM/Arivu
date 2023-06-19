import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
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
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";
import Payment from "../../Pages/Payment/Payment";
import convertDateFormat from "../../Redux/AdminReducer/action";
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";
import { AiOutlineLock } from "react-icons/ai";
import Navbar from "../UserComponents/UserNavbar";

export default function SinglePage() {
  const [res, setRes] = useState({});
  const { id } = useParams();
  console.log(id);

  console.log("#####", res);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // /courses/:courseID

  const getSinglePageData = (id) => {
    let vdo_url = `https://arivu-sever-link.onrender.com/videos/courseVideos/${id}`;

    const token = JSON.parse(localStorage.getItem("user")).token;

    fetch(vdo_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setRes(res))
      .catch((err) => console.log("error in case of fetch 👎👎👎", err));
  };

  useEffect(() => {
    getSinglePageData(id);
  }, [id]);

  // prevent click on video 
  const handleClickPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <div className=" w-full flex justify-center items-center flex-col">
      <div className="w-full bg-neutral-800 flex justify-center">
      <Navbar/>

        <div style={{ paddingTop: '100px' }} className=" xl:max-h-[300px] px-2 max-w-[598px] xl:max-w-[900px]">
          <div className="xl:flex xl:space-x-4">
            <Box className=" my-8 ">
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
                        <BreadcrumbLink href="#">
                          Web Development
                        </BreadcrumbLink>
                      </BreadcrumbItem>

                      <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">JavaScript</BreadcrumbLink>
                      </BreadcrumbItem>
                    </Breadcrumb>
                  </Box>

                  <Box className="title " fontSize="2xl" fontWeight="bold">
                    {/* JavaScript: The Advanced Concepts (2023 Update) */}
                    {/* {console.log("****************",res.course.title)} */}
                    {res?.course?.title}
                  </Box>

                  <Box className="description text-[16px] font-thin ">
                    {/* Learn modern advanced JavaScript practices and be in the top
                  10% of JavaScript developers */}
                    {res?.course?.description}
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
                      {/* Andrei Negoie */}

                      {res?.course?.teacher}
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
            <div className="mt-6 ">
              <SingleAbsolute
                props={{ ...res?.course?.price, onOpen, onClose }}
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[598px] xl:mr-72">
        <SingleList />
      </div>
      <Box mt='90px'>
        {res?.course?.videos?.map((video) => {
          return (
            <div >
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                border="1px solid"
                m='15px'
              >
                <Box  onClick={handleClickPrevent} position='relative'>
                  <iframe onClick={handleClickPrevent}
                    width="350"
                    height="180"
                    src="https://www.youtube.com/watch?v=u183gdMkhxw"
                    frameborder="0"
                    allowfullscreen
                   
                  ></iframe>
                  {<Box onClick={handleClickPrevent} position='absolute' top='40%' left="40%" textAlign='center'><AiOutlineLock size="45px"/></Box>}
                </Box>
                <Stack>
                  <CardBody>
                    <Heading size="md">{video.title}</Heading>
                    <Text py="2">{video.description}</Text>
                    <Text size="12px">
                      <Text fontWeight="bold" display="inline" mr="5px">
                        Instructor:
                      </Text>
                      {capitalizeFirstLetter(video.teacher)}
                    </Text>
                    <Text size="12px">
                      <Text fontWeight="bold" display="inline" mr="5px">
                        Date:
                      </Text>
                      {convertDateFormat(video.createdAt)}
                    </Text>
                    <Text size="12px"></Text>
                    <Text>
                      <Text fontWeight="bold" display="inline" mr="5px">
                        Views:
                      </Text>
                      {video.views}
                    </Text>
                  </CardBody>
                </Stack>
                
              </Card>
            </div>
          );
        })}
      </Box>
      <div>
        <Payment isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </div>
      
    </div>
  );
}
