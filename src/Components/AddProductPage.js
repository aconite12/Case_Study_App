import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const handleAddProduct = async () => {
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/products/adminAddItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName,
                    price,
                    productDescription,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Product added successfully', data);
                window.location.href = '/AdminHomePage';
                // You can redirect the user or show a success message here
            } else {
                console.error('Failed to add product', response.statusText);
                // Handle error scenario here
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
    return (
        <div>
            <div>
                <h2>Add Product</h2>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)} 
                />
                <input
                    type="Number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <input
                    type="Text"
                    placeholder="Description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </div>
            <div>
               <button className='btn btn-success' onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default AddProduct;
