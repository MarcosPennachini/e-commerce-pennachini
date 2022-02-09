
import { products } from '../products';

const getProductById = (id) => {
  products
    .then((result) => {
      console.log(result);
      return result.find((item) => item.id === id);
    })
    .catch((error) => {
      console.error('Se produjo un error al obtener el Item ', error);
    })
};

export default getProductById;
