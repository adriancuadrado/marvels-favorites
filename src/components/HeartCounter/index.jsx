'use client';
import { useContext } from 'react';
import Heart from '../Heart';
import styles from './index.module.css';
import FavoritesContext from '@/state/favorites/Context';

export default function HeartCounter() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className={styles.favorites}>
      <Heart />
      <span className={styles.heartCount}>{Object.keys(favorites).length}</span>
    </div>
  );
}
