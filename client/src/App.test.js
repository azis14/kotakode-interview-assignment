import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/pekerjaan rumah yang perlu dilakukan/i);
  expect(linkElement).toBeInTheDocument();
});