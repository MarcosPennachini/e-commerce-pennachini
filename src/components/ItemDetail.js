import { Badge, Box, Image, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import ItemCount from './ItemCount';
// import getProductById from '../helpers/GetProductById';
//import { products } from '../products.js';

const ItemDetail = ({ item }) => {
  //const [product] = item;
  // const [product, setProduct] = useState()
  console.log(item);
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

  // const getItem = (id) => {
  //   products
  //     .then((result) => {
  //       // console.log(result);
  //       const [data] = result.filter((item) => item.id === id);
  //       // console.log(data);
  //       return data;
  //     })
  //     .catch((error) => {
  //       console.error('Se produjo un error al obtener el Item ', error);
  //     });
  // }

  //const product = useMemo(() => getProductById(item), [item]);

  // useEffect(() => {
  //   products
  //     .then((result) => {
  //       // console.log(result);
  //       const [data] = result.filter((item) => item.id === id);
  //       // console.log(data);
  //       setProduct(data);
  //     })
  //     .catch((error) => {
  //       console.error('Se produjo un error al obtener el Item ', error);
  //     });
  // }, [id])

  console.log(product)
  

  return (
    <Stack w='full' px={4} py={3} overflow='hidden' direction={{ base: 'column', md:'row' }}>
      <Box w='full'>
        <Image src={product.pictureUrl} alt='Imágen de producto' style={{backgroundImage: 'radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% )'}} />
        
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
    </Stack>
  )
};

export default ItemDetail;
