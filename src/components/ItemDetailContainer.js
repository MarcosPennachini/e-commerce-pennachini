import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { products } from '../products';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getItem = (id) => {
    products
      .then((result) => {
        console.log(result);
        const data = result.filter((item) => item.id === id);
        console.log(data);
        setItem(data);
      })
      .catch((error) => {
        console.error('Se produjo un error al obtener el Item ', error);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (id) {
      getItem(id);
    }
  }, [id]);

  return (
    <section>
      <Container maxW='container.lg' padding={[1, 4]}>
        {!loading && <ItemDetail item={item} />}
      </Container>
    </section>
  );
};

export default ItemDetailContainer;
