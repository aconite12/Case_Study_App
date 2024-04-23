import React from 'react';
import {Link} from "react-router-dom";
import ProductInformation from './ProductInformation';
import ButtonComponent from './ButtonComponent';

const Product = ({ products, onAddToCart }) => {
  return (
    <div className='Product'>
      <div className="grid-container">
        {products.map((product, index) => (
          <div className="container">
            <div key={index} className="card">
              <div className="card-body">
                <ProductInformation {...product} />
                <ButtonComponent
                  className='btn btn-primary'
                  buttonName='Add To Cart'
                  onClickFunction={() => onAddToCart(product)}
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
