import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Comic from '@/components/Comic';

describe('Comic component', () => {
  test('renders comic with correct title and image', () => {
    const title = 'Test Title';
    const year = '2000';
    const image = '/image-url.jpg';
    const { getByAltText, getByText } = render(
      <Comic title={title} year={year} image={image} />
    );
    expect(getByAltText(title)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(year)).toBeInTheDocument();
  });

  test('does not render year if year is not a number', () => {
    const title = 'Test Title';
    const year = 'Not a year';
    const image = '/image-url.jpg';
    const { queryByText } = render(
      <Comic title={title} year={year} image={image} />
    );
    expect(queryByText(year)).toBeNull();
  });
});
