import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products';
import ItemList from './ItemList';
import ItemListHero from './ItemListHero';
import SkeletonCards from './SkeletonCard';

const ItemListContainer = ({ greeting, category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    if (!category) {
      products
        .then((result) => {
            setItems(result);
        })
        .catch((error) => console.log('Se produjo un error :(', error))
        .finally(() => setLoading(false));
    } else {
      switch (id) {
        case '1':
          products
            .then((result) => {
              const data = result.filter((item) => item.category === 'Movies&TV')
              console.log('TV ', data);
              setItems(data);
            })
            .catch((error) => console.log('Se produjo un error :(', error))
            .finally(() => setLoading(false));
          break;
        case '2':
          products
            .then((result) => {
              const data = result.filter((item) => item.category === 'Music')
              console.log('Music ', data)
              setItems(data);
            })
            .catch((error) => console.log('Se produjo un error :(', error))
            .finally(() => setLoading(false));
          break;
      } 
    }
  }, [category, id]);

  return (
    <section>
      <ItemListHero greeting={greeting}/>

      <Container id='itemListContainer' maxW='container.lg' px={[1, 4]} py={[4, 6]}>
        {loading ? <SkeletonCards /> : <ItemList items={items} />}
      </Container>
    </section>
  );
};

export default ItemListContainer;
