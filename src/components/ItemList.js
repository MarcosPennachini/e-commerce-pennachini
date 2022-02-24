import { Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';
// import ItemCount from './ItemCount';

const ItemList = ({items}) => {
  const itemBackground = useColorModeValue('gray.50', 'gray.700');
  // const toast = useToast();
  // const [filteredItems, setFilteredItems] = useState([]);
  // const categoryId = id;
  // console.log(categoryId);

  // const onAdd = (cant) => {
  //   console.log('Cantidad seleccionada: ' + cant);
  //   toast({
  //     title: 'Producto agregago',
  //     description: 'Se ha agregado al carrito!',
  //     status: 'success',
  //     duration: 5000,
  //     isClosable: true,
  //   });
  // };
  

  return (
    <SimpleGrid minChildWidth='300px' spacing={10}>
      {items.map((item) => (
        <Flex key={item.id} bg={itemBackground} borderRadius={4} borderWidth={1} direction='column'>
          <Item
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
          />
          {/* <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> */}
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default ItemList;
