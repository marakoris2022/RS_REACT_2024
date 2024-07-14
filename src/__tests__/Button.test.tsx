import { render, screen } from '@testing-library/react';
import { Button, ButtonType } from '../components/button/Button';

test('render test', () => {
  render(
    <Button title="testBtn" onClick={() => {}} btnType={ButtonType.GREEN} />
  );
  const linkElement = screen.getByText(/testBtn/i);
  expect(linkElement).toBeInTheDocument();
});
