import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio main heading', () => {
  render(<App />);
  const servicesLink = screen.getByText(/SERVICES/i);
  expect(servicesLink).toBeInTheDocument();
});


