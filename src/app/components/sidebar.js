'use client'

import { Box, Text } from "@chakra-ui/react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdCurrencyExchange, MdFolderOpen, MdGroups3 } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { BiSolidUserBadge } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { FaAddressCard, FaBook } from "react-icons/fa";
import '../styles.css'

export default function Sidebar() {
  return (
    <Box
      w={'full'}
      maxH={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
    >
      <Box w={'full'} h={'auto'}>
        <Text className="navText" fontSize={'40px'} fontWeight={900}>Logo</Text>
      </Box>


      <Box
        w={'full'}
        h={'full'}
        display={'flex'}
        flexDirection={'column'}
        gap={4}
      >
        <Text className="navText" bg={'#5DB9FF'}>
          <LuLayoutDashboard /> Overview
        </Text>
        <Text className="navText" >
          <MdCurrencyExchange />  Shares
        </Text>

        <Text className="navText" >
          <MdFolderOpen />  Teams
        </Text>

        <Text className="navText" >
          <IoBookOutline />  Dashboard
        </Text>

        <Text className="navText" >
          <BiSolidUserBadge />  Dashboard
        </Text>

        <Text className="navText" >
          <FaAddressCard />  Account
        </Text>

        <Text className="navText" >
          <MdGroups3 />  Corporate
        </Text>

        <Text className="navText" >
          <FaBook />  Blog
        </Text>

        <Text className="navText" >
          <TiMessages />  Social
        </Text>
      </Box>

      <Box display={'flex'} h={'auto'} w={'full'} justifyContent={'center'} alignItems={'center'} gap={6}>
        <Box h={'44px'} w={'44px'} borderRadius={'22px'} bg={'#5DB9FF'}></Box>
        <Box>
          <Text fontWeight={700} fontSize={'14px'}>Joy Adam</Text>
          <Text className="smallBlueText" cursor={'pointer'}>Log out</Text>
        </Box>
      </Box>
    </Box>
  );
}