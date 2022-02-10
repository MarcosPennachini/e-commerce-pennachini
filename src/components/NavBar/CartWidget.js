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
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant='ghost' colorScheme='red' width={{ base: 'full', md: 'auto' }}>
          <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart>
          <Badge colorScheme='green' variant='solid' ml={1} fontSize='0.7em'>
            3
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
            <Divider />
            <HStack w='full'>
              <Text>Item 3</Text>
            </HStack>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CartWidget;
