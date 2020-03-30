import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ListContainer from './components/ListContainer';
import Card from './components/Card'

import { render } from '@testing-library/react';

test('Testing to see if tests work', () => {
  const { getByText } = render(<App />);
  getByText(/oi!/i);

})

test('App is displaying', () => {
  const { getByTestId } = render(<App />)
  getByTestId(`App`)
})






test('List Container is displaying', () => {
  const { getByTestId } = render(<ListContainer />)
  getByTestId(`List-Header`)
})

test('Contains the word "list"', async () => {
  const { getByText } = render(<ListContainer />);
  getByText(/list/i);
});



test('Card is displaying', () => {
  const { getByTestId } = render(<Card />)
  getByTestId(`Card`)
})

test('Contains the name "lucy"', () => {
  const { getByText } = render(<Card />);
  getByText(/lucy/i);
});

