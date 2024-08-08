import { render, screen } from '@testing-library/react';
import { Loading } from '../components/loading/Loading';
import React from 'react';

test('render test', () => {
  render(<Loading />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
