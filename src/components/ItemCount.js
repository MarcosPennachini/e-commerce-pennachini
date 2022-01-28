import { Box, Button, HStack, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const controlsColor = useColorModeValue('gray.100', 'gray.500');
  const toast = useToast();
  const [cant, setCant] = useState(initial);

  const increment = () => {
      if (stock === 0) {
        console.log('No hay stock disponible');
        toast({
            title: 'Lo sentimos',
            description: 'No tenemos stock disponible :(',
            status: 'warning',
            duration: 5000,
            isClosable: true,
        })
      } else {
        setCant(cant + 1);
      }
  };
  const decrement = () => {
    setCant(cant - 1);
  };

  return (
    <Box w='full' px={4} py={3}>
      <Box w='full' bgColor={controlsColor} borderRadius={6} mb={2}>
        <HStack w='full' justifyContent='space-between'>
          {cant === initial ? (
            <Button variant='ghost' colorScheme='blue' onClick={decrement} disabled>-</Button>
          ) : (
            <Button variant='ghost' colorScheme='blue' onClick={decrement}>-</Button>
          )}
          { stock === 0 
            ? <Text fontWeight='bold' color='gray.600'>{cant}</Text>
            : <Text fontWeight='bold' color='gray.800'>{cant}</Text>
          }
          {cant === stock ? (
            <Button variant='ghost' colorScheme='blue' onClick={increment} disabled>+</Button>
          ) : (
            <Button variant='ghost' colorScheme='blue' onClick={increment}>+</Button>
          )}
        </HStack>
      </Box>
      {stock === 0 ? (
        <Button w='full' variant='outline' border='2px' colorScheme='green' disabled>
          Agregar al carrito
        </Button>
      ) : (
        <Button w='full' variant='outline' border='2px' colorScheme='green' onClick={() => onAdd(cant)}>
          Agregar al carrito
        </Button>
      )}
    </Box>
  );
};

export default ItemCount;
