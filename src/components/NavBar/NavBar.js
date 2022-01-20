import React, { useState } from 'react';
import { Container, Flex, Stack, Link, Box } from '@chakra-ui/react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container maxW='container.lg' padding={0}>
      <Flex w='full' mb={8} p={8} justifyContent='space-between' bg={{base: 'white', md: 'transparent'}} color={{base: 'gray.700', md: 'white'}} wrap='wrap'>
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          alignItems='center'
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Stack
            spacing={8}
            alignItems='center'
            justifyContent={{ base: 'center', md: 'space-between' }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Link to='/#'>Home</Link>
            <Link to='/#'>Products</Link>
            <Link to='/#'>About us</Link>
          </Stack>
        </Box>
        
      </Flex>
    </Container>
  );
};

export default NavBar;
