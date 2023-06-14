import { Box, Button, ButtonGroup, Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const Courses = () => {
  return (
    <Box border={'2px solid gray'}>
      <Flex justify='space-between' align={'center'}>
        <Text>Welcome To Course</Text>
        <Link>Create</Link>
      </Flex>
<Box  maxWidth="100%" overflowX="auto" border={'2px solid red'}>

      <Table variant="striped" borderWidth="1px" borderRadius="md" w='100%'>
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
      <Tbody>
        <Tr>
          <Td>Data 1</Td>
          <Td>Data 2</Td>
          <Td>Data 3</Td>
          <Td>Data 3</Td>
          <Td>Data 3</Td>
          <Td>Data 3</Td>
          <Box >
          <Button mr={10}>Delete</Button>
            <Link to={'/admin/Edit/:id'}>
          <ButtonGroup size='sm' isAttached variant='outline'>
  <Button>Edit</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>
            </Link>
            
          </Box>
        </Tr>
        <Tr>
          <Td>Data 4</Td>
          <Td>Data 5</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
        </Tr>
        <Tr>
          <Td>Data 4</Td>
          <Td>Data 5</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
        </Tr>
        <Tr>
          <Td>Data 4</Td>
          <Td>Data 5</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
          <Td>Data 6</Td>
        </Tr>
        {/* Add more rows as needed */}
      </Tbody>
    </Table>
</Box>

    </Box>
  )
}

export default Courses
