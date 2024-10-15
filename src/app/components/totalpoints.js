'use client'

import { Box, Text, Center, Divider } from "@chakra-ui/react"
import React from "react"
import { BsGift } from "react-icons/bs";

export default function Totalpoints() {
    return (
        <Box
            w={'full'}
            h={'auto'}
            borderRadius={'20px'}
            bg={'white'}
            display={'flex'}
            p={'24px'}
            justifyContent={'space-between'}
            mb={'16px'}
        >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} w={'50%'}>
                <Text fontWeight={600} color={'#8F8F8F'} fontSize={'14px'}>Total points</Text>
                <Text fontWeight={700} fontSize={'44px'}>360 <span style={{ color: '#8F8F8F', fontSize: '12px' }}>Points</span></Text>
            </Box>

            <Center height='100px'>
                <Divider orientation='vertical' border={'1px solid'} color={'#B9E6FE'} />
            </Center>

            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-end'} w={'50%'}>
                <Text fontWeight={600} color={'#8F8F8F'} fontSize={['8px', '8px', '14px', '14px']} textAlign={'right'}>You earned 100 points for joining team alpha</Text>
                <Text className="smallBlueText" fontWeight={600} fontSize={'20px'} display={'flex'} gap={'8px'} alignItems={'center'}>100 <BsGift color="#5DB9FF" /></Text>
            </Box>
        </Box>
    )
}