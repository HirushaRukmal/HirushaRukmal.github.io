import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders portfolio hero content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /hirusha rukmal/i })).toBeInTheDocument();
});
