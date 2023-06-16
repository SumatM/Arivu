import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { Bar, Pie  } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import AdminSidebar from '../AdminSidebar';
import AdminNavTop from '../AdminNavTop';


const DashBoard = () => {

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };
  const datapie = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const datapie1 = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (

    <Grid className='Nav'  h={'99vh'} w='94%' gap={10}>
    <AdminSidebar/> 
       <Box >
     <AdminNavTop/>
   {/*  */}
   <Box  h={'130vh'}  p={5}>
     <Grid templateColumns={'repeat(4,1fr)'} gap={10} >
      <Box  border={'2px solid gray'} borderRadius={10} p={5}>
        <Flex justify={'space-between'}>
          <Text fontWeight={'bold'}>Total Customers</Text>
          <Text>Icons</Text>
        </Flex >
        <Text mt={15}>Count 2344</Text>
        <Flex mt={15} justify={'space-between'}>
          <Text>+14%</Text>
          <Text>Since last month</Text>
        </Flex>
      </Box>
      <Box  border={'2px solid gray'} borderRadius={10} p={5}>
        <Flex justify={'space-between'}>
          <Text fontWeight={'bold'}>Total Customers</Text>
          <Text>Icons</Text>
        </Flex >
        <Text mt={15}>Count 2344</Text>
        <Flex mt={15} justify={'space-between'}>
          <Text>+14%</Text>
          <Text>Since last month</Text>
        </Flex>
      </Box>
      <Box  border={'2px solid gray'} borderRadius={10} p={5}>
        <Flex justify={'space-between'}>
          <Text fontWeight={'bold'}>Total Customers</Text>
          <Text>Icons</Text>
        </Flex >
        <Text mt={15}>Count 2344</Text>
        <Flex mt={15} justify={'space-between'}>
          <Text>+14%</Text>
          <Text>Since last month</Text>
        </Flex>
      </Box>
      <Box  border={'2px solid gray'} borderRadius={10} p={5}>
        <Flex justify={'space-between'}>
          <Text fontWeight={'bold'}>Total Customers</Text>
          <Text>Icons</Text>
        </Flex >
        <Text mt={15}>Count 2344</Text>
        <Flex mt={15} justify={'space-between'}>
          <Text>+14%</Text>
          <Text>Since last month</Text>
        </Flex>
      </Box>
    
     </Grid>
{/* bar graph */}
     <Flex align="center" justify="center" minHeight="60vh"  >
      <Box p={4} boxShadow="md"  w='100%'>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Monthly Sales
        </Text>
        <Box height="300px">
          <Bar data={data} options={{ maintainAspectRatio: false }} />
        </Box>
      </Box>
    </Flex>
{/* Bar graph Ends */}

{/* Pie graph */}
<Flex justify={'space-between'}>


<Flex align="center" justify="center" maxHeight="60vh">
      <Box p={4} boxShadow="md">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Color Distribution
        </Text>
        <Box height="300px">
          <Pie data={datapie} options={{ maintainAspectRatio: false }} />
        </Box>
      </Box>
    </Flex>

<Flex align="center" justify="center" maxHeight="60vh" >
      <Box p={4} boxShadow="md">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Color Distribution
        </Text>
        <Box height="300px">
          <Pie data={datapie1} options={{ maintainAspectRatio: false }} />
        </Box>
      </Box>
    </Flex>


          </Flex>
{/* Pie graph end */}

    </Box>
       </Box>
 
     </Grid>

    
  )
}

export default DashBoard
