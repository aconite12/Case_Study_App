import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import logo from './logo/brand logo/logo.png';
import HomePage from './Components/HomePage';
import Product from "./Components/ProductPage";
import MyCart from './Components/MyCart';
import ViewCart from './Components/ViewCart';
import ShippingDetails from './Components/ShippingDetails';
import OrderReview from './Components/OrderReview';
import ConfirmationPage from './Components/ConfirmationPage';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products/');
      const data = await response.json();
      if (data.status === 200) {
        setProducts(data.data);
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }   

  useEffect(() => {
    fetchProducts();
  }, []);

  const [addedItems, setAddedItems] = useState([]); 
  const [numOfItems, setNumOfItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const handleAddToCart = (product) => {
    const price = parseFloat(product.price);
    setAddedItems([...addedItems, product]);
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

  const handleClearCart = () => {
    setAddedItems([]); 
    setNumOfItems(0); 
    setSubTotal(0); 
   
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
            path="/ViewCart" 
            element={
              <div>
                <MyCart numOfItems={numOfItems} subTotal={subTotal}/>
                <ViewCart onAddToCart={addedItems} handleDelete={handleDelete} handleClearCart={handleClearCart}/>
              </div>
          } 
          />
          {/* <Route path="/ShippingDetails" element={<ShippingDetails onNext={handleShippingDetailsSubmit}/>} />
          <Route path="/OrderReview" element={<OrderReview {...generateProps()}/>} /> */}
          <Route path="/ConfirmationPage" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
