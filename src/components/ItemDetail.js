import { Badge, Box, Image, Stack, Text, useToast, useColorModeValue } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const backgroundColor = useColorModeValue('radial-gradient( circle farthest-corner at 18.7% 37.8%,  rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90% )', 'radial-gradient( circle farthest-corner at 32.7% 82.7%,  rgba(173,0,171,1) 8.3%, rgba(15,51,92,1) 79.4% )');
  const [product] = item;
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
    <Stack w='full' px={4} py={3} overflow='hidden' direction={{ base: 'column', md:'row' }}>
      <Box w='full'>
        <Image src={product.pictureUrl} alt='Imágen de producto' bgImage={backgroundColor} borderRadius={6} />
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
