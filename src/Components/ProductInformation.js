import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductInformation = ({ name, price, description }) => {
  
    return <div>
        <p><b>{name}</b></p>
        <p>Price: ₱{price}</p>
        <p>{description}</p>
    </div>
    
}
export default ProductInformation;