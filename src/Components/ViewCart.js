import React from 'react';
import ProductInformation from './ProductInformation';
import ButtonComponent from './ButtonComponent';
import {Link} from 'react-router-dom';

const ViewCart = ({ addedItems, handleDelete, handleClearCart}) => {
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
              <ProductInformation name={item.name} price={item.price} />
              <ButtonComponent className='btn btn-primary btn-danger' buttonName={"Delete Item"} onClickFunction={() => handleDelete(index)}/>

              </li>
            </ul>
          </div>
        ))
      )}
       <div>
       <nav>
          <ul>
        
        <Link to={'/ProductPage'}><ButtonComponent className='btn btn-primary' buttonName={"Check Out"} onClickFunction={handleClearCart}/></Link>
         <br/>
          <Link to="/ProductPage"> <ButtonComponent className='btn btn-primary' buttonName={"Product Page"}></ButtonComponent></Link>
          </ul>
        </nav>

      </div>
    </div>
    
  );
};

export default ViewCart;