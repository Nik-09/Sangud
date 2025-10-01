import React from 'react';
import './Navbar.css';

function Navbar({ cartCount, onCartClick, onHomeClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={onHomeClick}>
          <h1>SANGUD</h1>
        </div>
        <div className="navbar-cart" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
