import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Avatar,
  Center,
  AbsoluteCenter,
} from "@chakra-ui/react";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");

  const handleSave = () => {
    // Implement save logic here
    console.log("Profile Saved");
  };

  const isFormValid = () => {
    // Add your form validation logic here
    // Return true if the form is valid, otherwise false
    return (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      age !== "" &&
      city !== "" &&
      job !== ""
    );
  };

  return (
    <ChakraProvider>
      <Box maxW="500px" mx="auto" p="4">
        <Center>
          <Avatar
            justifyContent={"center"}
            size="xl"
            name={name}
            src="/path/to/profile-image.jpg"
          />
        </Center>
        <Heading mb="4" fontSize="2xl" textAlign="center">
          Edit Profile
        </Heading>
        <VStack spacing="4" align="stretch">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input value={city} onChange={(e) => setCity(e.target.value)} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Job</FormLabel>
            <Input value={job} onChange={(e) => setJob(e.target.value)} />
          </FormControl>

          <Button
            mt="4"
            isDisabled={
              name === "" ||
              email === "" ||
              password === "" ||
              age === "" ||
              city === "" ||
              job === ""
            }
            onClick={handleSave}
          >
            Save
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ProfilePage;
