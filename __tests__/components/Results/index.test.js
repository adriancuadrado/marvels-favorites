import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharactersContext from '@/state/characters/Context';
import FavoritesContext from '@/state/favorites/Context';
import Results from '@/components/Results';

describe('Results component', () => {
  test('renders all characters if favoritesOnly prop is false', () => {
    const characters = {
      1: {
        imagePath: '/path/to/image',
        imageExtension: 'jpg',
        name: 'Character 1',
        description: 'Description 1',
      },
      2: {
        imagePath: '/path/to/image',
        imageExtension: 'jpg',
        name: 'Character 2',
        description: 'Description 2',
      },
    };
    const favorites = {};
    const { getByText } = render(
      <CharactersContext.Provider value={{ characters }}>
        <FavoritesContext.Provider value={{ favorites }}>
          <Results favoritesOnly={false} />
        </FavoritesContext.Provider>
      </CharactersContext.Provider>
    );
    expect(getByText('Character 1')).toBeInTheDocument();
    expect(getByText('Character 2')).toBeInTheDocument();
  });

  test('renders only favorite characters if favoritesOnly prop is true', () => {
    const characters = {
      1: {
        imagePath: '/path/to/image',
        imageExtension: 'jpg',
        name: 'Character 1',
        description: 'Description 1',
      },
      2: {
        imagePath: '/path/to/image',
        imageExtension: 'jpg',
        name: 'Character 2',
        description: 'Description 2',
      },
    };
    const favorites = { 1: { id: '1', name: 'Character 1' } };
    const { getByText, queryByText } = render(
      <CharactersContext.Provider value={{ characters }}>
        <FavoritesContext.Provider value={{ favorites }}>
          <Results favoritesOnly={true} />
        </FavoritesContext.Provider>
      </CharactersContext.Provider>
    );
    expect(getByText('Character 1')).toBeInTheDocument();
    expect(queryByText('Character 2')).toBeNull();
  });
});
