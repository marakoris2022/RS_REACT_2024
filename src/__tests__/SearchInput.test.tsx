import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchInput } from '../components/input/SearchInput';
import { firstLetterUppercase } from '../utils/utils';
import { getSearchValue } from '../components/input/searchInputStore';

test('render test', () => {
  render(
    <BrowserRouter>
      <SearchInput placeholder="Test Search..." onKeyDown={() => {}} />
    </BrowserRouter>
  );
  const linkElement = screen.getByPlaceholderText('Test Search...');
  expect(linkElement).toBeInTheDocument();
});

test('function test', () => {
  render(
    <BrowserRouter>
      <SearchInput placeholder="Test Search..." onKeyDown={() => {}} />
    </BrowserRouter>
  );

  const inputElement = screen.getByPlaceholderText('Test Search...');

  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
});

test('getSearchValue function test', () => {
  render(
    <BrowserRouter>
      <SearchInput placeholder="Test Search..." onKeyDown={() => {}} />
    </BrowserRouter>
  );

  let value = getSearchValue();
  expect(value).toEqual('');

  const testText = firstLetterUppercase('Test input');

  const inputElement = screen.getByPlaceholderText('Test Search...');
  fireEvent.change(inputElement, { target: { value: testText } });

  value = getSearchValue();
  expect(value).toEqual('testinput');
});
