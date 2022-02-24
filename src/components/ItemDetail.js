import {
  Badge,
  Box,
  Image,
  Stack,
  Text,
  Button,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './context/CartContext';

const ItemDetail = ({ item }) => {
  const backgroundColor = useColorModeValue(
    'radial-gradient( circle 1224px at 10.6% 8.8%,  rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2% );',
    'radial-gradient( circle farthest-corner at 32.7% 82.7%,  rgba(173,0,171,1) 8.3%, rgba(15,51,92,1) 79.4% )'
  );
  const product = item;
  const toast = useToast();
  const [quantity, setQuantity] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (cant) => {
    setQuantity(cant);
    setIsAdded(true);
    try {
      addItem(product, cant);
      toast({
        title: 'Producto agregado',
        description: 'Se ha agregado al carrito!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error)
      toast({
        title: 'Error al agregar producto',
        description: `${error.message}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    
  };

  /** Logueo la cantidad cuando se dispara evento click en itemCount */
  useEffect(() => {
    console.log('Cantidad seleccionada: ', quantity);
  }, [quantity]);

  return (
    <Stack w='full' px={4} py={3} overflow='hidden' direction={{ base: 'column', md: 'row' }}>
      <Box w='full'>
        <Image
          src={product.pictureUrl}
          alt='Imágen de producto'
          bgImage={backgroundColor}
          borderRadius={6}
        />
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
        {isAdded ? (
          <Link to='/cart'>
            <Button
              variant='solid'
              bgGradient='linear(to-l, #fbab7e , #f7ce68)'
              fontWeight='black'
              color='white'
              w='full'
              my={3}
              _hover={{
                bgGradient: 'linear(to-r, #fbab7e, #f7ce68)',
                boxShadow: 'md',
              }}
            >
              Ver carrito
            </Button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        )}
      </Box>
    </Stack>
  );
};

export default ItemDetail;
