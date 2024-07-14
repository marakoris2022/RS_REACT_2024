import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '../components/error-boundarie/ErrorBoundarie';
import { render, screen } from '@testing-library/react';

const ChildComponent = () => {
  const someCondition = 'best test';
  if (someCondition) {
    throw new Error('Test error');
  }

  return <div>Normal rendering</div>; // Ensure to return something when no error
};

test('render test', () => {
  render(
    <BrowserRouter>
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    </BrowserRouter>
  );

  // Check for the presence of error message when error occurs
  const errorMessage = screen.getByText(/Error Boundaries Implementation/i);
  expect(errorMessage).toBeInTheDocument();
});
