import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';
import { act } from 'react-dom/test-utils';

test('Renders Todo List Correctly', () => {
  const { getByText } = render(<TodoList tasks={[{id: 0, nama: "masak ikan"}, {id: 1, nama: "minum air"}]} />);
  let linkElement = getByText(/masak ikan/i);
  expect(linkElement).toBeInTheDocument();

  linkElement = getByText(/minum air/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Todo List Correctly', () => {
  const { getByText } = render(<TodoList tasks={[]} />);
  let linkElement = getByText(/no task/i);
  expect(linkElement).toBeInTheDocument();
});