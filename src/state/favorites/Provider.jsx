'use client';
import { useEffect, useReducer } from 'react';
import reducer from './reducer';
import Context from './Context';

export default function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(reducer, {});

  const loadFavorites = (characters) =>
    dispatch({ type: 'LOAD', payload: characters });

  const addFavorite = (id, character) =>
    dispatch({ type: 'ADD', payload: { id, character } });

  const removeFavorite = (id) => dispatch({ type: 'REMOVE', payload: id });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      loadFavorites(storedFavorites);
    }
  }, []);

  return (
    <Context.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </Context.Provider>
  );
}
