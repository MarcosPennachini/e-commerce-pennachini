import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { Container } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
// import { products } from '../products';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, 'items', id);
    getDoc(docRef)
      .then((snapshot) => {
        console.log(snapshot.data());
        setItem({id: snapshot.id, ...snapshot.data()});
      })
      .catch((error) => {
        console.error('Se produjo un error al obtener el Item ', error);
      })
      .then(() => setLoading(false))
  }, [id])

  return (
    <section>
      <Container maxW='container.lg' padding={[1, 4]}>
        {!loading && <ItemDetail item={item} />}
      </Container>
    </section>
  );
};

export default ItemDetailContainer;
