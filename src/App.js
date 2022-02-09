import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route
            path='/category/:id'
            element={<ItemListContainer greeting='Tu mayor store de Funkos en un solo lugar' />}
          />
          <Route path='/' element={<ItemListContainer greeting='Tu mayor store de Funkos en un solo lugar' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
