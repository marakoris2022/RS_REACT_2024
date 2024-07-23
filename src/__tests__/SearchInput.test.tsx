import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchInput } from '../components/input/SearchInput';
import { firstLetterUppercase } from '../utils/utils';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from '../store/store';
import React from 'react';

test('render test', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <SearchInput placeholder="Test Search..." onKeyDown={() => {}} />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByPlaceholderText('Test Search...');
  expect(linkElement).toBeInTheDocument();
});

test('function test', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <SearchInput placeholder="Test Search..." onKeyDown={() => {}} />
      </Provider>
    </BrowserRouter>
  );

  const inputElement = screen.getByPlaceholderText('Test Search...');

  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
});

const TestComponent = () => {
  const value = useSelector((state: RootState) => state.core.searchValue);
  return <div data-testid="search-value">{value}</div>;
};

test('getSearchValue function test', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <>
          <SearchInput placeholder="Test Search..." onKeyDown={() => {}} />
          <TestComponent />
        </>
      </Provider>
    </BrowserRouter>
  );

  const searchValueElement = screen.getByTestId('search-value');
  expect(searchValueElement.textContent).toEqual('');

  const testText = firstLetterUppercase('Test input');

  const inputElement = screen.getByPlaceholderText('Test Search...');
  fireEvent.change(inputElement, { target: { value: testText } });

  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

  expect(searchValueElement.textContent).toEqual('testinput');
});
