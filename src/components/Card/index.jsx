import Image from 'next/image';
import styles from './index.module.css';
import Heart from '../Heart';
import isMobile from '@/utils/isMobile';

export default () => (
  <div className={styles.card}>
    <Image
      className={styles.picture}
      src='/test-image.png'
      // TODO: Poner en el alt el nombre del personaje, que no se olvide
      alt='Adam Warlock'
      width={isMobile() ? 172.5 : 189}
      // TODO: Segun el figma la imagen es 189.97px
      // de alto, pero en realidad está incluyendo
      // la barra de color rojo asi que tengo que
      // restarselo
      height={189.97 - 5.38}
    />
    <div className={styles.info}>
      <div className={styles.red} />
      <span className={styles.name}>NAME</span>
      <Heart className={styles.heart} empty={Math.random() * 2 > 1} />
    </div>
  </div>
);
