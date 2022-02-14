import { Badge, Box, Button, Image, Text } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ title, id, price, pictureUrl }) => {
  return (
    <Box w='full' px={4} py={3} overflow='hidden'>
      <Image src={pictureUrl} alt='Imágen de producto' borderRadius={4} />

      <Box p={4}>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='purple'>
            Nuevo
          </Badge>
        </Box>

        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
          {title}
        </Box>

        <Text fontSize='2xl' as='h5' lineHeight='tight'>
          {`$${parseFloat(price)}`}
        </Text>

        <Link to={`/item/${id}`}>
          <Button
            rightIcon={<AiOutlineArrowRight />}
            colorScheme='blue'
            variant='ghost'
            size='sm'
            mt='2'
          >
            Ver detalle
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Item;
