import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Dialog } from '../components/dialog/Dialog';
import { closeDialog, openDialog } from '../components/dialog/dialogStore';
import { DialogType } from '../interface/interface';

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
