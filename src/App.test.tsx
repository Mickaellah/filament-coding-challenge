import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

test('renders learn react link', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
