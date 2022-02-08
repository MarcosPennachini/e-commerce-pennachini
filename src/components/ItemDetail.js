import { Badge, Box, HStack } from '@chakra-ui/react';
import React from 'react';

const ItemDetail = ({ pictureUrl, description, price, title, stock }) => {
  return (
    <HStack w='full' px={4} py={3} overflow='hidden'>
      <Box>
        <Image src={pictureUrl} alt='Imágen de producto' />
      </Box>

      <Box p={4}>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='purple'>
            Nuevo
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='blue'>
            Stock: {stock}
          </Badge>
        </Box>

        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
          {title}
        </Box>

        <Text fontSize='2xl' as='h5' lineHeight='tight'>
          {`$${parseFloat(price)}`}
        </Text>

        <Text as='p'>{description}</Text>
      </Box>
    </HStack>
  );
};

export default ItemDetail;
