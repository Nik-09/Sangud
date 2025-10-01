import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  const [currentPage, setCurrentPage] = useState('product');
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleAddToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
    
    setCurrentPage('cart');
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(id);
      return;
    }
    
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handlePlaceOrder = (details) => {
    setOrderDetails(details);
    setCurrentPage('success');
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="App">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCurrentPage('cart')}
        onHomeClick={() => setCurrentPage('product')}
      />
      
      {currentPage === 'product' && (
        <ProductPage onAddToCart={handleAddToCart} />
      )}
      
      {currentPage === 'cart' && (
        <CartPage
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onProceedToCheckout={() => setCurrentPage('checkout')}
          onContinueShopping={() => setCurrentPage('product')}
        />
      )}
      
      {currentPage === 'checkout' && (
        <CheckoutPage
          cart={cart}
          onPlaceOrder={handlePlaceOrder}
          onBackToCart={() => setCurrentPage('cart')}
        />
      )}
      
      {currentPage === 'success' && orderDetails && (
        <SuccessPage
          orderDetails={orderDetails}
          onBackToHome={() => setCurrentPage('product')}
        />
      )}
    </div>
  );
}

export default App;
