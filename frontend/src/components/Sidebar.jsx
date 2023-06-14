import React, { useState } from 'react';
import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
      align="center"
      justify="space-between"
      padding={4}
      bg="gray.800"
      color="black"
      display={'column'}
      
      w={'wrap'}
     borderRight='2px solid gray'
      h={{xl:'98vh',lg:'98vh',sm:'20vh'}}
      gap={20}
    >
        <Box>Welcome Admin!</Box>
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
        align="center"
        fontSize="lg"
        fontWeight="bold"
        display={!isMobile || isOpen ? 'inherit' : 'none'}
      >
        <Box mt={50}>
<Link to="/">
        <Box p={5} >Dashboard</Box>
</Link>
<Link to="/edit">
        <Box p={5} mt={10}>Order</Box>
</Link>
<Link to="/courses">
        <Box p={5} mt={10}>Products</Box>
</Link>
<Link to="/">
        <Box p={5} mt={10}>Customers</Box>
</Link>
<Link to="/">
        <Box p={5} mt={10}>Discounts</Box>
</Link>
<Link to="/">
        <Box p={5} mt={10}>GiftCards</Box>
</Link>
<Link to="/">
        <Box p={5} mt={10}>Pricing</Box>
</Link>
<Link to="/">
        <Box p={5} mt={10}>Settings</Box>
</Link>
      </Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;