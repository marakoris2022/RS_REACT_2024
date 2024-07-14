import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom'; // Import the appropriate router

test('render test', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Search request/i);
  expect(linkElement).toBeInTheDocument();
});
