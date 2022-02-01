import { render, screen } from '@testing-library/react';
import App from './App';

test('checks if information button exists', () => {
  render(<App />);
  const informationButtonElement = screen.getByText(/INFORMATION/i);

  expect(informationButtonElement).toBeInTheDocument();
});
