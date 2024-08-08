import { act, render, screen } from '@testing-library/react';
import { DownloadButton } from '../components/inventory/download-button/DownloadButton';
import React from 'react';
import Layout from '../components/layout/layout';

beforeAll(() => {
  global.URL.createObjectURL = function () {
    return 'blob:mock';
  };
});

test('render test', () => {
  render(
    <Layout>
      <DownloadButton />
    </Layout>
  );
  act(() => {
    const linkElement = screen.getAllByText(/Download/i);
    linkElement[0].click();
    expect(linkElement[0]).toBeInTheDocument();
  });
});
