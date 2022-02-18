import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

// const INITIAL_STATE = {
//     items: [],
//     totalQuantity: 0,
//     totalPrice: 0
// }

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  /** Función que updatea los valores de totalQuantity y totalPrice */
  function updateValues() {
    let priceAcum = items.reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0);
    priceAcum = parseFloat(priceAcum.toFixed(2));
    setTotalPrice(priceAcum);

    let quantityAcum = items.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);
    setTotalQantity(quantityAcum);
  }

  useEffect(updateValues, [items]);

  const addItem = (item, cant) => {
    const index = isInCart(item);
    const updatedItems = [...items];
    if (index < 0) {
      updatedItems.push({...item, quantity: cant});
    } else {
      const updatedItem = {...updatedItems[index]};
      updatedItem.quantity += cant;
      updatedItems[index] = updatedItem;
    }
    setItems(updatedItems);
  };

  const removeItem = (itemToRemove) => {
    const updatedItems = [...items];
    const index = isInCart(itemToRemove);
    const updatedItem = {...updatedItems[index]};
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedItems.splice(index, 1);
    } else {
      updatedItems[index] = updatedItem;
    }
    setItems(updatedItems);
  };

  /**
   * Función para hallar el índice de un item en el arreglo de items
   * @param {*} newItem 
   * @returns {int}
   */
  const isInCart = (newItem) => {
    const itemFinded = items.find((i) => i.id === newItem.id);
    return items.indexOf(itemFinded);
  };

  const clearCart = () => {
    setItems([]);
    setTotalPrice(0);
    setTotalQantity(0);
  };

  console.log(items, totalPrice, totalQuantity);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, totalPrice, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
