import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import CartDetail from './components/CartDetail';


function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route
            path='/category/:id'
            element={<ItemListContainer greeting='Tu mayor store de Funkos en un solo lugar' category={true} />}
          />
          <Route path='/cart' element={<CartDetail />} />
          <Route path='/' element={<ItemListContainer greeting='Tu mayor store de Funkos en un solo lugar' category={false} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
