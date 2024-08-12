import { Outlet, Scripts } from '@remix-run/react';
import './App.css';
import './normalize.css';

export function HydrateFallback() {
  return (
    <>
      <p>Loading...</p>
      <Scripts />
    </>
  );
}

export default function Component() {
  return (
    <>
      <Outlet />
      <Scripts />
    </>
  );
}
