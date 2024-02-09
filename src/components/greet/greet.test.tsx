/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */
// it || test
// fit - only it || test.only
// xit - skip it || test.skip
// greet.test.tsx || greet.spec.tsx || __tests__ / greet-test-file.tsx
// code coverage
// https://jestjs.io/docs/using-matchers
// https://github.com/testing-library/jest-dom

import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});
