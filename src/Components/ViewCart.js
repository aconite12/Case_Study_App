import React, { useState, useEffect } from 'react';
import ProductInformation from './ProductInformation';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';

const ViewCart = ({ handleDelete, handleClearCart }) => {
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cart');
      const data = await response.json();
      console.log('Cart Items Response:', data);
      if (response.status === 200) {
        setAddedItems(data.cartItems);
      } else {
        throw new Error('Failed to fetch cart items');
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  return (
    <div className='Product'>
      <h1>My Cart</h1>
      {addedItems.length === 0 ? (
        <p>No items added to the cart</p>
      ) : (
        addedItems.map((item, index) => (
          <div key={index}>
            <ul>
              <li key={index}>
                <ProductInformation productName={item.productName} price={item.price} />
                <ButtonComponent className='btn btn-primary btn-danger' buttonName={"Delete Item"} onClickFunction={() => handleDelete(index)} />
              </li>
            </ul>
          </div>
        ))
      )}
      <div>
        <nav>
          <ul>
            <Link to={'/ProductPage'}><ButtonComponent className='btn btn-primary' buttonName={"Check Out"} onClickFunction={handleClearCart} /></Link>
            <br />
            <Link to="/ProductPage"> <ButtonComponent className='btn btn-primary' buttonName={"Product Page"}></ButtonComponent></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ViewCart;
