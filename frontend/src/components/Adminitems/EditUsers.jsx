import { Box, Button, Flex, FormControl, FormLabel,Grid,Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./edit.css"
import AdminSidebar from '../AdminSidebar'
import AdminNavTop from '../AdminNavTop';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { patchProduct, patchUser } from '../../Redux/AdminReducer/action';

const EditUser = () => {

  const {id}=useParams()
  const dispatch=useDispatch();
  const store=useSelector(store=>console.log(store))
  const navigate=useNavigate()
 
 
console.log(id)

let obj={
    name:"",
    email:"",
    password:"",
    city:"",
    }
  const [detail,setDetail]=useState(obj)

  const handleChange=(e)=>{
   const {name,value}=e.target;
   setDetail((prev)=>{
    return {...prev,[name]:value}
   })
  }
  const handleSubmit=()=>{
     console.log(detail);
   dispatch(patchUser(id,detail))
   alert("Data Updated Successfully")
   navigate("/admin/users")
  }



  return (

    <Grid className='Nav'  h={'99vh'} w='94%' gap={10}>
    <AdminSidebar/> 
       <Box >
     <AdminNavTop/>
   {/*  */}
   <Flex align="center" justify="center"  border={'2px solid white'} borderRadius={10} className="background" color={'white'}>
      <Box width={["100%", "80%", "60%", "40%"]} p={4}>
      <FormControl>
          <FormLabel >Name</FormLabel>
          <Input type="text" placeholder="Enter Course Title" name="name" value={detail.name} onChange={handleChange} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Textarea type="email" placeholder="Enter Email" name="email" value={detail.email} onChange={handleChange} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter Password" name="password" value={detail.password} onChange={handleChange} />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>City</FormLabel>
          <Input type="text" placeholder="Enter City" name="city" value={(detail.city)} onChange={handleChange} />
        </FormControl>
        <Button mt={4} colorScheme="blue" size="md" isFullWidth onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Flex>
       </Box>
 
     </Grid>
    
  
  
  )
}

export default EditUser
