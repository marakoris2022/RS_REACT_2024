import { render, screen } from '@testing-library/react';
import { Dialog } from '../components/dialog/Dialog';
import { closeDialog, openDialog } from '../components/dialog/dialogStore';
import { DialogType } from '../interface/interface';
import React, { act } from 'react';

test('render test', () => {
  render(<Dialog />);

  act(() => {
    openDialog(<p>TestDialog</p>, DialogType.INFO);
    closeDialog();

    const linkElement = screen.getByText(/Close/i);

    expect(linkElement).toBeInTheDocument();
  });
});
