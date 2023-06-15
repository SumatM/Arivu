
import React from 'react';
import { Box,Grid } from '@chakra-ui/react';
import './AdminNavbar.css'
import Sidebar from './AdminSidebar';
import NavTop from './AdminNavTop';

const AdminNavbar = () => {

  return (
    <Grid className='Nav'  h={'99vh'} w='94%' gap={10}>
   <Sidebar/> 
      <Box >
    <NavTop/>
  {/*  */}
      </Box>

    </Grid>
  )
}

export default AdminNavbar
