import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getItem } from '../getItem';
import { Container, Text } from '@chakra-ui/react';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem
      .then((result) => {
          console.log(result);
        setItem(result[0]);
      })
      .catch((error) => {
        console.error('Se produjo un error al obtener el Item ', error);
      });
  }, []);

  return (
    <section>
        <Text
          mb={4}
          bgGradient='linear(to-l, #0093E9, #80D0C7)'
          bgClip='text'
          textAlign='center'
          fontSize='4xl'
          fontWeight='900'
        >
          Detalle de producto
          <small>(este componente irá posteriormente en la ruta de detalle de producto)</small>
        </Text>
      <Container maxW='container.lg' padding={[1, 4]}>
        <ItemDetail item={item} />
      </Container>
    </section>
  );
};

export default ItemDetailContainer;
