'use client'
import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./components/sidebar";
import UserTopBar from "./components/userTopBar";
import ConverSell from "./components/convertandsell";
import Totalpoints from "./components/totalpoints";
import LineChart from "./components/linechart";
import RecentTransactions from "./components/recenttrans";

const transactionsData = [
  {
    type: 'Sell',
    date: '2024-10-10',
    amount: '$1,000',
    fee: '$10',
    total: '$990',
    status: 'Completed',
  },
  {
    type: 'Sell',
    date: '2024-10-11',
    amount: '$500',
    fee: '$5',
    total: '$495',
    status: 'Pending',
  },
  {
    type: 'Conversion',
    date: '2024-10-12',
    amount: '$300',
    fee: '$3',
    total: '$297',
    status: 'Completed',
  },
];

export default function Home() {
  return (
    <Box
      w={'100%'}
      h={['auto', 'auto', 'auto', '100vh']}
      bg={'#F8F8F8'}
      m={0}
      p={0}
      display={'flex'}
      scrollBehavior={['smooth', "smooth", "smooth", 'none']}
    >
      {/** sidebar */}
      <Box
        w={'300px'}
        h={'full'}
        display={['none', 'none', 'none', 'flex']}
        p={'16px'}
      >
        <Sidebar />
      </Box>
      <Box w={'full'} h={'full'} p={'16px'} overflowY='auto' scrollBehavior={'smooth'}>
        <UserTopBar />

        <ConverSell />

        <Totalpoints />

        <LineChart />

        <RecentTransactions transactions={transactionsData} />
      </Box>
    </Box>
  );
}
