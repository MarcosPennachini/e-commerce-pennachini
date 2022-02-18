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
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { items, totalQuantity } = useContext(CartContext);
  console.log(totalQuantity);

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
              <>
                <HStack w='full' justifyContent='space-between' key={item.id}>
                  <Image src={item.pictureUrl} boxSize='60px' objectFit='cover' />
                  <Text>{item.title}</Text>
                  <Badge colorScheme='teal'>{item.quantity}</Badge>
                </HStack>
                <Divider />
              </>
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
