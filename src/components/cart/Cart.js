import {
  VStack,
  HStack,
  Stack,
  Divider,
  Heading,
  Text,
  Button,
  AspectRatio,
  Image,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  const { items, totalPrice, totalQuantity } = useContext(CartContext);
  const shipping = 580.99;

  return (
    <VStack w='full' p={10} spacing={6} alignItems='flex-start' bg={bgColor}>
      <VStack alignItems='flex-start' spacing={3}>
        <Text fontSize='4xl' fontWeight='900'>
          Tu carrito
        </Text>
      </VStack>
      {items.map((item) => (
        <HStack key={item.id} spacing={6} alignItems='center' w='full'>
          <Image src={item.pictureUrl} boxSize='60px' objectFit='cover' />
          <Text>{item.title}</Text>
          <Badge colorScheme='teal'>{item.quantity}</Badge>
          <Text >${ parseFloat(item.price.toFixed(2)) }</Text>
        </HStack>
      ))}
      <VStack spacing={4} alignItems='stretch' w='full'>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Text >${parseFloat(totalPrice.toFixed(2))}</Text>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Envío</Text>
          <Text >${ parseFloat(shipping.toFixed(2)) }</Text>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent='space-between' w='full'>
        <Text color={secondaryTextColor}>Total</Text>
        <Text fontWeight='900'>${ totalPrice + shipping }</Text>
      </HStack>
    </VStack>
  );
};

export default Cart;
