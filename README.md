# Sangud E-Commerce Website

A responsive e-commerce website template for selling Sangud Moisturizer Cream. Built with React, this template provides a complete shopping experience from product browsing to checkout.

## Features

- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🛒 **Shopping Cart** - Add products to cart, update quantities, and remove items
- 💳 **Checkout Flow** - Complete shipping address form and payment method selection
- 🖼️ **Image Gallery** - Product images with navigation and thumbnails
- ✨ **Modern UI** - Clean, professional design with smooth transitions
- 🎨 **Easy Customization** - Simple to update products, images, and styling

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

Build the app for production:

```bash
npm run build
```

### Test

Run tests:

```bash
npm test
```

## Customization Guide

### Updating Product Information

Edit `src/data/product.js` to customize the product details:

```javascript
export const product = {
  id: 1,
  name: "Your Product Name",
  price: 29.99,
  description: "Your product description",
  features: [
    "Feature 1",
    "Feature 2",
    // Add more features
  ],
  images: [
    "url-to-image-1",
    "url-to-image-2",
    "url-to-image-3"
  ],
  inStock: true
};
```

### Changing Product Images

Replace the placeholder image URLs in `src/data/product.js` with your own product images:

1. Add your images to the `public` folder
2. Update the `images` array with paths like `/your-image.jpg`

### Customizing Colors and Branding

The main brand color is defined in multiple CSS files. To change the primary green color (#4CAF50):

1. **Navbar**: Edit `src/components/Navbar.css`
2. **Product Page**: Edit `src/pages/ProductPage.css`
3. **Cart Page**: Edit `src/pages/CartPage.css`
4. **Checkout Page**: Edit `src/pages/CheckoutPage.css`
5. **Success Page**: Edit `src/pages/SuccessPage.css`

Search for `#4CAF50` and replace with your brand color.

### Updating Site Metadata

Edit `public/index.html` to update:
- Page title
- Meta description
- Theme color
- Favicon

### Payment Gateway Integration

The checkout page includes a placeholder for payment gateway integration. To add a real payment gateway:

1. Install the payment provider's SDK (e.g., Stripe, PayPal)
2. Update `src/pages/CheckoutPage.js` to integrate the payment provider
3. Add necessary API keys and configuration

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar with cart count
│   └── Navbar.css
├── pages/              # Page components
│   ├── ProductPage.js  # Product display with image gallery
│   ├── CartPage.js     # Shopping cart
│   ├── CheckoutPage.js # Checkout form
│   └── SuccessPage.js  # Order confirmation
├── data/
│   └── product.js      # Product data
├── App.js              # Main app component with routing logic
├── App.css             # Global app styles
└── index.js            # App entry point
```

## Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add user authentication
- Integrate real payment gateway (Stripe, PayPal, etc.)
- Add multiple products support
- Implement order tracking
- Add product reviews and ratings
- Email confirmation system
- Admin panel for product management

## License

This project is open source and available for customization.

## Support

For questions or issues, please open an issue in the repository.

