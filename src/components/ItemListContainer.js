import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const ItemListContainer = ({ greeting }) => {
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
        <SimpleGrid minChildWidth='200px' spacing={10}>
          <Box bg='gray.300' height='200px' borderRadius={4}></Box>
          <Box bg='gray.300' height='200px' borderRadius={4}></Box>
          <Box bg='gray.300' height='200px' borderRadius={4}></Box>
          <Box bg='gray.300' height='200px' borderRadius={4}></Box>
          <Box bg='gray.300' height='200px' borderRadius={4}></Box>
          <Box bg='gray.300' height='200px' borderRadius={4}></Box>
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default ItemListContainer;
