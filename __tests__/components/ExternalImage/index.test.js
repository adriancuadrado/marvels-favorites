import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import ExternalImage from '@/components/ExternalImage';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, ...props }) => {
    return <img {...props} />;
  },
}));

describe('ExternalImage component', () => {
  it('renders with correct src and alt attributes', () => {
    const src = 'https://example.com/image.jpg';
    const alt = 'Example Image';
    const { getByAltText } = render(<ExternalImage src={src} alt={alt} />);
    const imageElement = getByAltText(alt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
  });

  it('renders with additional className', () => {
    const src = 'https://example.com/image.jpg';
    const alt = 'Example Image';
    const className = 'custom-class';
    const { container } = render(
      <ExternalImage src={src} alt={alt} className={className} />
    );

    const imageWrapper = container.firstChild;
    expect(imageWrapper).toHaveClass(className);
  });
});
