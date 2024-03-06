import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import FavoritesProvider from '@/state/favorites/Provider';
import { getCharacter, getCharacterComics } from '@/api';
import Page from '@/app/[id]/page';

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: '123' }),
}));

// Mocking API functions for testing
jest.mock('@/api', () => ({
  getCharacter: jest.fn().mockResolvedValue({
    1: {
      id: 1,
      name: 'Spider-Man',
      description: 'Your friendly neighborhood Spider-Man!',
      imagePath: '/spiderman',
      imageExtension: 'jpg',
    },
  }),
  getCharacterComics: jest.fn().mockResolvedValue([
    {
      id: 1,
      title: 'Amazing Spider-Man #1',
      image: '/comic1.jpg',
    },
    {
      id: 2,
      title: 'Amazing Spider-Man #2',
      image: '/comic2.jpg',
    },
  ]),
}));
jest.mock('@/utils/getServerSideQueryParams', () =>
  jest.fn().mockReturnValue({})
);

describe('Page Component', () => {
  test('renders banner and comic carousel', async () => {
    const { getByText, getByAltText } = render(
      <FavoritesProvider initialState={{}}>
        {await Page({ params: { id: 1 } })}
      </FavoritesProvider>
    );

    await waitFor(() => {
      const bannerName = getByText('Spider-Man');
      expect(bannerName).toBeInTheDocument();

      const bannerDescription = getByText(
        'Your friendly neighborhood Spider-Man!'
      );
      expect(bannerDescription).toBeInTheDocument();

      const bannerImage = getByAltText('Spider-Man');
      expect(bannerImage).toBeInTheDocument();

      const comic1 = getByText('Amazing Spider-Man #1');
      expect(comic1).toBeInTheDocument();

      const comic2 = getByText('Amazing Spider-Man #2');
      expect(comic2).toBeInTheDocument();
    });
  });

  test('calls API functions with correct arguments', async () => {
    render(
      <FavoritesProvider initialState={{}}>
        {await Page({ params: { id: 1 } })}
      </FavoritesProvider>
    );

    expect(getCharacter).toHaveBeenCalledWith(1, {});
    expect(getCharacterComics).toHaveBeenCalledWith(1, {});
  });
});
