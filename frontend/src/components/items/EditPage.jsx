import { Box, Button, Flex, FormControl, FormLabel,Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import "./edit.css"

const EditPage = () => {
  return (
    
  <Flex align="center" justify="center" minHeight="88vh" border={'2px solid red'} className="background" color={'white'}>
      <Box width={["100%", "80%", "60%", "40%"]} p={4}>
        <FormControl>
          <FormLabel >Course Name</FormLabel>
          <Input type="text" placeholder="Enter Course name" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Course Description</FormLabel>
          <Textarea placeholder="Enter Course description" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Rating</FormLabel>
          <Input type="number" placeholder="Enter Course Rating" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Course Price</FormLabel>
          <Input type="number" placeholder="Enter Course price" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Course Instructor</FormLabel>
          <Input type="text" placeholder="Enter Course Instructor" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Demo Video</FormLabel>
          <Input type="text" placeholder="Enter Demo Video Link" />
        </FormControl>
        <Button mt={4} colorScheme="blue" size="md" isFullWidth>
          Submit
        </Button>
      </Box>
    </Flex>
  
  )
}

export default EditPage
