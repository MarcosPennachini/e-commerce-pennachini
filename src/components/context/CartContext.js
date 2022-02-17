import { createContext, useState } from 'react';

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

  const addItem = (item, cant) => {
    const index = isInCart(item);
    if (index > -1) {
      //Si el item ya está en el carrito
      let updatedITems = [...items];
      updatedITems[index].quantity += cant;
      if (updatedITems[index].quantity > updatedITems[index].stock) {
        throw new Error(
          `La cantidad elegida no puede superar el stock (${updatedITems[index].stock})`
        );
      } else {
        setItems(updatedITems);
      }
    } else {
      //Si el item no está en el carrito
      const newItem = {...item};
      newItem.quantity = cant;
    //   console.log(newItem);
      setItems(...items, newItem);
    }
  };

  const removeItem = (itemToRemove) => {
    const filteredItems = items.filter((item) => item.id !== itemToRemove.id);
    setItems(filteredItems);
  };

  const isInCart = (newItem) => {
    const itemFinded = items.filter((i) => i.id === newItem.id);
    return items.indexOf(itemFinded);
  };

  const clearCart = () => {
    setItems([]);
  };

  /** Get total cart quantity */
  const getTotalPrice = () => {
    totalPrice.map((item) => setTotalPrice(totalPrice + item.price * item.quantity));
    return totalPrice;
  };

  /** Get total cart price */
  const getTotalQuantity = () => {
    totalQuantity.map((item) => setTotalQantity(totalQuantity + item.quantity));
    return totalQuantity;
  };

  console.log(items)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, getTotalPrice, getTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
