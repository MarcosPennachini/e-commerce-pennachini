import {
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const { items } = useContext(CartContext);

  return (
    <VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start'>
      <VStack spacing={3} alignItems='flex-start'>
        <Text fontSize='4xl' fontWeight='900'>
          Informaci&oacute;n personal
        </Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
        <GridItem colSpan={colSpan}>
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input placeholder='John'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl isRequired>
            <FormLabel>Apellido</FormLabel>
            <Input placeholder='Doe'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='johndoe@email.com'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Tel&eacute;fono</FormLabel>
            <Input placeholder='343555555'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Domicilio</FormLabel>
            <Input placeholder='San Martin 330'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl isRequired>
            <FormLabel>Ciudad</FormLabel>
            <Input placeholder='Santa Fe'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl isRequired>
            <FormLabel>C&oacute;digo postal</FormLabel>
            <Input placeholder='3100'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <Checkbox defaultChecked>Enviar al domicilio especificado.</Checkbox>
        </GridItem>
        {items.length > 0 && (
          <GridItem colSpan={2}>
            <Button colorScheme='green' size='lg' w='full'>
              Terminar mi compra
            </Button>
          </GridItem>
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
