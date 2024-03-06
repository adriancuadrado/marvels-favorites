import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import FavoritesProvider from '@/state/favorites/Provider';
import FavoritesContext from '@/state/favorites/Context';

describe('FavoritesProvider', () => {
  let localStorageSpy;

  beforeEach(() => {
    localStorageSpy = jest
      .spyOn(window.localStorage.__proto__, 'setItem')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    localStorageSpy.mockRestore();
  });

  it('should render children properly', () => {
    const { getByText } = render(
      <FavoritesProvider>
        <div>Test Child</div>
      </FavoritesProvider>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('should add and remove favorites', async () => {
    const { getByText } = render(
      <FavoritesProvider>
        <FavoritesContext.Consumer>
          {(value) => (
            <div>
              <button
                onClick={() =>
                  value.addFavorite(1, { id: 1, name: 'Test Character' })
                }
              >
                Add Favorite
              </button>
              <button onClick={() => value.removeFavorite(1)}>
                Remove Favorite
              </button>
            </div>
          )}
        </FavoritesContext.Consumer>
      </FavoritesProvider>
    );

    // Add favorite
    await act(async () => {
      fireEvent.click(getByText('Add Favorite'));
    });
    expect(localStorageSpy).toHaveBeenCalledWith(
      'favorites',
      JSON.stringify({ 1: { id: 1, name: 'Test Character' } })
    );

    // Remove favorite
    await act(async () => {
      fireEvent.click(getByText('Remove Favorite'));
    });
    expect(localStorageSpy).toHaveBeenCalledWith('favorites', '{}');
  });
});
