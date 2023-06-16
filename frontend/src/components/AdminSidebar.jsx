import React, { useState } from 'react';
import { Box, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Flex
      as="nav"
    
     justify="space-between"
      bg="white"
      color="black"
      display={'column'}
      w={'wrap'}
     borderRight={{xl:'2px solid gray',base:'0px'}}
      h='wrap'
      gap={20}
    >
        <Text mt={5} p={2} >Welcome Admin!</Text>
      <Box>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          size="md"
          variant="ghost"
          aria-label="Toggle menu"
          display={!isMobile ? 'none' : 'inherit'}
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>
      <Flex
        
        fontSize="lg"
        fontWeight="bold"
        display={!isMobile || isOpen ? 'inherit' : 'none'}
      >
        <Box mt={5}>
<Link to="/admin/dashboard">
        <Box p={2} >Dashboard</Box>
</Link>
<Link to="/admin/courses">
        <Box p={2}>Courses</Box>
</Link>
<Link to="/admin/addCourse">
        <Box p={2} >AddCourse</Box>
</Link>
<Link to="/admin/discount">
        <Box p={2} >Discounts</Box>
</Link>
<Link to="/admin/giftcard">
        <Box p={2} >GiftCards</Box>
</Link>
<Link to="/admin/statistic">
        <Box p={2} >Statistics</Box>
</Link>
<Link to="/admin/setting">
        <Box p={2}>Settings</Box>
</Link>
      </Box>
      </Flex>
    </Flex>
  );
};

export default AdminSidebar;