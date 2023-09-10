
import React from 'react';
import { Box,Grid } from '@chakra-ui/react';
import './AdminNavbar.css'
import AdminSidebar from './AdminSidebar';
import AdminNavTop from './AdminNavTop';
import Navbar from './UserComponents/UserNavbar';

const AdminNavbar = () => {


  return (
    <Box >
      <Grid className='Nav'  h={'99vh'} w='94%' gap={10} bg='red'>
   {/* <AdminSidebar/>  */}
      <Box >
   
    <AdminNavTop bg='green'/>
  {/*  */}
      </Box>

    </Grid>
    </Box>
  )
}

export default AdminNavbar
