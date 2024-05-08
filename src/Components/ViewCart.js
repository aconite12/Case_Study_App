import React, { useState, useEffect } from 'react';
import ProductInformation from './ProductInformation';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const ViewCart = ({ cartItems, handleDelete, handleClearCart }) => {
  return (
    <div className='Product'>
      <h1 className="cart-title">My Cart</h1>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>No items added to the cart</p>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
