'use client'
import React from "react"
import { InputGroup, InputLeftAddon, Input, InputRightAddon } from "@chakra-ui/react"

export default function CustomTransactForm({ leftAddon, rightAddon, input }) {
    return (
        <InputGroup borderRadius={'40px'}>
            {leftAddon && <InputLeftAddon bg="white" border={'none'} h={'60px'}>{leftAddon}</InputLeftAddon>}
            <Input type="num" bg={'white'} border={'none'} h={'60px'} />
            {rightAddon && <InputRightAddon bg="white" border={'none'} h={'60px'}>{rightAddon}</InputRightAddon>}
        </InputGroup>
    )
}
