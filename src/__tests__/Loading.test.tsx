import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Loading } from '../components/loading/Loading';

test('render test', () => {
  render(
    <BrowserRouter>
      <Loading />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
