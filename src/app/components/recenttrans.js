'use client';
import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, Badge, TableContainer } from '@chakra-ui/react';

export default function RecentTransactions({ transactions }) {
    return (
        <Box w={'100%'} bg={'white'} borderRadius={'12px'} p={'24px'}>
            <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>Recent Transactions</Text>
            <TableContainer
                  sx={{
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
            <Table bg={'white'} maxW={'100%'}>
                <Thead bg={'#F8F8F8'}>
                    <Tr>
                        <Th>Transaction Type</Th>
                        <Th>Date</Th>
                        <Th>Amount</Th>
                        <Th>Transaction Fee</Th>
                        <Th>Total</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {transactions.map((transaction, index) => (
                        <Tr key={index}>
                            <Td color={transaction.type === 'Sell' ? '#2E90FA' : '#7A5AF8'}>{transaction.type}</Td>
                            <Td>{transaction.date}</Td>
                            <Td>{transaction.amount}</Td>
                            <Td>{transaction.fee}</Td>
                            <Td>{transaction.total}</Td>
                            <Td>
                                <Badge colorScheme={transaction.status === 'Completed' ? 'green' : 'red'}>
                                    {transaction.status}
                                </Badge>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
        </Box>
    );
}
