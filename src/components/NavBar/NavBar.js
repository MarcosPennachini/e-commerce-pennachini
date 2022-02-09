import React, { useState } from 'react';
import {
  Container,
  Flex,
  Stack,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import ColorModeToggle from './ColorModeToggle';
import CartWidget from './CartWidget';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.800', 'yellow.50');
  const navbarColorBase = useColorModeValue('white', 'yellow.800');
  const navbarColorMd = useColorModeValue('yellow.800', 'white');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleColorModeIcon = () => {
    setIsDark(!isDark);
  };

  return (
    <Container maxW='container.lg' padding={0}>
      <Flex
        w='full'
        mb={8}
        p={8}
        alignItems='center'
        justifyContent='space-between'
        bg={{ base: bgColor, md: 'transparent' }}
        color={{ base: navbarColorBase, md: navbarColorMd }}
        wrap='wrap'
      >
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          alignItems='center'
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Stack
            spacing={8}
            mt={{ base: 4, md: 0 }}
            alignItems='center'
            justifyContent={{ base: 'center', md: 'space-between' }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Link to='/'>
              <Button variant='ghost' colorScheme='red' width={{ base: 'full', md: 'auto' }}>
                Productos
              </Button>
            </Link>
            <Button variant='ghost' colorScheme='red' width={{ base: 'full', md: 'auto' }}>
              ¿Cómo comprar?
            </Button>
            <Button variant='ghost' colorScheme='red' width={{ base: 'full', md: 'auto' }}>
              Contacto
            </Button>
            <CartWidget />
            <Box onClick={toggleColorMode}>
              <ColorModeToggle isDark={isDark} toggleColorModeIcon={toggleColorModeIcon} />
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBar;
