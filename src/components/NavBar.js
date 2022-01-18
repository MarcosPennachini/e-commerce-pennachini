import React from 'react'
import { Container, Flex, Heading } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <Container maxW='container.lg'>
            <Flex w='full' justifyContent='space-between'>
                <Heading size='xl'>
                    NavBar
                </Heading>
            </Flex>
        </Container>
    );
}

export default NavBar;