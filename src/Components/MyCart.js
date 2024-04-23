import React from 'react';

const MyCart = ({numOfItems, subTotal}) => {
    
    return (
        <div>
        <br></br>
        <p>Order Summary</p> 
        <span>Total Items: </span> <p className='txtNumOfItems'>{numOfItems}</p>
        <span>Price: PHP </span> <p className='txtSubTotal'>{subTotal}</p>
       
        
        </div>
    );
}

export default MyCart;