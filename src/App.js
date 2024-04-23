import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import logo from './logo/brand logo/logo.png';
import HomePage from './Components/HomePage';
import Product from "./Components/ProductPage";
import MyCart from './Components/MyCart';
function App() {
  const [productsAddedToCart, setProducts] = useState(productsData);
  const [addedItems, setAddedItems] = useState([]); // Track added items
  const [numOfItems, setNumOfItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const handleAddToCart = (product) => {
    const price = parseFloat(product.price);
    setAddedItems([...addedItems, product]); // Add item to addedItems array
    setNumOfItems(numOfItems + 1);
    setSubTotal(subTotal + price);
  };
  
  const handleDelete = (index) => {
    const updatedItems = [...addedItems];
    updatedItems.splice(index, 1);
    setAddedItems(updatedItems);
    setNumOfItems(numOfItems - 1);
    setSubTotal(subTotal - parseFloat(addedItems[index].price));
  };

  return (
    <BrowserRouter>
      <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href='/'>
              <img src={logo} alt="Brand Logo" width="40" height="40" className="d-inline-block align-top" /> SwiftBuy
            </a>
          </div>
        </nav>
      </header>
        <Routes>
          <Route 
          exact path="/" 
          element={
          <div>
            <HomePage/>
          </div>
          } />
          <Route

            path="/ProductPage"
            element={

              <div>
                <Product products={products} onAddToCart={handleAddToCart} />
              </div>
            }
          />
          <Route
            path="/ViewCart" // Corrected path to match ViewCart component
            element={
              <div>
                <MyCart numOfItems={numOfItems} subTotal={subTotal}/>
                <ViewCart addedItems={addedItems} handleDelete={handleDelete}/>
              </div>
          } 
          />
        </Routes>
      </div>
    </BrowserRouter>

);
}
const productsData = [];

const products = [
  { name: 'Biogesic', price: '3', description: 'Kapitbahay' },
  { name: 'Diatabs', price: '8', description: 'Ignacio' },
  { name: 'Tiki tiki', price: '2', description: 'Galang' },
  { name: 'Celine', price: '12', description: 'Lagmay' },
  { name: 'Bioflu', price: '33', description: 'Larracas' },
  { name: 'Alaxan', price: '3', description: 'Ferrer' },
  { name: 'Solmux', price: '12', description: '123123' },
  { name: 'Robitussin', price: '13', description: 'qwerqwer' },
  { name: 'Advil', price: '12', description: 'Alcen' },
  { name: 'Aspirin', price: '20', description: 'Kapitbahay' }
];

export default App;