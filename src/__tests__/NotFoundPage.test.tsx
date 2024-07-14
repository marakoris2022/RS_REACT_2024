import { render, screen } from '@testing-library/react';
import { NotFoundPage } from '../components/not-found-page/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';

test('render test', () => {
  render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/To Main/i);
  expect(linkElement).toBeInTheDocument();
});
