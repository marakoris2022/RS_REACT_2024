import { render, screen } from '@testing-library/react';
import App from '../../pages';
import { BrowserRouter } from 'react-router-dom'; // Import the appropriate router
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render test', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Search request/i);
  expect(linkElement).toBeInTheDocument();
});
