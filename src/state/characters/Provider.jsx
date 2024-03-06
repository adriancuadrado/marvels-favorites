'use client';
import { useReducer } from 'react';
import reducer from './reducer';
import Context from './Context';

export default function CharactersProvider({ initialState, children }) {
  const [characters, dispatch] = useReducer(reducer, initialState);

  const setCharacters = (characters) =>
    dispatch({ type: 'SET', payload: characters });

  return (
    <Context.Provider value={{ characters, setCharacters }}>
      {children}
    </Context.Provider>
  );
}
