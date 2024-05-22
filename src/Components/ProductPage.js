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
          // productId: product.id,
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

  return (
    <div className='Product'>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="container">
            <div className="card">
              <div className="card-body">

                <ProductInformation productName={product.productName} price={product.price} productDescription={product.productDescription} />

                <ButtonComponent
                  className='btn btn-primary'
                  buttonName='Add To Cart'
                  onClickFunction={() => handleAddToCart(product)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/><br/>
      <div>
        <nav>
          <ul>
          <Link to="/ViewCart"> <ButtonComponent className='btn btn-primary' buttonName={"View Cart"}></ButtonComponent></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Product;
