import { Badge, Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import React from 'react';

const Item = () => {
  return (
    <Box w='full' px={4} py={3} overflow='hidden'>
      <Image src='https://picsum.photos/300/200' alt='Imágen de producto' borderRadius={4} />

      <Box p={4}>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='purple'>
            Nuevo
          </Badge>
        </Box>

        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
          Modelo del Funko Pop
        </Box>

        <Text fontSize='2xl' as='h5' lineHeight='tight'>
          $7.500
        </Text>

        <Button rightIcon={<AiOutlineArrowRight />} colorScheme='blue' variant='outline' size='xs' mt='2'>
          Ver mas
        </Button>
      </Box>
    </Box>
  );
};

export default Item;
