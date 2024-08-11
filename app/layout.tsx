import React from 'react';
import { GlobalStateProvider } from '../src/store/GlobalStateContext';
import { Dialog } from '../src/components/dialog/Dialog';
import { Inventory } from '../src/components/inventory/Inventory';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStateProvider>
          <Dialog />
          <Inventory />
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
