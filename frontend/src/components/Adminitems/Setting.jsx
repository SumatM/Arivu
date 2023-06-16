import { Box, Button, Flex, FormLabel, Grid, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminNavTop from '../AdminNavTop'

const Setting = () => {
  return (
    <Grid className='Nav'  h={'99vh'} w='94%' gap={10}>
    <AdminSidebar/> 
       <Box >
     <AdminNavTop/>
   {/*  */}

    <Heading>Setting</Heading>
<Box  mt={5}>
 
 <Flex justify={'space-between'} p={5}>
 <Box>
 <Heading size={13}>Profile Information</Heading>
 <Text>Update User Profile Information and Password</Text>
 </Box>
 <Box border={'1px solid gray'}  borderRadius={10} w={"60%"} p={5}>
  <FormLabel>Name</FormLabel>
  <Input placeholder='Enter Name' />
  <Button mt={5} >Save</Button>
 </Box>

 </Flex>
 <Flex justify={'space-between'} p={5}>
 <Box>
 <Heading size={13}>Update Password</Heading>
 <Text>Ensure your account is using a long, random password to <br /> stay secure</Text>
 </Box>
 <Box border={'1px solid gray'} borderRadius={10} w={"60%"} p={5}>
  <FormLabel>Current Password</FormLabel>
  <Input placeholder='Enter Current Password' />
  <FormLabel>New Password</FormLabel>
  <Input placeholder='Enter New Password' />
  <FormLabel>Confirm Password</FormLabel>
  <Input placeholder='Enter Confirm Password' />
  <Button mt={5} >Save</Button>
 </Box>

 </Flex>
    


</Box>

       </Box>
 
     </Grid>
  )
}

export default Setting
