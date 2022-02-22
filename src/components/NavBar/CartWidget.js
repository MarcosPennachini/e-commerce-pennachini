import React, { useContext } from 'react';
import {
  Button,
  Badge,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Stack,
  Divider,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { items, totalQuantity } = useContext(CartContext);
  console.log(totalQuantity);

  if (items.length === 0) {
    return (
      <Popover>
        <PopoverTrigger>
          <Button
            title='Mi carrito'
            variant='ghost'
            colorScheme='red'
            width={{ base: 'full', md: 'auto' }}
          >
            <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart>
            <Badge colorScheme='yellow' variant='solid' ml={1} fontSize='0.7em'>
              0
            </Badge>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
            Mi carrito
          </PopoverHeader>
          <PopoverBody>
            <Alert
              status='warning'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              borderRadius={4}
            >
              <AlertIcon mr={0} boxSize='20px' />
              <AlertTitle mt={3} mb={1} fontSize='md'>
                Ups! Parece que tu carrito está vacío
              </AlertTitle>
              <AlertDescription maxWidth='sm' mb={1} fontSize='sm'>Agrega productos para comprar</AlertDescription>
              <Link to='/'>
                <Button variant='ghost' colorScheme='yellow'>
                  Ir a productos
                </Button>
              </Link>
            </Alert>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          title='Mi carrito'
          variant='ghost'
          colorScheme='red'
          width={{ base: 'full', md: 'auto' }}
        >
          <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart>
          <Badge colorScheme='green' variant='solid' ml={1} fontSize='0.7em'>
            {totalQuantity}
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Mi carrito
        </PopoverHeader>
        <PopoverBody>
          <Stack direction='column'>
            {items.map((item) => (
              <div key={item.id}>
                <HStack w='full' justifyContent='space-between'>
                  <Image src={item.pictureUrl} boxSize='60px' objectFit='cover' />
                  <Text>{item.title}</Text>
                  <Badge colorScheme='teal'>{item.quantity}</Badge>
                </HStack>
                <Divider />
              </div>
            ))}
          </Stack>
        </PopoverBody>
        <PopoverFooter py={3}>
          <Link to='/cart'>
            <Button
              variant='solid'
              bgGradient='linear(to-l, #fbab7e , #f7ce68)'
              fontWeight='black'
              color='white'
              w='full'
              _hover={{
                bgGradient: 'linear(to-r, #fbab7e, #f7ce68)',
                boxShadow: 'md',
              }}
            >
              Ver carrito
            </Button>
          </Link>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default CartWidget;
