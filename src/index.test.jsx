import React from 'react';
import { render } from '@testing-library/react';
import ComponentToTest from '.';

it('renders the component', () => {
  const { queryByTestId } = render(<ComponentToTest />);
  console.log(1);
  expect(queryByTestId('a-test-id')).toBeTruthy();
});
