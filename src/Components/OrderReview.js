import React from 'react';

const generateProps = () => {
  // Logic to generate props dynamically
  const items = fetchItemsFromAPI(); // Fetch items from an API
  const shippingDetails = getShippingDetails(); // Get shipping details from state or context
  const onConfirm = () => {}; // Define onConfirm function
  const onEditDetails = () => {}; // Define onEditDetails function

  return {
    items,
    shippingDetails,
    onConfirm,
    onEditDetails
  };
};

const OrderReview = ({ items, shippingDetails, onConfirm, onEditDetails }) => {
  const totalPrice = items.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div>
      <h2>Order Review</h2>
      <h3>Shipping Details</h3>
      <p>Full Name: {shippingDetails.fullName}</p>
      <p>Address: {shippingDetails.address}</p>
      <p>City: {shippingDetails.city}</p>
      <p>Postal Code: {shippingDetails.postalCode}</p>
      <h3>Items</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - ₱{item.price}</li>
        ))}
      </ul>
      <p>Total Price: ₱{totalPrice}</p>
      <button onClick={onConfirm}>Confirm Order</button>
      <button onClick={onEditDetails}>Edit Shipping Details</button>
    </div>
  );
};

export default OrderReview;
