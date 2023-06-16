import { Box, Button, FormControl, FormLabel, Grid, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminNavTop from '../AdminNavTop'


const AddCourse = () => {
  return (
    <Grid className='Nav'  h={'99vh'} w='94%' gap={10}>
    <AdminSidebar/> 
       <Box >
     <AdminNavTop/>
   
   <Box border={'2px solid gray'} borderRadius={10} p={10} h='90%'>
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
       </Box>
 
     </Grid>
  )
}

export default AddCourse
