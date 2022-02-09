import { Box, Button, Heading, Image, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import buzz from '../assets/img/buzz_heroImage.png';

const ItemListHero = ({ greeting }) => {
  const textColor = useColorModeValue('white', 'white');
  return (
    <Stack
      w='full'
      px={6}
      py={{ base: 10, md: 4 }}
      mb={8}
      direction={{ base: 'column', md: 'row' }}
      style={{
        backgroundImage:
          'radial-gradient( circle 602px at 2.1% 5.1%,  rgba(233,0,120,1) 0%, rgba(0,0,0,1) 90.1% )',
      }}
    >
      <Box w='full' display='flex' alignItems='center'>
        <Box w='full'>
          <Heading
            as='h1'
            fontSize='4xl'
            mb={4}
            fontWeight='black'
            textTransform='uppercase'
            color={textColor}
          >
            {greeting}
          </Heading>
          <Button
            as='a'
            href='#itemListContainer'
            variant='solid'
            color={textColor}
            border='2px'
            borderColor='whiteAlpha'
            backgroundColor='black'
            _hover={{ bg: 'transparent' }}
          >
            Ver productos
          </Button>
          {/* <Link href='#itemListContainer' textDecoration='none'>
          </Link> */}
        </Box>
      </Box>

      <Box w='full'>
        <Image src={buzz} alt='Hero image' />
      </Box>
    </Stack>
  );
};

export default ItemListHero;
