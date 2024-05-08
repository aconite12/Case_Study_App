import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  const [cartItems, setCartItems] = useState([]);
  const [numOfItems, setNumOfItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

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
  };
