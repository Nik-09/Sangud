import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product page', () => {
  render(<App />);
  const productName = screen.getByText(/Sangud Moisturizer Cream/i);
  expect(productName).toBeInTheDocument();
});
