import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [form, setForm] = useState({});

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    axios.post('https://your-backend-url/api/products', form)
      .then(() => alert('Product added'))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="image" placeholder="Image URL" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <input name="rating" placeholder="Rating" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="subcategory" placeholder="Subcategory" onChange={handleChange} />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default Admin;