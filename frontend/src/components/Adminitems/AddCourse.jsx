import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminNavTop from '../AdminNavTop'

const AddCourse = () => {
  return (
    <Grid className='Nav'  h={'99vh'} w='94%' gap={10}>
    <AdminSidebar/> 
       <Box >
     <AdminNavTop/>
   
   <Box>
    Add Courses
   </Box>
       </Box>
 
     </Grid>
  )
}

export default AddCourse
