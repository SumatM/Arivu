import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
const UserSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1610484826625-ac2be7f1c8c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1236&q=80",
    "https://images.unsplash.com/photo-1685575112975-75d7c15f5c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG9ubGluZSUyMGNvYXJzZXMlMjBwb3N0ZXJ8ZW58MHwwfDJ8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (value) => {
    setCurrentIndex(value);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Container mt="100px" maxW="container.xxl">
        <Flex direction="column" align="center">
          <Flex align="center" justify="space-between" mb={4}>
            <Button borderRadius={"50%"} onClick={handlePrevious}>
              <ArrowLeftIcon />
            </Button>
            <Box>
              <Box />
              <Image w={"2000px"} h={"400px"} fit="cover" src={`${images[currentIndex]}`} />
            </Box>
            <Button borderRadius={"50%"} onClick={handleNext}>
              <ArrowRightIcon />
            </Button>
          </Flex>

          <Slider
            defaultValue={currentIndex}
            min={0}
            max={images.length - 1}
            onChange={handleChange}
            w="400px"
          >
            {/* <SliderTrack>
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb /> */}
          </Slider>
        </Flex>
      </Container>
    </>
  );
};

export default UserSlider;
