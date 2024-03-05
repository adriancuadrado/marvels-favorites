'use client';
import Image from 'next/image';
import styles from './index.module.css';
import magnifyingGlass from './magnifying-glass.svg';
import { useContext, useRef } from 'react';
import CharactersContext from '@/state/characters/Context';
import { getCharacters } from '@/api';
import FavoritesContext from '@/state/favorites/Context';

export default ({ favoritesOnly }) => {
  // Este 'requestRef' lo usamos para que el listado se actualize con el resultado de cada request hecha en orden
  // Supongamos que la request para buscar 'Thor' tardara un segundo pero la de 'Spiderman' tardara 10.
  // Si el usuario introduce primero 'Spiderman', empezaría a ejecutarse la request de 'Spiderman'. Luego el usuario
  // podría introducir 'Thor' y esta empezaría también. Luego, como la de 'Thor' tarda mucho menos, terminaría antes
  // que la de 'Spiderman', de modo que si actualizasemos la pantalla con los resultados cada vez que se terminen las
  // requests, lo que vería el usuario no coincidiría con lo que ha introducido en el buscador porque vería 'Spiderman'
  // a pesar de ser 'Thor' lo último que realmente ha introducido. Este error se puede reproducir facilmente copiando
  // 'hor' y luego escribiendo 't' y rapidamente Ctrl+V para pegar 'hor' para terminar de poner el nombre de 'Thor'.
  const requestRef = useRef(Promise.resolve());
  const { characters, setCharacters } = useContext(CharactersContext);
  const { favorites } = useContext(FavoritesContext);
  const characterIds = Object.keys(characters);
  const numResults = favoritesOnly
    ? characterIds.filter((id) => id in favorites).length
    : characterIds.length;
  return (
    <div className={styles.searchWithResults}>
      <div className={styles.search}>
        <Image src={magnifyingGlass} alt='Magnifying glass' priority />
        <input
          type='search'
          className={styles.inputSearch}
          placeholder='Search a character...'
          onChange={(event) => {
            const promise = getCharacters(event.target.value);
            requestRef.current = requestRef.current.then(() =>
              promise.then(setCharacters)
            );
          }}
        />
      </div>
      <span className={styles.results}>
        {numResults} RESULT{numResults != 1 && 'S'}
      </span>
    </div>
  );
};
