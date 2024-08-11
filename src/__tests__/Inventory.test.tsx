import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { Inventory } from '../components/inventory/Inventory';
import Layout from '../components/layout/layout';
import { vitest } from 'vitest';

beforeAll(() => {
  global.URL.createObjectURL = function () {
    return 'blob:mock';
  };
});

vitest.mock('file-saver', () => ({
  saveAs: vitest.fn(),
}));

test('render test', () => {
  render(
    <Layout>
      <Inventory />
    </Layout>
  );
  act(() => {
    const linkElement = screen.getAllByText(/Download/i);
    linkElement[0].click();
    expect(linkElement[0]).toBeInTheDocument();
  });
});
