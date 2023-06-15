import { Box, Button, ButtonGroup, Flex, Grid, IconButton, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import {useDispatch, useSelector} from "react-redux"
import { deleteProduct, getProduct } from '../../Redux/AdminReducer/action'
import Pagination from './Pagination'
import AdminSidebar from '../AdminSidebar'
import AdminNavTop from '../AdminNavTop'

const Courses = () => {

  const store=useSelector((store)=>store.AdminReducer.data);
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [page,setPage]=useState(1)
  const limit =4

  console.log(store,"storeAll")
  

  useEffect(()=>{
  dispatch(getProduct(page,limit))  
  },[page])

  const handleDelete=(id)=>{
  navigate();
  dispatch(deleteProduct(id))
  }

  const handlePageChange=(page)=>{
    setPage(page)
  }

 const count=store.length

 const handlePageButton=(val)=>{
  setPage(prev=>prev+val)
 }

  return (

    <Grid className='Nav'  h={'99vh'} w='94%' gap={10}>
    <AdminSidebar/> 
       <Box >
     <AdminNavTop/>
   {/*  */}
   <Box >
      <Flex justify='space-between' align={'center'}>
        <Text>Welcome To Course</Text>
        <Link to="/addCourse">Create</Link>
      </Flex>
<Box  maxWidth="100%" overflowX="auto">

      <Table variant="striped" borderRadius="md" w='100%'>
      <Thead>
        <Tr>
          <Th>Header 1</Th>
          <Th>Header 2</Th>
          <Th>Header 3</Th>
          <Th>Header 4</Th>
          <Th>Header 5</Th>
          <Th>Header 6</Th>
        </Tr>
      </Thead>
{store.length>0 && store.map((el,i)=>{
  return <Tbody>
  <Tr>
    <Td>{el.brand}</Td>
    <Td>{el.category}</Td>
    <Td>{el.description}</Td>
    <Td>{el.price}</Td>
    <Td>{el.rating}</Td>
    <Td>{el.title}</Td>
    <Box >
    <Button  onClick={()=>handleDelete(el.id)}>Delete</Button>
      <Link to={`/edit/${el.id}`}>
    <ButtonGroup size='sm' isAttached variant='outline'>
<Button>Edit</Button>
<IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>
      </Link>
      
    </Box>
  </Tr>
  </Tbody>
})}

    </Table>
</Box>
<Box textAlign={'right'}>
  <Button disabled={page<=1} onClick={()=>handlePageButton(-1)}>Prev</Button>
  <Pagination totalCount={count} current_page={page} handlePageChange={handlePageChange}/>
  <Button disabled={page>=count} onClick={()=>handlePageButton(1)}>Next</Button>
</Box>
    </Box>


       </Box>
 
     </Grid>

    
  )
}

export default Courses
