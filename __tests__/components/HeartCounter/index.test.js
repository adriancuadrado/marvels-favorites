import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesContext from '@/state/favorites/Context';
import HeartCounter from '@/components/HeartCounter';

describe('HeartCounter component', () => {
  test('renders heart counter with correct count', () => {
    const favorites = {
      1: { id: '1', name: 'Favorite 1' },
      2: { id: '2', name: 'Favorite 2' },
    };
    const { getByText } = render(
      <FavoritesContext.Provider value={{ favorites }}>
        <HeartCounter />
      </FavoritesContext.Provider>
    );
    const heartCount = getByText(Object.keys(favorites).length.toString());
    expect(heartCount).toBeInTheDocument();
  });

  test('renders heart counter with count 0 if no favorites', () => {
    const favorites = {};
    const { getByText } = render(
      <FavoritesContext.Provider value={{ favorites }}>
        <HeartCounter />
      </FavoritesContext.Provider>
    );
    const heartCount = getByText('0');
    expect(heartCount).toBeInTheDocument();
  });
});
