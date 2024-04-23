import React from 'react';

import ButtonComponent from './ButtonComponent';
import {Link} from 'react-router-dom';
import ViewCart from './ViewCart';
import { Button } from 'bootstrap';
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