import React, { useState } from 'react';
import { product } from '../data/product';
import './ProductPage.css';

function ProductPage({ onAddToCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <button className="image-nav prev" onClick={handlePrevImage}>❮</button>
            <img src={product.images[currentImageIndex]} alt={product.name} />
            <button className="image-nav next" onClick={handleNextImage}>❯</button>
          </div>
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={index === currentImageIndex ? 'active' : ''}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          
          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="product-features">
            <h3>Key Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button 
              className="add-to-cart-btn" 
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
