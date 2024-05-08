import React, { useState } from 'react'; // Import useState hook
import {Link} from 'react-router-dom';
import ProductInformation from './ProductInformation';
import ButtonComponent from './ButtonComponent';

const Product = ({ products, onAddToCart }) => {

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: product.productName,
          price: product.price,
          productDescription: product.productDescription
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }
      const data = await response.json();
      console.log('Product added to cart:', data);
  
      setAddedItems(prevItems => [...prevItems, product]);
      onAddToCart();
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  }; 
