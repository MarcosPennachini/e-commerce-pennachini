import {
  VStack,
  Heading,
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
import Reward from 'react-rewards';

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start'>
      <VStack spacing={3} alignItems='flex-start'>
        <Text fontSize='4xl' fontWeight='900'>
          Informaci&oacute;n personal
        </Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input placeholder='John'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Apellido</FormLabel>
            <Input placeholder='Doe'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Domicilio</FormLabel>
            <Input placeholder='San Martin 330'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Ciudad</FormLabel>
            <Input placeholder='Santa Fe'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Pa&iacute;s</FormLabel>
            <Select>
              <option value='arg'>Argentina</option>
              <option value='usa'>Estados Unidos</option>
              <option value='uy'>Uruguay</option>
              <option value='chi'>Chile</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <Checkbox defaultChecked>Enviar al domicilio especificado.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme='green' size='lg' w='full' onClick={confirmCart}>
            Comprar
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
