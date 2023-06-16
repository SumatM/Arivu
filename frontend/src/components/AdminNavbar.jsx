
import React from 'react';
import { Box,Grid } from '@chakra-ui/react';
import './AdminNavbar.css'
import AdminSidebar from './AdminSidebar';
import AdminNavTop from './AdminNavTop';

const AdminNavbar = () => {

  return (
    <Grid className='Nav'  h={'99vh'} w='94%' gap={10}>
   <AdminSidebar/> 
      <Box >
    <AdminNavTop/>
  {/*  */}
      </Box>

    </Grid>
  )
}

export default AdminNavbar
