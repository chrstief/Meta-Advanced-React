import { render, screen } from '@testing-library/react';
import Header from './components/Header.js';

test('project link should exist', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});

