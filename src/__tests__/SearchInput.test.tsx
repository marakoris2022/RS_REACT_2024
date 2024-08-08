import { fireEvent, render, screen } from '@testing-library/react';
import { SearchInput } from '../components/input/SearchInput';
import React from 'react';
import Layout from '../components/layout/layout';

test('render test', () => {
  render(
    <Layout>
      <SearchInput placeholder="Test Search..." onKeyDown={() => {}} />
    </Layout>
  );
  const linkElement = screen.getByPlaceholderText('Test Search...');
  expect(linkElement).toBeInTheDocument();
});

test('function test', () => {
  render(
    <Layout>
      <SearchInput placeholder="Test Search..." onKeyDown={() => {}} />
    </Layout>
  );

  const inputElement = screen.getByPlaceholderText('Test Search...');

  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
});
