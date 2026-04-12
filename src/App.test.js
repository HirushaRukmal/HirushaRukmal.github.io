import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/hi, i'm hirusha/i);
  expect(headingElement).toBeInTheDocument();
});
