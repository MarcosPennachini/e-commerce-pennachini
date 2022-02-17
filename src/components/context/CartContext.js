import { createContext } from "react";

export const CartContext = createContext();

// const INITIAL_STATE = {
//     items: [],
//     totalQuantity: 0,
//     totalPrice: 0
// }

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [totalQuantity, setTotalQantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (item, cant) => {
        const index = isAdded(item);
        if (index > -1) {
            let updatedITems = [...items];
            updatedITems[index].quantity += cant;
        } else {
            const newItem = {...item, quantity: cant};
            setItems(...items, newItem);
        }
    }

    const isAdded = (newItem) => {
        const itemFinded = items.find((i) => i.id === newItem.id);
        return items.indexOf(itemFinded);
    }

    /** Get total cart quantity */
    const getTotalPrice = () => {
        totalPrice.map((item) => setTotalPrice(totalPrice + item.price));
        return totalPrice;
    }

    /** Get total cart price */
    const getTotalQuantity = () => {
        totalQuantity.map((item) => setTotalQantity(totalQuantity + item.quantity));
        return totalQuantity;
    }

    return(
        <CartContext.Provider value={}>
            {children}
        </CartContext.Provider>
    );
}