'use client';
import { useContext } from 'react';
import Card from '../Card';
import styles from './index.module.css';
import Link from 'next/link';
import CharactersContext from '@/state/characters/Context';
import FavoritesContext from '@/state/favorites/Context';

export default function Results({ favoritesOnly }) {
  const { characters } = useContext(CharactersContext);
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  return (
    <div className={styles.results}>
      {Object.entries(characters).map(
        ([id, { imagePath, imageExtension, name, description }]) => {
          const isFavorite = id in favorites;
          return (
            (!favoritesOnly || isFavorite) && (
              <Link key={id} href={id}>
                <Card
                  image={`${imagePath}/standard_xlarge.${imageExtension}`}
                  name={name}
                  fullHeart={isFavorite}
                  onClickHeart={(event) => {
                    // Este `event.preventDefault()` está para evitar que rediriga
                    // hacia donde apunta el <Link /> que envuelve este componente
                    event.preventDefault();
                    isFavorite
                      ? removeFavorite(id)
                      : addFavorite(id, {
                          name,
                          description,
                          imagePath,
                          imageExtension,
                        });
                  }}
                />
              </Link>
            )
          );
        }
      )}
    </div>
  );
}
