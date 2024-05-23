import React, { useState, useEffect } from 'react';
import ProductInformation from './ProductInformation';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const ViewCart = ({ cartItems, handleDelete}) => {
  return (
    <div className='Product'>
      <h1 className="cart-title">My Cart</h1>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div>
            <p>No items added to the cart</p>

            <Link to="/ProductPage"><ButtonComponent className='btn btn-primary' buttonName={"Product Page"}></ButtonComponent></Link>

          </div>
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
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>
                      <ButtonComponent className='btn btn-primary btn-danger' buttonName={"Delete Item"} onClickFunction={() => handleDelete(item.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/ProductPage"><ButtonComponent className='btn btn-primary' buttonName={"Product Page"}></ButtonComponent></Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
