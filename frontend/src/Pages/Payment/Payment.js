import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import DynamicSelect from "./DynamicSelect";
import { Radio } from "@chakra-ui/radio";
import { BsFillCreditCardFill } from "react-icons/bs";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard, FaWallet } from "react-icons/fa";
import { SiMastercard, SiAmericanexpress, SiFlutter } from "react-icons/si";
import { AiTwotoneBank } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";
import { useParams } from "react-router";

export default function Payment({courseId}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const upiRef = useRef(null);

  let baseURL = "http://localhost:8080";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhhZDAzYjZhZWM1ZjUzYjJiODE0MmEiLCJ1c2VyIjoic3VtYXQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODY5MDg3NjEsImV4cCI6MTY4NzUxMzU2MX0.nu-ma37MDpZFdAqPWX9XmMIFDvVZ0Nzg-59J9Ajm1Ug";

  const [course, setCourse] = useState({});


  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/courses/${courseId}`,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
            cancelToken: source.token,
          }
        );
        console.log(res.data.course);
        setCourse(res.data.course);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          console.log(err);
        }
      }
    };

    fetchCourse();

    return () => {
      source.cancel("Component unmounted");
    };
  }, []);

  function showUPI(){
    upiRef.current.style.display = 'block'
  }

  function blockUPI() {
    upiRef.current.style.display = 'none'
  }

// console.log(courseId)

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            {/* payment page  */}
            <Box>
              <Box>
            
                <Flex justify="space-between">
                  <Box>
                    <Heading size="sm">Billing Address</Heading>
                  </Box>
                  <Box>
                    <Heading size="sm">Total</Heading>
                    <Heading size="xs">₹{course[0]?.price}</Heading>
                  </Box>
                </Flex>
          {/* 2nd bar  */}

          <Flex>
            <Box mr='5px'>
                <Text>Module: {capitalizeFirstLetter(course[0]?.title)}</Text>
            </Box>
            <Box m='0 7px'>
                <Text>Instructor: {capitalizeFirstLetter(course[0]?.teacher)}</Text>
            </Box>
          </Flex>
          <Text fontSize='12px'>{`Number of video you are getting ${course[0]?.videos.length}`}</Text>

                {/* Address */}
                <Box>
                  <Box>
                    <DynamicSelect />
                  </Box>
                  <Box>
                    <Text fontSize="12px">
                      Arivu is required by law to collect applicable transaction
                      taxes for purchases made in certain tax jurisdications.
                    </Text>
                  </Box>
                </Box>

                {/* payment method */}
                {/* cards  */}
                <Box mt="15px">
                  <Flex bg="gray.100" justify="space-between" p="10px">
                    <Flex align="center">
                      <Box>
                        <Radio borderColor="black">
                          <Flex ml="5px">
                            <Box border="1px solid" p="2px 4px" bg="white">
                              <BsFillCreditCardFill />
                            </Box>
                            <Heading size="xs" ml="7px">
                              Cards
                            </Heading>
                          </Flex>
                        </Radio>
                      </Box>
                    </Flex>
                    <Flex w="40%" justify="space-evenly">
                      {/* visa Cards */}
                      <Box border="1px solid" p="2px">
                        <RiVisaFill size="25px" color="blue" />
                      </Box>
                      {/* american express */}
                      <Box border="1px solid" p="2px">
                        <SiAmericanexpress size="25px" color="#1976D2" />
                      </Box>
                      {/* master cart */}
                      <Box border="1px solid" p="2px">
                        <FaCcMastercard size={25} color="#FF5722" />
                      </Box>
                      {/* rupay  */}
                      <Box
                        style={{ transform: "rotate(180deg)" }}
                        border="1px solid"
                        p="2px"
                      >
                        <SiFlutter size="25px" color="#43A047" />
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
                {/* upi */}
                <Box >
                  <Flex mt="5px" bg="gray.100" justify="space-between" p="10px" onClick={showUPI}>
                    <Flex align="center">
                      <Box>
                        <Radio borderColor="black">
                          <Flex ml="5px">
                            <Box style={{ transform: "rotate(180deg)" }}>
                              <SiFlutter size="25px" color="#43A047" />
                            </Box>
                            <Heading size="xs" ml="7px">
                              UPI
                            </Heading>
                          </Flex>
                        </Radio>
                      </Box>
                    </Flex>
                  </Flex>
                  <Box ref={upiRef} display='none'>
                    asdfasdfl
                   <Box textAlign='center'>
                   <Text fontWeight='500' fontSize='10px' onClick={blockUPI} _hover={{cursor:'pointer'}}>See Less</Text>
                   </Box>
                  </Box>
                </Box>
                {/* Net banking */}
                <Box>
                  <Flex mt="5px" bg="gray.100" justify="space-between" p="10px">
                    <Flex align="center">
                      <Box>
                        <Radio borderColor="black">
                          <Flex ml="5px">
                            <Box>
                              <AiTwotoneBank size="25px" color="#1976D2" />
                            </Box>
                            <Heading size="xs" ml="7px">
                              Net Banking
                            </Heading>
                          </Flex>
                        </Radio>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
                {/* mobile wallter  */}
                <Box>
                  <Flex mt="5px" bg="gray.100" justify="space-between" p="10px">
                    <Flex align="center">
                      <Box>
                        <Radio borderColor="black">
                          <Flex ml="5px">
                            <Box>
                              <FaWallet size="20px" color="#78909C" />
                            </Box>
                            <Heading size="xs" ml="7px">
                              Net Banking
                            </Heading>
                          </Flex>
                        </Radio>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">PayNow</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
