import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Inventory } from '../components/inventory/Inventory';

beforeAll(() => {
  global.URL.createObjectURL = function () {
    return 'blob:mock';
  };
});

test('render test', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Inventory />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Download/i);
  linkElement.click();
  expect(linkElement).toBeInTheDocument();
});
