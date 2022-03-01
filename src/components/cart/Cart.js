import {
  VStack,
  HStack,
  Divider,
  Text,
  Button,
  Image,
  useColorModeValue,
  Alert,
  AlertIcon,
  Box,
  Flex,
  AlertTitle,
  AlertDescription,
  VisuallyHidden,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Cart = ({shipping}) => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  const { items, totalPrice, removeItem, addItem, deleteItem } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <VStack w='full' height='auto' p={10} spacing={6} alignItems='flex-start' bg={bgColor}>
        <VStack alignItems='flex-start' spacing={3}>
          <Text fontSize='4xl' fontWeight='900'>
            Tu carrito
          </Text>
        </VStack>
        <Alert
          status='warning'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          borderRadius={4}
        >
          <AlertIcon mr={0} boxSize='25px' />
          <AlertTitle mt={3} mb={1} fontSize='lg'>
            Ups! Parece que tu carrito está vacío
          </AlertTitle>
          <AlertDescription maxWidth='sm'>Agrega productos para comprar</AlertDescription>
          <Link to='/'>
            <Button variant='ghost' colorScheme='yellow'>
              Ir a productos
            </Button>
          </Link>
        </Alert>
        <Flex w='full' alignItems='center' justifyContent='center'>
          <Box>
            <Image src='https://i.imgur.com/f7MqzK0.png' boxSize='250px' borderRadius={4} />
            <VisuallyHidden>
              <a href='https://storyset.com/online'>Online illustrations by Storyset</a>
            </VisuallyHidden>
          </Box>
        </Flex>
      </VStack>
    );
  }

  return (
    <VStack w='full' p={10} spacing={6} alignItems='flex-start' bg={bgColor}>
      <VStack alignItems='flex-start' spacing={3}>
        <Text fontSize='4xl' fontWeight='900'>
          Tu carrito
        </Text>
      </VStack>
      {items.map((item) => (
        <HStack key={item.id} spacing={6} alignItems='center' justifyContent='space-between' w='full'>
          <Image src={item.pictureUrl} boxSize='60px' objectFit='cover' />
          <Text>{item.title}</Text>
          <IconButton
            size='xs'
            variant='outline'
            colorScheme='red'
            icon={<AiOutlineDelete />}
            onClick={() => deleteItem(item)}
          ></IconButton>
          <ButtonGroup size='xs' isAttached>
            <IconButton
              size='xs'
              variant='outline'
              icon={<AiOutlineMinus />}
              onClick={() => removeItem(item)}
            />
            {/* <Badge colorScheme='teal'>{item.quantity}</Badge> */}
            <Button
              variant='outline'
              _hover={{
                cursor: 'default',
              }}
            >
              {item.quantity}
            </Button>
            <IconButton
              size='xs'
              variant='outline'
              icon={<AiOutlinePlus />}
              onClick={() => addItem(item, 1)}
            />
          </ButtonGroup>

          <Text>${parseFloat(item.price.toFixed(2))}</Text>
        </HStack>
      ))}
      <VStack spacing={4} alignItems='stretch' w='full'>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Text>${parseFloat(totalPrice.toFixed(2))}</Text>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color={secondaryTextColor}>Envío</Text>
          <Text>${shipping}</Text>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent='space-between' w='full'>
        <Text color={secondaryTextColor}>Total</Text>
        <Text fontWeight='900'>${totalPrice + shipping}</Text>
      </HStack>
    </VStack>
  );
};

export default Cart;
