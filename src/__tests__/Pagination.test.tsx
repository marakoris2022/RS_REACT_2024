import { render, screen, act } from '@testing-library/react';
import { Pagination } from '../components/pagination/Pagination';
import Layout from '../components/layout/layout';
import React from 'react';

function TestComponent() {
  return <Pagination totalPokes={100} />;
}

test('render test', () => {
  render(
    <Layout>
      <TestComponent />
    </Layout>
  );
  const linkElement = screen.getByText(/Pokes found/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/100/i);
  expect(linkElement2).toBeInTheDocument();
});

test('handlePageClick function is called correctly', async () => {
  // Render the Pagination component
  render(
    <Layout>
      <TestComponent />
    </Layout>
  );

  // Find and click the 'Next' and 'Prev' buttons
  const nextButton = screen.getByText(/Next/i);
  const prevButton = screen.getByText(/Prev/i);

  // Use act to wrap the state updates
  act(() => {
    nextButton.click();
    prevButton.click();
  });

  const pageInfoContainer = screen.getByText(/2 \/ 10/i);
  expect(pageInfoContainer).toBeInTheDocument();
});
