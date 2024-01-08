// MiComponente.test.js
import React from 'react';
import { render } from '@testing-library/react';
import MiComponente from './Prueba1';

test('renders correctly', () => {
  const { getByText } = render(<MiComponente nombre="John" />);
  const element = getByText('Hola, John!');
  expect(element).toBeInTheDocument();
});
