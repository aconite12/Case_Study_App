import React, { useState } from 'react';

const ShippingDetails = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div>
      <h2>Shipping Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Postal Code" required />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default ShippingDetails;
