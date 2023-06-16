import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import teacher from "../../asset/A.png";
const Section1 = () => {
  return (
    <Flex
      mt={100}
      pl={{
        sm: "50px",
        md: "100px",
        lg: "170px",
      }}
      mb={70}
      gap={50}
    >
      <Flex
        direction="column"
        w={{
          sm: "60%",
          md: "55%",
          lg: "50%",
        }}
        gap={30}
      >
        <Text
          fontSize={{
            sm: "30px",
            md: "60px",
            lg: "80px",
          }}
          fontWeight="bold"
          fontFamily="poppins"
        >
          Learn without limits
        </Text>
        <Text
          fontSize={{
            lg: "18px",
            md: "16px",
            sm: "14px",
          }}
          fontWeight="semibold"
        >
          Start, switch, or advance your career with more than 5,800 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </Text>
        <Flex
          gap={30}
          direction={{
            sm: "column",
            md: "row",
            lg: "row",
          }}
        >
          <Button
            bg="#0056d2"
            color="white"
            size="lg"
            p={{
              lg: "30px 60px",
              md: "25px 50px",
              sm: "20px 40px",
            }}
            border="3px solid #0056d2"
          >
            Join for Free
          </Button>
          <Button
            colorScheme="#0056d2"
            color="#0056d2"
            variant="outline"
            size="lg"
            p={{
              lg: "30px 60px",
              md: "25px 50px",
              sm: "20px 40px",
            }}
            border="3px solid #0056d2"
          >
            Try Arivu for Business
          </Button>
        </Flex>
      </Flex>
      <Box
        display={{ sm: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={teacher}
          alt="Your Image"
          width={{
            md: "60%",
            lg: "80%",
          }}
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default Section1;
