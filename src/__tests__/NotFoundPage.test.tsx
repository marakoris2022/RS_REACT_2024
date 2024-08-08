import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFoundPage from '../../pages/404';

test('render test', () => {
  render(<NotFoundPage />);
  const linkElement = screen.getByText(/To Main/i);
  expect(linkElement).toBeInTheDocument();
});
