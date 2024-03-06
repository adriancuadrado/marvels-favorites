'use client';
import { useContext } from 'react';
import Heart from '../Heart';
import styles from './index.module.css';
import FavoritesContext from '@/state/favorites/Context';
import { useParams } from 'next/navigation';
import { EMPTY, FULL } from '../Heart/constants';
import ExternalImage from '../ExternalImage';

export default function Banner({ image, name, description }) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const { id } = useParams();
  const isFavorite = id in favorites;
  return (
    <div className={styles.banner}>
      <ExternalImage src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{name}</h1>
          <Heart
            testId='heart-button'
            className={styles.heart}
            empty={!isFavorite}
            type={isFavorite ? FULL : EMPTY}
            onClick={() => {
              isFavorite
                ? removeFavorite(id)
                : addFavorite(id, { image, name, description });
            }}
          />
        </div>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
}
