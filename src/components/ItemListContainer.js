import { Container, Flex, SimpleGrid, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import Item from './Item';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
  const itemBackground = useColorModeValue('gray.50', 'gray.700');
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
    <section>
      <Container maxW='container.lg' padding={[1, 4]}>
        <Text
          mb={10}
          bgGradient='linear(to-l, #0093E9, #80D0C7)'
          bgClip='text'
          textAlign='center'
          fontSize='4xl'
          fontWeight='900'
        >
          {greeting}
        </Text>
        <SimpleGrid minChildWidth='300px' spacing={10}>
          <Flex bg={itemBackground} borderRadius={4} borderWidth={1} direction='column'>
            <Item />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
          </Flex>
          <Flex bg={itemBackground} borderRadius={4} borderWidth={1} direction='column'>
            <Item />
            <ItemCount initial={1} stock={0} onAdd={onAdd} />
          </Flex>
          <Flex bg={itemBackground} borderRadius={4} borderWidth={1} direction='column'>
            <Item />
            <ItemCount initial={1} stock={20} onAdd={onAdd} />
          </Flex>
          <Flex bg={itemBackground} borderRadius={4} borderWidth={1} direction='column'>
            <Item />
            <ItemCount initial={1} stock={8} onAdd={onAdd} />
          </Flex>
          <Flex bg={itemBackground} borderRadius={4} borderWidth={1} direction='column'>
            <Item />
            <ItemCount initial={1} stock={25} onAdd={onAdd} />
          </Flex>
          <Flex bg={itemBackground} borderRadius={4} borderWidth={1} direction='column'>
            <Item />
            <ItemCount initial={1} stock={16} onAdd={onAdd} />
          </Flex>
          <Flex bg={itemBackground} borderRadius={4} borderWidth={1} direction='column'>
            <Item />
            <ItemCount initial={1} stock={14} onAdd={onAdd} />
          </Flex>
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default ItemListContainer;
