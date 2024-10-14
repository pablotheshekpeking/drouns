// components/LineChart.js
import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { MdArrowDropDown } from 'react-icons/md';
import { FaChartLine } from "react-icons/fa6";
import { title } from 'process';

// Register chart elements
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  // Sample data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#1485FF',  // Updated to match your preferred color
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // This ensures the chart fills the container
    plugins: {
      title: {
        display: true,
        text: 'Your next vesting milestone is in 2 months',
        fontSize: '18px',
        location: 'bottom'
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Box
      w={'100%'}
      height="400px"
      bg={'white'}
      borderRadius={'20px'}
      display={'flex'}
      p={'24px'}
      mb={'40px'}
    >
      {/* This Box ensures the chart fills the entire space */}
      <Box w={'full'} h={'full'}>
        <Box w={'full'} display={'flex'} flexDirection={['column', 'column', 'row', 'row']} justifyContent={'space-between'} alignItems={'center'}>

            <Box display={'flex'} gap={'24px'}>
                <Text color={'#1485FF'} fontSize={'18px'} fontWeight={600}>Visiting Period</Text>
                <Text color={'#00000066'} fontSize={'18px'} fontWeight={400}>3 Years</Text>
            </Box>

            <Box w={['full', 'full', 'full', '33%']} h={'auto'} display={'flex'} gap={'10px'}>
                <Button w={'50%'} bg={'#0000000D'}>Month <MdArrowDropDown /></Button>
                <Button w={'50%'} bg={'#0000000D'}><FaChartLine /> <MdArrowDropDown /></Button>
            </Box>
        </Box>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default LineChart;
