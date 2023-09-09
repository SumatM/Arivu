import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
const UserSlider = () => {
  const images = [
    "https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?cs=srgb&dl=pexels-max-fischer-5212653.jpg&fm=jpg",
    "https://www.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg",
    "https://inup.iitkgp.ac.in/images/iit_kgp.jpg",
    "https://www.vedantu.com/seo/content-images/33e42c38-8332-4d51-9dcf-65a4f262b5da.png",
    "https://media.wired.com/photos/6365b7166776a0176c76e4de/master/w_2560%2Cc_limit/All-the-Free-Resources-You-Can-Find-at-Your-Library-Gear-GettyImages-1331816640.jpg",
    "https://images.seattleschild.com/wp-content/uploads/2021/09/Classy-Treehouse-w-logo-e1632341660272.png",
  ];

  const textOnImage = [
    "Group Studies",
    "Degree from Recognized Institutes",
    "Prestigious Institutions",
    "Online Classes",
    "Study Notes",
    "Successful Career",
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
            <Box position="relative">
              <Image
                w={"2000px"}
                h={"400px"}
                fit="cover"
                src={`${images[currentIndex]}`}
              />
              <Box
                position="absolute"
                bottom="10"
                w='100%'
                color="rgba(255, 255, 255, 0.8)"
                p="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text>
                  <Heading
                    size="3xl"
                    letterSpacing="1.5px"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    {textOnImage[currentIndex]}
                  </Heading>
                </Text>
              </Box>
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
