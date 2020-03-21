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
  const { getByText } = render(<ListContainer />);
  getByText(/list container/i);
});

test('renders word "list"', () => {
  const { getByText } = render(<App />);
  getByText(/list/i);
});

test('NEW TEST', () => {
  const { getByText } = render(<App />);
  getByText(/oi!/i);

})


