import React, { useEffect, useMemo, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Container, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import getProductById from '../helpers/getProductById';


const ItemDetailContainer = () => {
  //const [item, setItem] = useState();
  const { id } = useParams();
  console.log(id);

  const product = useMemo(() => getProductById(id), [id]);
  console.log(product)

  // const getItem = (id) => {
  //   products
  //     .then((result) => {
  //       console.log(result);
  //       const data = result.filter((item) => item.id === id);
  //       console.log(data);
  //       setItem(data);
  //     })
  //     .catch((error) => {
  //       console.error('Se produjo un error al obtener el Item ', error);
  //     });
  // }
  

  // useEffect(() => {

  //   if (id) {
  //     getItem(id);
  //   }

  // }, [id, item]);


  // console.log(item)
  

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
      </Text>
      <Container maxW='container.lg' padding={[1, 4]}>
        <ItemDetail item={product} />
      </Container>
    </section>
  );
};

export default ItemDetailContainer;
