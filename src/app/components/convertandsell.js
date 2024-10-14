'use client'
import { Box } from "@chakra-ui/react";
import React from "react";
import CustomTransactForm from "./transactform";
import { MdCurrencyExchange } from "react-icons/md";
import { SiConvertio } from "react-icons/si";

export default function ConverSell(){
    return (
        <Box w={'full'} display={'flex'} justifyContent={'space-between'} gap={'16px'} py={'16px'}>
            <CustomTransactForm leftAddon={'Sell'} rightAddon={<MdCurrencyExchange color="#5DB9FF" />} />

            <CustomTransactForm leftAddon={'Convert'} rightAddon={<SiConvertio color="purple" />} />
        </Box>
    )
}