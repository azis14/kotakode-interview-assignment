import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';
import { act } from 'react-dom/test-utils';

test('Renders Todo List Correctly', () => {
  const { getByText } = render(<TodoList tasks={["masak ikan", "minum air"]} />);
  let linkElement = getByText(/masak ikan/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = getByText(/minum air/i);
  expect(linkElement).toBeInTheDocument();
});
