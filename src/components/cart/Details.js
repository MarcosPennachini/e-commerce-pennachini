import {
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  useToast,
  FormErrorMessage,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const { items } = useContext(CartContext);
  const toast = useToast();

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'El campo nombre es requerido';
    }

    if (!values.surName) {
      errors.surName = 'El campo apellido es requerido';
    }

    if (!values.email) {
      errors.email = 'El campo email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email no válido!';
    }

    if (!values.address) {
      errors.address = 'El campo domicilio es requerido';
    }

    if (!values.city) {
      errors.city = 'El campo ciudad es requerido';
    }

    if (!values.cp) {
      errors.cp = 'El campo código postal es requerido';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      surName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      cp: '',
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
      toast({
        title: '¡Compra realizada! 😃',
        description: 'La compra se ha registrado correctamente',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start'>
      <VStack spacing={3} alignItems='flex-start'>
        <Text fontSize='4xl' fontWeight='900'>
          Informaci&oacute;n personal
        </Text>
      </VStack>
      <form onSubmit={formik.handleSubmit}>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
          <GridItem colSpan={colSpan}>
            <FormControl isInvalid={formik.errors.firstName}>
              <FormLabel>Nombre</FormLabel>
              <Input
                placeholder='John'
                name='firstName'
                id='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isInvalid={formik.errors.surName}>
              <FormLabel>Apellido</FormLabel>
              <Input
                placeholder='Doe'
                name='surName'
                id='surName'
                value={formik.values.surName}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.surName}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isInvalid={formik.errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder='johndoe@email.com'
                name='email'
                id='email'
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isInvalid={formik.errors.phone}>
              <FormLabel>Tel&eacute;fono</FormLabel>
              <Input
                placeholder='343555555'
                name='phone'
                id='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={formik.errors.address}>
              <FormLabel>Domicilio</FormLabel>
              <Input
                placeholder='San Martin 330'
                name='address'
                id='address'
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isInvalid={formik.errors.city}>
              <FormLabel>Ciudad</FormLabel>
              <Input
                placeholder='Santa Fe'
                name='city'
                id='city'
                value={formik.values.city}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isInvalid={formik.errors.cp}>
              <FormLabel>C&oacute;digo postal</FormLabel>
              <Input
                placeholder='3100'
                name='cp'
                id='cp'
                value={formik.values.cp}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.cp}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <Checkbox defaultChecked>Enviar al domicilio especificado.</Checkbox>
          </GridItem>
          {items.length > 0 && (
            <GridItem colSpan={2}>
              <Button colorScheme='green' size='lg' w='full' type='submit'>
                Terminar mi compra
              </Button>
            </GridItem>
          )}
        </SimpleGrid>
      </form>
    </VStack>
  );
};

export default Details;
