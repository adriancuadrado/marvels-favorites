import styles from './index.module.css';
import Heart from '../Heart';
import { EMPTY_THICK, FULL } from '../Heart/constants';
import ExternalImage from '../ExternalImage';

export default function Card({ image, name, fullHeart, onClickHeart }) {
  return (
    <div className={styles.card}>
      <ExternalImage
        src={image}
        alt={`Imagen del personaje ${name}`}
        className={styles.image}
      />
      <div className={styles.info}>
        <div className={styles.red} />
        <span className={styles.name}>{name}</span>
        <Heart
          testId='heart-button'
          className={
            styles.heart + (fullHeart ? ' ' + styles['heart--full'] : '')
          }
          type={fullHeart ? FULL : EMPTY_THICK}
          onClick={onClickHeart}
        />
      </div>
    </div>
  );
}
