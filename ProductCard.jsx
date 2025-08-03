import React from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10, width: 200 }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;