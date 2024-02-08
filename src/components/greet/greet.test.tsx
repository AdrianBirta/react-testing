/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */
import { render, screen } from '@testing-library/react';
import { Greet } from './greet';
import { text } from 'stream/consumers';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name="Birta" />);
  const textElement = screen.getByText('Hello Birta');
  expect(textElement).toBeInTheDocument();
});
