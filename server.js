const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (Replace <your_mongo_uri> with your real MongoDB URI)
mongoose.connect('your_mongodb_uri_here');

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: 'Product added' });
});

app.listen(5000, () => console.log('Backend running on port 5000'));