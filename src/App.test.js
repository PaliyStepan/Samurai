import React from 'react';
import ReactDom from 'react-dom'
import { render } from '@testing-library/react';
import MainApp from './App';

/*
test('renders learn react link', () => {
  const { getByText } = render(<MainApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<MainApp />, div);
  ReactDom.unmountComponentAtNode(div);

});
