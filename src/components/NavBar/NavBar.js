import React, { useState } from 'react';
import {
  Container,
  Flex,
  Stack,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import ColorModeToggle from './ColorModeToggle';
import CartWidget from './CartWidget';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FcClapperboard, FcSpeaker } from 'react-icons/fc';

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
    <Container maxW='container.xl' padding={0}>
      <Flex
        w='full'
        mb={[0, 2]}
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
              <Button
                variant='ghost'
                colorScheme='red'
                width={{ base: 'full', md: 'auto' }}
                title='Ver todos los productos'
              >
                Productos
              </Button>
            </Link>
            <Menu w='full'>
              <MenuButton
                as={Button}
                variant='ghost'
                colorScheme='red'
                width={{ base: 'full', md: 'auto' }}
                rightIcon={<AiOutlineCaretDown />}
              >
                Categor&iacute;as
              </MenuButton>
              <MenuList width={{ base: 'full', md: 'auto' }} bg={{base: bgColor, md: 'transparent'}} >
                <Link to={`/category/1`}>
                  <MenuItem>
                    <FcClapperboard /> Pel&iacute;culas y TV
                  </MenuItem>
                </Link>
                <Link to={`/category/2`}>
                  <MenuItem>
                    <FcSpeaker /> M&uacute;sica
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            {/* <Button variant='ghost' colorScheme='red' width={{ base: 'full', md: 'auto' }}>
              Contacto
            </Button> */}
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
