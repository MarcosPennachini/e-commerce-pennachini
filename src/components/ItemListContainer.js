import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { products } from '../products';
import ItemList from './ItemList';
import ItemListHero from './ItemListHero';
import SkeletonCards from './SkeletonCard';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting, category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');

    if (!category) {
      getDocs(itemsCollection)
        .then((snapshot) => {
          setItems(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .catch((error) => console.log('Se produjo un error :( ', error))
        .finally(() => setLoading(false));
    } else {
      switch (id) {
        case '1':
          const q1 = query(itemsCollection, where('category', '==', 'Movies&TV'));
          getDocs(q1)
            .then((snapshot) => {
              setItems(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
            })
            .catch((error) => console.log('Se produjo un error :( ', error))
            .finally(() => setLoading(false));
          break;
        case '2':
          const q2 = query(itemsCollection, where('category', '==', 'Music'));
          getDocs(q2)
            .then((snapshot) => {
              setItems(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
            })
            .catch((error) => console.log('Se produjo un error :( ', error))
            .finally(() => setLoading(false));
          break;
        default:
          break;
      }
    }
  }, [category, id]);

  return (
    <section>
      <ItemListHero greeting={greeting} />

      <Container id='itemListContainer' maxW='container.lg' px={[1, 4]} py={[4, 6]}>
        {loading ? <SkeletonCards /> : <ItemList items={items} />}
      </Container>
    </section>
  );
};

export default ItemListContainer;
