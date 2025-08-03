import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const categories = {
  Women: ['Tops', 'Jeans', 'Sandals', 'Accessories'],
  Men: ['T-Shirts', 'Pants', 'Shoes', 'Watch'],
  Kids: ['Toys', 'Dress', 'Footwear']
};

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend-url/api/products') // Replace after deployment
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Trendify</h1>
      {Object.entries(categories).map(([category, subs]) => (
        <div key={category}>
          <h2>{category}</h2>
          {subs.map(sub => (
            <div key={sub}>
              <h3>{sub}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.filter(p => p.category === category && p.subcategory === sub)
                         .map(product => <ProductCard key={product._id} product={product} />)}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;