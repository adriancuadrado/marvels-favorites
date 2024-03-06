import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComicCarousel from '@/components/ComicCarousel';

describe('ComicCarousel component', () => {
  test('renders carousel with correct number of comics', () => {
    const comics = {
      1: { title: 'Title 1', year: '2000', image: '/image-url-1' },
      2: { title: 'Title 2', year: '2001', image: '/image-url-2' },
      3: { title: 'Title 3', year: '2002', image: '/image-url-3' },
    };

    const { getAllByAltText } = render(<ComicCarousel comics={comics} />);
    const comicImages = getAllByAltText(/Title/); // Assuming all comic titles contain 'Title'
    expect(comicImages).toHaveLength(Object.keys(comics).length);
  });

  test('renders carousel with correct className', () => {
    const comics = {
      1: { title: 'Title 1', year: '2000', image: '/image-url-1' },
    };
    const className = 'custom-class';

    const { container } = render(
      <ComicCarousel comics={comics} className={className} />
    );
    const carousel = container.firstChild;
    expect(carousel).toHaveClass('carousel');
    expect(carousel).toHaveClass(className);
  });
});
