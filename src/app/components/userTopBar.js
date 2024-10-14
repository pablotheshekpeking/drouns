'use client'
import React from "react";
import { Box, Text, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from "@chakra-ui/react";
import { TbNotification } from "react-icons/tb";
import { HamburgerIcon } from "@chakra-ui/icons";
import Sidebar from "./sidebar"; // Import your Sidebar component
import "../styles.css";

export default function UserTopBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={'flex'} h={'auto'} w={'full'} justifyContent={'space-between'} alignItems={'center'} gap={12} borderBottom={"1px solid #1C1C1C1A"}>
      {/** User picture */}
      <Box display={'flex'} justifyContent={'flex-start'} h={20} w={'50%'} alignItems={'center'} gap={6}>
        <Box h={'44px'} w={'44px'} borderRadius={'22px'} bg={'#5DB9FF'}></Box>
        <Box>
          <Text fontWeight={700} fontSize={'14px'}>Joy Adam</Text>
          <Text className="smallBlueText">Product Designer</Text>
        </Box>
      </Box>

      {/** Desktop notifications */}
      <Box w={'50%'} h={'auto'} display={['none', 'none', 'none', 'flex']} justifyContent={'flex-end'} alignItems={'center'} gap={12}>
        <Text fontWeight={700} fontSize={['10px', '10px', '14px', '14px']}>Team Alpha</Text>
        <Text display={'flex'} alignItems={'center'} fontSize={['10px', '10px', '14px', '14px']} gap={'8px'} p={"8px 12px"} bg={'#FFFFFF'} borderRadius={'20px'}>
          1 unread notification <TbNotification />
        </Text>
      </Box>

      {/** Mobile hamburger menu */}
      <Box w={'50%'} h={'auto'} display={['flex', 'flex', 'flex', 'none']} justifyContent={'flex-end'} alignItems={'center'} gap={12}>
        {/* Hamburger button to trigger the drawer */}
        <HamburgerIcon boxSize={'24px'} onClick={onOpen} />
      </Box>

      {/** Drawer for mobile sidebar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Sidebar /> {/** Display the sidebar inside the drawer */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
