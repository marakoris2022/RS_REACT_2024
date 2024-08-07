import { render, screen } from '@testing-library/react';
import { Button } from '../components/button/Button';
import { ButtonType } from '../interface/interface';
import React from 'react';

test('render test', () => {
  render(
    <Button title="testBtn" onClick={() => {}} btnType={ButtonType.GREEN} />
  );
  const linkElement = screen.getByText(/testBtn/i);
  expect(linkElement).toBeInTheDocument();
});
