import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { products } from '../products';
import ItemList from './ItemList';
import ItemListHero from './ItemListHero';
import SkeletonCards from './SkeletonCard';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    products
      .then((result) => {
        setItems(result);
      })
      .catch((error) => console.log('Se produjo un error :(', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <ItemListHero greeting={greeting}/>

      <Container id='itemListContainer' maxW='container.lg' px={[1, 4]} py={[4, 6]}>
        {/* <Text
          mb={10}
          bgGradient='linear(to-l, #0093E9, #80D0C7)'
          bgClip='text'
          textAlign='center'
          fontSize='4xl'
          fontWeight='900'
        >
          {greeting}
        </Text> */}
        {loading ? <SkeletonCards /> : <ItemList items={items} />}
      </Container>
    </section>
  );
};

export default ItemListContainer;
