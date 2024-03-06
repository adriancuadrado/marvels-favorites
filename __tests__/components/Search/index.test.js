import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharactersContext from '@/state/characters/Context';
import FavoritesContext from '@/state/favorites/Context';
import { getCharacters } from '@/api';
import Search from '@/components/Search';

// Mocking getCharacters function
jest.mock('@/api', () => ({
  getCharacters: jest.fn(() => Promise.resolve({})),
}));

describe('Search component', () => {
  test('renders search input and results count', () => {
    const characters = {};
    const favorites = {};
    const { getByPlaceholderText, getByText } = render(
      <CharactersContext.Provider
        value={{ characters, setCharacters: jest.fn() }}
      >
        <FavoritesContext.Provider value={{ favorites }}>
          <Search favoritesOnly={false} />
        </FavoritesContext.Provider>
      </CharactersContext.Provider>
    );
    const searchInput = getByPlaceholderText('Search a character...');
    expect(searchInput).toBeInTheDocument();
    const resultsCount = getByText('0 RESULTS');
    expect(resultsCount).toBeInTheDocument();
  });

  test('calls getCharacters with search input value on change', async () => {
    const setCharacters = jest.fn();
    const characters = {};
    const favorites = {};
    const { getByPlaceholderText } = render(
      <CharactersContext.Provider value={{ characters, setCharacters }}>
        <FavoritesContext.Provider value={{ favorites }}>
          <Search favoritesOnly={false} />
        </FavoritesContext.Provider>
      </CharactersContext.Provider>
    );
    const searchInput = getByPlaceholderText('Search a character...');
    fireEvent.change(searchInput, { target: { value: 'Spiderman' } });
    await waitFor(() =>
      expect(getCharacters).toHaveBeenCalledWith('Spiderman')
    );
  });
});
