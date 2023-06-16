


import React from 'react'
import { Box } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
} from '@chakra-ui/react'


import { FaAngleRight } from "react-icons/fa";
// import theme from './Font';

function SinglePage() {


  // const course = {
  //   title: 'Introduction to React.js',
  //   instructor: 'John Doe',
  //   price: 49.99,
  //   description: 'Learn the fundamentals of React.js and build interactive web applications.',
  //   duration: '6 hours',
  // };
  



  return (
    <Box  border='5px' borderColor='red.800'>
   
    <Box className='outerBox' bg='black' color='white' width="100%" fontFamily= "sans-serif">


       <Box border='2px' borderColor='yellow' mr={500} ml={200}>

         <Box className='breadCrumb' border='2px' borderColor='red.800'>

            <Breadcrumb spacing='8px' separator={<FaAngleRight color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Development</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Web Development</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>JavaScript</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

         </Box>


         <Box className='title' border='2px' borderColor='red.800' fontSize='2xl' fontWeight="bold"  >
            JavaScript: The Advanced Concepts (2023 Update)
         </Box>


         <Box className='description' fontWeight="bold"  fontSize="18px">
         Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers
         </Box>

         <Box className='rating' display="flex" fontWeight="5px">
       
             <Box>4.8</Box>
             <Box>⭐⭐⭐⭐</Box>
             <Box color="#a435f0">(12866 ratings)</Box>
             <Box>(69107 students)</Box>

         </Box>

         <Box className='createdby' display="flex">

             <Box><p>Created by</p></Box>
             <Box color="#a435f0">Andrei Negoie</Box>
         </Box>

         <Box className='lastupdate' display="flex">
            <Box>🌗  Last updated 5/2023</Box>
            <Box>🌐 English</Box>
            <Box display="flex">⌨️ English [Auto], Arabic [Auto] <Box color="#a435f0">12 more</Box></Box>
         </Box>

       </Box>


    </Box>

    </Box>
  )
}