import React from 'react';
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
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CartWidget = () => {
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
          <Stack direction='column'>
            <HStack w='full'>
              <Text>Item 1</Text>
            </HStack>
            <Divider />
            <HStack w='full'>
              <Text>Item 2</Text>
            </HStack>
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
                boxShadow: 'md'
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
