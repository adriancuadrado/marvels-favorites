import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heart from '@/components/Heart';
import { EMPTY, FULL } from '@/components/Heart/constants';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, priority, fill, ...props }) => {
    return <img src={src.src} {...props} />;
  },
}));

describe('Heart component', () => {
  test('renders heart icon with default type', () => {
    const { getByAltText } = render(<Heart />);
    const heartIcon = getByAltText('Heart icon');
    expect(heartIcon).toBeInTheDocument();
    expect(heartIcon).toHaveAttribute('src', FULL.src);
  });

  test('renders heart icon with specified type', () => {
    const { getByAltText } = render(<Heart type={EMPTY} />);
    const heartIcon = getByAltText('Heart icon');
    expect(heartIcon).toBeInTheDocument();
    expect(heartIcon).toHaveAttribute('src', EMPTY.src);
  });

  test('calls onClick when heart icon is clicked', () => {
    const onClick = jest.fn();
    const { getByAltText } = render(<Heart onClick={onClick} />);
    const heartIcon = getByAltText('Heart icon');
    fireEvent.click(heartIcon);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('changes image source on mouse enter and leave events', () => {
    const { getByAltText } = render(<Heart />);
    const heartIcon = getByAltText('Heart icon');
    fireEvent.mouseEnter(heartIcon);
    expect(heartIcon).toHaveAttribute('src', FULL.src);
    fireEvent.mouseLeave(heartIcon);
    expect(heartIcon).toHaveAttribute('src', FULL.src);
  });
});
