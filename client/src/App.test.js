import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ListContainer from './components/ListContainer';

import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders LIST', async () => {
  // Arrange
  const { getByText } = render(<ListContainer />, h1);
  // Act
  const greeting = getByText(/list container/i);
  // Assert
  expect(greeting).toBeInTheDocument();
});

test('renders word "list"', () => {
  const { getByText } = render(<App />);
  const header = getByText(/list/i);
  expect(header).toBeInTheDocument();
});



