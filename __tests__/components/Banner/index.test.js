import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesContext from '@/state/favorites/Context';
import Banner from '@/components/Banner';
import heartImage from '@/components/Heart/empty-heart.svg';

// Mocking useParams hook
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: '123' }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, priority, fill, ...props }) => {
    return <img src={src.src} {...props} />;
  },
}));

describe('Banner component', () => {
  test('renders banner with correct image, name, and description', () => {
    const image = '/image-url.jpg';
    const name = 'Test Name';
    const description = 'Test Description';

    const { getByAltText, getByText } = render(
      <FavoritesContext.Provider
        value={{
          favorites: { 123: { id: '123' } },
          addFavorite: jest.fn(),
          removeFavorite: jest.fn(),
        }}
      >
        <Banner image={image} name={name} description={description} />
      </FavoritesContext.Provider>
    );

    expect(getByAltText(name)).toBeInTheDocument();
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  test('renders favorite button as empty heart when item is not favorite', () => {
    const image = '/image-url.jpg';
    const name = 'Test Name';
    const description = 'Test Description';

    const { getByTestId } = render(
      <FavoritesContext.Provider
        value={{
          favorites: {},
          addFavorite: jest.fn(),
          removeFavorite: jest.fn(),
        }}
      >
        <Banner image={image} name={name} description={description} />
      </FavoritesContext.Provider>
    );

    const heartButton = getByTestId('heart-button');
    expect(heartButton).toHaveAttribute('src', heartImage.src.src);
  });

  test('renders favorite button as full heart when item is favorite', () => {
    const image = '/image-url.jpg';
    const name = 'Test Name';
    const description = 'Test Description';

    const { getByTestId } = render(
      <FavoritesContext.Provider
        value={{
          favorites: { 123: { id: '123' } },
          addFavorite: jest.fn(),
          removeFavorite: jest.fn(),
        }}
      >
        <Banner image={image} name={name} description={description} />
      </FavoritesContext.Provider>
    );

    const heartButton = getByTestId('heart-button');
    expect(heartButton).toHaveAttribute('src', heartImage.src.src);
  });

  test('calls addFavorite when clicking on empty heart', () => {
    const image = '/image-url.jpg';
    const name = 'Test Name';
    const description = 'Test Description';
    const addFavorite = jest.fn();

    const { getByTestId } = render(
      <FavoritesContext.Provider
        value={{ favorites: {}, addFavorite, removeFavorite: jest.fn() }}
      >
        <Banner image={image} name={name} description={description} />
      </FavoritesContext.Provider>
    );

    const heartButton = getByTestId('heart-button');
    fireEvent.click(heartButton);

    expect(addFavorite).toHaveBeenCalledWith('123', {
      image,
      name,
      description,
    });
  });

  test('calls removeFavorite when clicking on full heart', () => {
    const image = '/image-url.jpg';
    const name = 'Test Name';
    const description = 'Test Description';
    const removeFavorite = jest.fn();

    const { getByTestId } = render(
      <FavoritesContext.Provider
        value={{
          favorites: { 123: { id: '123' } },
          addFavorite: jest.fn(),
          removeFavorite,
        }}
      >
        <Banner image={image} name={name} description={description} />
      </FavoritesContext.Provider>
    );

    const heartButton = getByTestId('heart-button');
    fireEvent.click(heartButton);

    expect(removeFavorite).toHaveBeenCalledWith('123');
  });
});
