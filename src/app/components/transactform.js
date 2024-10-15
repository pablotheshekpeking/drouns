'use client'
import React from "react"
import { InputGroup, InputLeftAddon, Input, InputRightAddon } from "@chakra-ui/react"

export default function CustomTransactForm({ leftAddon, rightAddon, input }) {
    return (
        <InputGroup>
            {leftAddon && (
                <InputLeftAddon
                    bg="white"
                    border={'none'}
                    h={'60px'}
                    borderTopLeftRadius={'80px'} // Only round the left side
                    borderBottomLeftRadius={'80px'}
                >
                    {leftAddon}
                </InputLeftAddon>
            )}
            <Input
                type="num"
                bg={'white'}
                border={'none'}
                h={'60px'}
                borderRadius={leftAddon ? '0' : '80px'} // Round all sides if no addon
                borderTopRightRadius={rightAddon ? '0' : '80px'} // Round only if no right addon
                borderBottomRightRadius={rightAddon ? '0' : '80px'}
            />
            {rightAddon && (
                <InputRightAddon
                    bg="white"
                    border={'none'}
                    h={'60px'}
                    borderTopRightRadius={'80px'} // Only round the right side
                    borderBottomRightRadius={'80px'}
                >
                    {rightAddon}
                </InputRightAddon>
            )}
        </InputGroup>
    )
}
