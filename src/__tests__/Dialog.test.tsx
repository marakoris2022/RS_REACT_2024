import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {
  closeDialog,
  Dialog,
  DialogType,
  openDialog,
} from '../components/dialog/Dialog';

test('render test', () => {
  render(
    <BrowserRouter>
      <Dialog />
    </BrowserRouter>
  );

  openDialog(<p>TestDialog</p>, DialogType.INFO);
  closeDialog();

  const linkElement = screen.getByText(/Close/i);

  expect(linkElement).toBeInTheDocument();
});
