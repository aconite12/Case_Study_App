import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const handleUpdateProduct = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/products/adminUpdateItem/${productId}`, {
                method: 'PUT',
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
                console.log('Product updated:', data);
            } else {
                throw new Error('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h2>Update Product</h2>
            <div>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </div>
            <div>
                <button className='btn btn-success' onClick={handleUpdateProduct}>Update Product</button>
            </div>
        </div>
    );
};

export default UpdateProduct;
