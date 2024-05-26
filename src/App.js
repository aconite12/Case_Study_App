import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo/brand logo/logo.png';
import HomePage from './Components/HomePage';
import AdminHomePage from './Components/AdminHomePage';
import Product from "./Components/ProductPage";
import MyCart from './Components/MyCart';
import ViewCart from './Components/ViewCart';
import ShippingDetails from './Components/ShippingDetails';
import OrderReview from './Components/OrderReview';
import ConfirmationPage from './Components/ConfirmationPage';
import './App.css';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import AddProduct from './Components/AddProductPage';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [numOfItems, setNumOfItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products');
      const data = await response.json();
      if (data.status === 200) {
        setProducts(data.data);
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cart');
      const data = await response.json();
      if (response.status === 200) {
        setCartItems(data.cartItems);
        const totalItems = data.cartItems.length;
        const totalPrice = data.cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setNumOfItems(totalItems);
        setSubTotal(totalPrice);
      } else {
        throw new Error('Failed to fetch cart items');
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCartItems();
  }, []);

  const handleDelete = async (itemId) => {
    try {
      console.log('Deleting item with ID:', itemId);
  
      const response = await fetch(`http://127.0.0.1:8000/api/cart/${itemId}`, {
        method: 'DELETE',
      });
  
      console.log('Delete response:', response);
  
      if (!response.ok) {
        throw new Error('Failed to delete item from cart');
      }
  
      const updatedItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedItems);
  
      fetchCartItems();
    } catch (error) {
      console.error('Error deleting item from cart:', error);
    }
  };




  const handleAdminDelete = async (itemId) => {
    try {
      console.log('Deleting item with ID:', itemId);
  
      const response = await fetch(`http://127.0.0.1:8000/api/products/${itemId}`, {
        method: 'DELETE',
      });
  
      console.log('Delete response:', response);
  
      if (!response.ok) {
        throw new Error('Failed to delete item from Products');
      }
  
      const updatedItems = products.filter(item => item.id !== itemId);
      setProducts(updatedItems);
  
      fetchProducts();
    } catch (error) {
      console.error('Error deleting item from Product:', error);
    }
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
            path="/HomePage" 
            element={
              <div>
                <HomePage />
              </div>
            } 
          />
          <Route 
            path="/AdminHomePage" 
            element={
              <div>
                <AdminHomePage products={products} handleAdminDelete={handleAdminDelete} />
              </div>
            } 
          />
           <Route
           exact
            path="/"
            element={
              <div>
                <LoginPage/>
              </div>
            }
          />
           <Route
            path="/RegisterPage"
            element={
              <div>
                <RegisterPage/>
              </div>
            }
          />

          <Route
            path="/ProductPage"
            element={
              <div>
                <Product products={products} onAddToCart={fetchCartItems} />
              </div>
            }
          />

          <Route
            path="/AddProductPage"
            element={
              <div>
                <AddProduct/>
              </div>
            }
          />
          <Route
            path="/UpdateProduct/:productId"
            element={
              <div>
                <UpdateProduct/>
              </div>
            }
          />

          <Route
            path="/ViewCart" 
            element={
              <div>
                <MyCart numOfItems={numOfItems} subTotal={subTotal} />
                {cartItems ? 
                  <ViewCart cartItems={cartItems} handleDelete={handleDelete} />
                  : 
                  <p>Loading cart items...</p>
                }
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
