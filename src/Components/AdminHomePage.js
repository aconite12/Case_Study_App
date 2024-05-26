import React, { useState } from 'react'; // Import useState hook
import {Link} from 'react-router-dom';
import ProductInformation from './ProductInformation';
import ButtonComponent from './ButtonComponent';

const AdminHomePage = ({products, handleAdminDelete}) => {
 
  return (
    <div className='Product'>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="container">
            <div className="card">
              <div className="card-body">

                <ProductInformation productName={product.productName} price={product.price} productDescription={product.productDescription} />
                <div>
                    <ButtonComponent className='btn btn-primary' buttonName={"Edit"} onClickFunction={() => window.location.href = `/UpdateProduct/${product.id}`} />
                    <ButtonComponent className='btn btn-danger' buttonName={"Delete"} onClickFunction={() => handleAdminDelete(product.id)}/>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/><br/>
      <Link to="/AddProductPage" className="btn btn-primary">
                    Add Product
                </Link>
    </div>
  );
};

export default AdminHomePage;
