import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductInformation = ({productName, price, productDescription }) => {
  
    return <div>
        <p><b>{productName}</b></p>
        <p>Price: ₱{price}</p>
        <p>{productDescription}</p>
    </div>
    
}
export default ProductInformation;