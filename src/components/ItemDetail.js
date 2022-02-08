import { Badge, Box, HStack, Image, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const product = item;
  const toast = useToast();

  const onAdd = (cant) => {
    console.log('Cantidad seleccionada: ' + cant);
    toast({
      title: 'Producto agregago',
      description: 'Se ha agregado al carrito!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <HStack w='full' px={4} py={3} overflow='hidden'>
      <Box w='full'>
        <Image src={product.pictureUrl} alt='Imágen de producto' backgroundColor='gray.100' />
      </Box>

      <Box p={4} w='full'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={2} colorScheme='purple'>
            Nuevo
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='blue'>
            Stock: {product.stock}
          </Badge>
        </Box>

        <Box mt='1' fontWeight='semibold' fontSize='4xl' as='h4'>
          {product.title}
        </Box>

        <Text fontSize='2xl' as='h5' mb={3}>
          {`$${parseFloat(product.price)}`}
        </Text>

        <Text as='p'>{product.description}</Text>

        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
      </Box>
    </HStack>
  )
};

export default ItemDetail;
