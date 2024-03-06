import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from '@/components/Logo';

describe('Logo component', () => {
  test('renders logo with correct alt text', () => {
    const { getByAltText } = render(<Logo />);
    const logo = getByAltText('Marvel logo');
    expect(logo).toBeInTheDocument();
  });
});
