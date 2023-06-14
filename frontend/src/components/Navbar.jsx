
import React from 'react';
import { Box,Grid } from '@chakra-ui/react';
import './Navbar.css'
import Sidebar from './Sidebar';
import NavTop from './NavTop';

import AllRoute from '../routes/AllRoute';
import Courses from './items/Courses';
import EditPage from './items/EditPage';
import DashBoard from './items/DashBoard';

const Navbar = () => {

  return (
    <Grid className='Nav'  h={'99vh'} w='98%' gap={10} ml={10}>
   <Sidebar/> 
      <Box >
    <NavTop/>
    <AllRoute/>
      </Box>


    </Grid>
  )
}

export default Navbar
